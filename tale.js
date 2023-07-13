// kolobok

function kolobok (character) {
  switch (character) {
    case ('Дедушка'):
      return console.log('Я от дедушки ушел')

    case ('Заяц'):
      return console.log('Я от зайца ушел')

    case ('Лиса'):
      return console.log('Меня съели!')

    default:
      return console.log('Такого персонажа не существует!')
  }
}

// newYear

function newYear (character) {
  let callCharacter = ''

  for (let i = 0; i < 3; i++) {
    callCharacter += `${character}! `
  }

  return console.log(ourString)
}
