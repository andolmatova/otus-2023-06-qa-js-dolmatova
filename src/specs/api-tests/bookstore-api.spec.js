import fetch from 'node-fetch'
import { expect, test } from '@jest/globals'
import { faker } from '@faker-js/faker'
import generateUser from '../../functions/generate-user.js'

const postMethod = 'POST'
const contentTypeHeader = { 'Content-type': 'application/json' }

test('Создание пользователя c ошибкой: логин уже используется', async () => {
  const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
    method: postMethod,
    body: JSON.stringify({ userName: 'ExistingUser', password: '12345Qwerty!' }),
    headers: contentTypeHeader
  })
  const result = await response.json()
  expect(response.status).toEqual(406)
  expect(result.code).toEqual('1204')
  expect(result.message).toEqual('User exists!')
})

test('Создание пользователя c ошибкой: некорректный пароль', async () => {
  const user = generateUser({ password: faker.internet.password({ length: 20 }) })
  const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
    method: postMethod,
    body: JSON.stringify(user),
    headers: contentTypeHeader
  })
  const result = await response.json()
  expect(response.status).toEqual(400)
  expect(result.code).toEqual('1300')
  expect(result.message).toEqual("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
})

test('Успешное создание пользователя', async () => {
  const user = generateUser()
  const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
    method: postMethod,
    body: JSON.stringify(user),
    headers: contentTypeHeader
  })
  expect(response.status).toEqual(201)
})

test('Генерация токена с ошибкой (некорректные логин и пароль)', async () => {
  const userWithIncorrectCredentials = { userName: '', password: 12345 }
  const response = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
    method: postMethod,
    body: JSON.stringify(userWithIncorrectCredentials),
    headers: contentTypeHeader
  })
  const result = await response.json()
  expect(response.status).toEqual(400)
  expect(result.code).toEqual('1200')
  expect(result.message).toEqual('UserName and Password required.')
})

test('Успешная генерация токена для существующего юзера', async () => {
  const existingUser = { userName: 'Lol', password: '12345Qq!))' }
  const response = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
    method: postMethod,
    body: JSON.stringify(existingUser),
    headers: contentTypeHeader
  })
  const responseBody = await response.json()
  expect(response.status).toEqual(200)
  expect(responseBody.token).toBeTruthy()
  expect(responseBody.expires).toBeTruthy()
  expect(responseBody.status).toEqual('Success')
  expect(responseBody.result).toEqual('User authorized successfully.')
})
