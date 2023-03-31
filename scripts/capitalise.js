// return first letter capitalised

const capitalise = (word) => {
  if(typeof word === "string") {
    if(word.indexOf(' ') !== -1) {
      return "More than one word"
    }
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  return "Not a word"
}
module.exports = capitalise