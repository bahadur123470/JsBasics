const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
const marvelArr = [ "ironman", "captain america", "hulk", "thor", "vision", "flash",]

const myArr = new Array(numArr, alphaArr, marvelArr);
console.log(myArr);

//  Array Methods 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.push(11)
console.log(arr);

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(1)
console.log(arr)

console.log(arr.includes(7));
console.log(arr.includes(12));
console.log(arr.indexOf(7));
console.log(arr.indexOf(12));

const arr2 = arr.join()
console.log(arr);
console.log(arr2);
console.log(typeof arr2);

//  Difference between slice and splice

const arr3 = [11, 12, 13, 14, 15]
console.log("A", arr3);

const sliceArr = arr3.slice(0, 3)
console.log(sliceArr)
console.log("B", arr3);

const spliceArr = arr3.splice(0, 3)
console.log(spliceArr)
console.log("C", arr3);