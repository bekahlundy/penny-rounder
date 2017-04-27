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

const split = (total) => {
  let splitArr = []
  let divided = total/3
  let rounded = divided.toFixed(2)
  splitArr.push(rounded, rounded, rounded)
  let numbersArray = splitArr.map((el) => {
    return parseFloat(el)
  })
  return numbersArray
}

const moneySplitter = (total) => {
  let numbersArray = split(total)
  console.log('split function returns', numbersArray)
  let finalNumbersArray = validate(numbersArray, total)
  console.log('validate function returns', finalNumbersArray);
  return finalNumbersArray
}


module.exports = { moneySplitter }
