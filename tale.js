// kolobok

function kolobok(character) {
  switch (character) {
    case 'Дедушка':
      return 'Я от дедушки ушел'

    case 'Заяц':
      return 'Я от зайца ушел'

    case 'Лиса':
      return 'Меня съели!'

    default:
      return 'Такого персонажа не существует!'
  }
}

// newYear

function newYear(character) {
  let callCharacter = ''

  for (let i = 0; i < 3; i++) {
    callCharacter += `${character}! `
  }

  return callCharacter
}
