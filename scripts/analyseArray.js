const checkArray = (arr) => {
  if(Array.isArray(arr)) {
    for(let i in arr) {
      if(typeof arr[i] !== 'number') {
        return false
      }
    }
    return true
  }
  return false 
}

const analyseArray = (arr) => {
  if(!checkArray(arr)) {
    return "Not a valid array of numbers"
  }
  const length = arr.length
  const total = arr.reduce((total, sum) => (total += sum),0)
  const average = total / length
  const min = arr.reduce((current, previous) => Math.min(current, previous))
  const max = arr.reduce((current, previous) => Math.max(current, previous))
  return {
    "average": average,
    "min": min,
    "max": max,
    "length": length
  }
}

module.exports = analyseArray