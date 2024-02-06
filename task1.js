// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];
let lowestNum = heights2[0];
for (const num of heights2) {
  if (num < lowestNum) {
    lowestNum = num;
  }
}
console.log(lowestNum);
