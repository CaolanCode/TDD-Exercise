const capitalise = require('../scripts/capitalise')

test('iReLaNd to IReLaNd', () => {
  expect(capitalise('iReLaNd')).toBe('IReLaNd')
})

test('ireland to Ireland', () => {
  expect(capitalise('ireland')).toBe('Ireland')
})

test('Don\'t capitalise a number', () => {
  expect(capitalise(1)).toBe('Not a word')
})

test('Don\'t capitalise multiple words', () => {
  expect(capitalise("hello there")).toBe('More than one word')
})