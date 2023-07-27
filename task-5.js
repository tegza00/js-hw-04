const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let newArrrays = array1.concat(array2);
console.log(newArrrays);

let total = 0;
for (let newArrray of newArrrays ){
    total += newArrray;
}
console.log("Total:", total);