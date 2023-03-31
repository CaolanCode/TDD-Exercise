const reverseString = (string) => {
  if(typeof string === "string") {
    const stringArray = string.split("")
    const reverseArray = stringArray.reverse()
    const joinArray = reverseArray.join("")
    return joinArray
  }
  return "Not a String"
}
module.exports = reverseString