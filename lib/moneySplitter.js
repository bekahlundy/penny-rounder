

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
  return split(total)
}


module.exports = { moneySplitter }
