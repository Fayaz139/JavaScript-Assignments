/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output = {};

  for (let obj of transactions) {
    output[obj.category] = (output[obj.category] || 0) + obj.price;
  }
  
  return Object.entries(output).map(([category, total]) => ({
    category: category,
    totalSpent: total
  }));
}

module.exports = calculateTotalSpentByCategory;