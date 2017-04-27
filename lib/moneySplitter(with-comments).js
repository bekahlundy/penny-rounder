const validate = (numbersArray, total) => {
  // here I am adding together the numbersArray by using .reduce
  let splitSum = numbersArray.reduce((sum, num) => {
    return sum + num
  }, 0)
  // if splitSum and total are equal, just return the array. But if one is greater or less than the other, add or subtract a penny
  if (splitSum === total) {
    return numbersArray
  } else if (splitSum > total) {
    // here I grab the first number in the array so I can change it
    let firstNum = numbersArray[0]
    // In order to subtract .01 and using .toFixed(), I need to parseFloat again to keep it a number
    numbersArray[0] = parseFloat((firstNum - .01).toFixed(2))
    // return the altered numbersArray
    return numbersArray
  } else if (splitSum < total) {
    // here I grab the first number in the array so I can change it
    let firstNum = numbersArray[0]
    // In order to add .01 and using .toFixed(), I need to parseFloat again to keep it a number
    numbersArray[0] = parseFloat((firstNum + .01).toFixed(2))
    // return the altered numbersArray
    return numbersArray
  }
}

const split = (total, count) => {
  // created an empty array to push the split numbers into
  let splitArr = []
  // created a variable to hold our divided number
  let divided = total/count
  // round our divided number to only 2 decimals
  let rounded = divided.toFixed(2)
  // here I set the splitArr length to the parameter 'count'
  splitArr.length = count
  // here I fill the splitArr with our variable rounded (the total/count)
  splitArr.fill(rounded)
  // our splitArr is now full with strings, but we want numbers. So here I map through our array and use parseFloat to turn it into a number (and keep the decimals)
  let numbersArray = splitArr.map((el) => {
    return parseFloat(el)
  })
  return numbersArray
}

const moneySplitter = (total, count) => {
  // setting the variable 'numbersArray' to the array that the split() function returns when it is called
  let numbersArray = split(total, count)
  console.log('split function returns', numbersArray)
  // setting the variable 'finalNumbersArray' to the array that validate() function returns when it is called.
  let finalNumbersArray = validate(numbersArray, total)
  console.log('validate function returns', finalNumbersArray)
  // returns the finalNumbersArray
  return finalNumbersArray
}

module.exports = { moneySplitter }
