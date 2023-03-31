const calculator = require('../scripts/calculator')

test('Test addition' , () => {
  expect(calculator.add(4,5)).toBe(9)
})

test('Test subtraction' , () => {
  expect(calculator.subtract(9,5)).toBe(4)
})

test('Test multiplication' , () => {
  expect(calculator.multiply(5,5)).toBe(25)
})

test('Test division' , () => {
  expect(calculator.divide(20,5)).toBe(4)
})

test('Test with string input' , () => {
  expect(calculator.add('hello',5)).toBe('Not valid numbers')
})

test('Test with boolean input' , () => {
  expect(calculator.subtract(8,true)).toBe('Not valid numbers')
})

test('Test with null' , () => {
  expect(calculator.multiply(null,7)).toBe('Not valid numbers')
})

test('Test with undefined' , () => {
  expect(calculator.divide(undefined,1)).toBe('Not valid numbers')
})