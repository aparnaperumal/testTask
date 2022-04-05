
 
/*
Workflow 
    step 1: Remove negative value from array.
    step 2: Traverse through the array and negate the value of N-1 if N-1 is found.
    step 3: Traverse through the modified array 
            scenario 1: positive value found, return N+1
            scenario 2: no positive value found, return array.length + 1 
    Time complexity : O(3(N)) - O(N)
    Space compleity : O(1)
    


*/

function findMissingNatNumber(arr){
   //arr = [...new Set(arr)];
   arr = arr.filter((x)=>x>0);
   let size = arr.length;
   let i ;
    for (i = 0; i < size; i++) {
            let x = Math.abs(arr[i]);
            if (x - 1 < size && arr[x - 1] > 0)
                arr[x - 1] = -arr[x - 1];
        }
     for (i = 0; i < size; i++)
            if (arr[i] > 0){
                return i+1; 
            }

 return size+1;
}

console.log(findMissingNatNumber([-1,2,1,3,5,6,4,1]));
console.log(findMissingNatNumber([-3,4,5,6,7]));


/* Test cases to test te value */
// const assert = require("assert");


// describe("findNum", function () {
//   describe("#findMissingVal", function () {
//     it("should return 14", function () {
//       const result = findMissingNatNumber([-4,1,2,3,4,5,6,7,8,100,23,9,11,12,12,13,10]);
//       assert.strictEqual(result, 14);
//     });
//   });
// });

// describe("findNum", function () {
//   describe("#findMissingVal", function () {
//     it("should return 14", function () {
//       const result = findMissingNatNumber([-3,4,5,6,7]);
//       assert.strictEqual(result, 1);
//     });
//   });
// });
