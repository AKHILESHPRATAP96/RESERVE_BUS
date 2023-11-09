// var i = 0;
// while (i < 5){
// i++;
// if(i === 3){
// continue;
// }
// console.log(i)}

// const arr = [10, 20, 30];
// let result = 0;

// function myFunction(value, index, array) {
// result += value;
// }
// arr.forEach(myFunction);
// console.log(`Result: ${result}`);

// function findSecondMax(nums) {
//     if (nums.length < 2) {
//       return "Array should have at least two elements";
//     }
  
//     let max = nums[0];
//     let secondMax = -Infinity;
  
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] > max) {
//         secondMax = max;
//         max = nums[i];
//       } else if (nums[i] > secondMax && nums[i] < max) {
//         secondMax = nums[i];
//       }
//     }
  
//     if (secondMax === -Infinity) {
//       return "There is no second maximum element.";
//     }
  
//     return secondMax;
//   }
  
//   const nums = [10, 5, 8, 20, 2];
//   const secondMax = findSecondMax(nums);
  
//   console.log(secondMax); // Output: 10
  
let obj={name:'rohit',age:10}

console.log(obj)
let x=obj
console.log(x)