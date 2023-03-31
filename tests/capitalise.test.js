const capitalise = require('../scripts/capitalise')

test('iReLaNd to Ireland', () => {
  expect(capitalise('iReLaNd')).toBe('Ireland')
})