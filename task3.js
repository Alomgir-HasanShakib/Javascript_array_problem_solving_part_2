// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(
  laptopQuentity,
  tabletQuentity,
  mobileQuentity
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;
  const laptopPrice = laptop * laptopQuentity;
  const tabletPrice = tablet * tabletQuentity;
  const mobilePrice = mobile * mobileQuentity;

  const totalBudget = laptopPrice + tabletPrice + mobilePrice;

  return totalBudget;
}

const budget = calculateElectronicsBudget(1, 1, 2);
console.log(budget);
