const reverseString = require('../scripts/reverseString')

test("Reverse single word", () => {
  expect(reverseString('hello')).toBe('olleh')
})

test("Reverse multiple words", () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh')
})

test("Don't reverse a number", () => {
  expect(reverseString(1234)).toBe('Not a String')
})