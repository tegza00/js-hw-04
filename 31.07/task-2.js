const numbers = [23,1,45,87,4,55,6];
let theBiggestNumber = numbers[0];

for(let number of numbers){
    if(number > theBiggestNumber) {
        theBiggestNumber = number;
    }
}
console.log("Найбільше число:", theBiggestNumber)