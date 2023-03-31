const caesarCipher = require('../scripts/caesarCipher')

test('Test lowercase shift 7', () => {
  expect(caesarCipher('abcd', 7)).toBe('hijk')
})

test('Test uppercase shift 10', () => {
  expect(caesarCipher('ABCD', 10)).toBe('KLMN')
})

test('Test lowercase wrapping shift', () => {
  expect(caesarCipher('tuvw', 15)).toBe('ijkl')
})

test('Test uppercase wrapping shift', () => {
  expect(caesarCipher('WXYZ', 4)).toBe('ABCD')
})

test('Test words', () => {
  expect(caesarCipher('Hello World', 4)).toBe('Lipps$Asvph')
})

test('Test punctuation', () => {
  expect(caesarCipher('!,#@', 4)).toBe("%0'D")
})