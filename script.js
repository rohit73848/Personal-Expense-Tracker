const expenses = [
  { id: 1, item: "Groceries", amount: 1500, category: "Food" },
  { id: 2, item: "Electricity Bill", amount: 1200, category: "Utility" },
  { id: 3, item: "Restaurant", amount: 800, category: "Food" },
  { id: 4, item: "Internet", amount: 600, category: "Utility" },
];

let foodExpenses = expenses.filter(
  (checkFood) => checkFood.category === "Food",
);
let totalFoodCost = foodExpenses.reduce((acc, val) => {
  return acc + val.amount;
}, 0);
let sortedExpenses = expenses.sort((b, a) => {
  return a.amount - b.amount;
});
console.log(totalFoodCost);
console.log(sortedExpenses);
