const uppercaseShift = (letter, shift) => {
  const charCode = letter.charCodeAt()
  return String.fromCharCode(((charCode + shift) <= 90) ? charCode + shift : (charCode + shift) % 90 + 64)
}

const lowercaseShift = (letter, shift) => {
  const charCode = letter.charCodeAt()
  return String.fromCharCode(((charCode + shift) <= 122) ? charCode + shift : (charCode + shift) % 122 + 96)
}

const caesarCipher = (string, shift) => {
  let newString = ""
  const splitString = string.split('')
  splitString.forEach(letter => {
    if(letter === letter.toUpperCase()) {
      newString += uppercaseShift(letter, shift)
    } else if(letter === letter.toLowerCase()) {
      newString += lowercaseShift(letter, shift)
    }
  })  
  return newString
}

module.exports = caesarCipher