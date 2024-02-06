// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
let smallName = heights2[0];

for (const name of heights2) {
  //   console.log(name);
  if (name.length < smallName.length) {
    smallName = name;
  }
}
console.log(smallName);
