const validate = (numbersArray, total) => {
  let splitSum = numbersArray.reduce((sum, num) => {
    return sum + num
  }, 0)
  if (splitSum === total) {
    return numbersArray
  } else if (splitSum > total) {
    let firstNum = numbersArray[0]
    numbersArray[0] = parseFloat((firstNum - .01).toFixed(2))
    return numbersArray
  } else if (splitSum < total) {
    let firstNum = numbersArray[0]
    numbersArray[0] = parseFloat((firstNum + .01).toFixed(2))
    return numbersArray
  }
}

const split = (total, count) => {
  let splitArr = []
  let divided = total/count
  let rounded = divided.toFixed(2)
  splitArr.length = count
  splitArr.fill(rounded)
  let numbersArray = splitArr.map((el) => {
    return parseFloat(el)
  })
  return numbersArray
}

const moneySplitter = (total, count) => {
  let numbersArray = split(total, count)
  console.log('split function returns', numbersArray)
  let finalNumbersArray = validate(numbersArray, total)
  console.log('validate function returns', finalNumbersArray)
  return finalNumbersArray
}

module.exports = { moneySplitter }
