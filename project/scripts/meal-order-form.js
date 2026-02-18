/* The system captures meal orders through a form, stores them in arrays of objects grouped by event type, and computes performance metrics dynamically using JavaScript methods. */

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const eventType = document.getElementById("eventType").value;
  const dishName = document.getElementById("dishName").value;
  const orders = Number(document.getElementById("orders").value);

  const newMeal = {
    id: Date.now(),
    name: dishName,
    numberOfOrders: orders,
  };

  data[eventType].push(newMeal);

  this.reset();
});

const data = {
  wedding: [],
  party: [],
  corporate: [],
};

/****** Culculate total meals *******************/
function getTotal(meals) {
  return meals.reduce((sum, meal) => sum + meal.numberOfOrders, 0);
}

/****************** Find most popular dish ************************/
function getTopDish(meals) {
  if (meals.length === 0) return "None";

  const top = meals.reduce((a, b) =>
    b.numberOfOrders > a.numberOfOrders ? b : a,
  );

  return `${top.name} (${top.numberOfOrders})`;
}
