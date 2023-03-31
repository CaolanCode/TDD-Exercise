const analyseArray = require('../scripts/analyseArray')

test('Check number array', () => {
  expect(analyseArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})

test('check character array', () => {
  expect(analyseArray(['a','c','e','q'])).toBe('Not a valid array of numbers')
})

test('check mixed array', () => {
  expect(analyseArray([1,'c',9,'q'])).toBe('Not a valid array of numbers')
})