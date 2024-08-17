function modifyEverySecondElement(array) {
  return array.map((element, index) =>
    index % 2 === 1 ? element + 1 : element
  );
}

const array1 = [1, 2, 3];
const array2 = [9, 10, 11, 12];

const result1 = modifyEverySecondElement(array1);
console.log(result1);

const result2 = modifyEverySecondElement(array2);
console.log(result2);
