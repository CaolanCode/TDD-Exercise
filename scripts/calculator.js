const checkNumbers = (num1, num2) => {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return true
  }
  return false
}

const add = (num1, num2) => {
  if(checkNumbers(num1, num2)) {
    return num1 + num2
  }
  return "Not valid numbers"
}

const subtract = (num1, num2) => {
  if(checkNumbers(num1, num2)) {
    return num1 - num2
  }
  return "Not valid numbers"
}

const multiply = (num1, num2) => {
  if(checkNumbers(num1, num2)) {
    return num1 * num2
  }
  return "Not valid numbers"
}

const divide = (num1, num2) => {
  if(checkNumbers(num1, num2)) {
    return num1 / num2
  }
  return "Not valid numbers"
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
}

module.exports = calculator