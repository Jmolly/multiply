module.exports = function multiply(first, second) {
  const firstArray = first.split('').reverse();
  const secondArray = second.split('').reverse();

  let resultArray = [];

  firstArray.map((el, index) => {
    secondArray.map((el2, index2) => {
      const m = el * el2;
      resultArray[index + index2] = (resultArray[index + index2]) ? resultArray[index + index2] + m : m;
    })
  })

  for (let i = 0; i < resultArray.length; i++) {
    let dozens = Math.floor(resultArray[i] / 10);
    let number = resultArray[i] % 10;
    resultArray[i] = number;

    if (resultArray[i + 1])
      resultArray[i + 1] += dozens;
    else if (dozens != 0)
      resultArray[i + 1] = dozens;
  }

  return resultArray.reverse().join('')
}
