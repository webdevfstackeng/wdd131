/* Meals Performance Data Analysis - Using arrays of objects to calculate event performance based on total meals ordered and to identify the most popular dishes using reduce(), map(), and sort() methods. */

/************************ Events array of objects ******************/
const weddingMeals = [
  { id: 1, name: "Beef Stew", numberOfOrders: 120 },
  { id: 2, name: "Grilled Chicken", numberOfOrders: 95 },
  { id: 3, name: "Vegetable Pasta", numberOfOrders: 60 },
];

const partyMeals = [
  { id: 1, name: "Mini Burgers", numberOfOrders: 140 },
  { id: 2, name: "Chicken Wings", numberOfOrders: 110 },
  { id: 3, name: "Salad Bowl", numberOfOrders: 50 },
];

const corporateMeals = [
  { id: 1, name: "Roast Beef", numberOfOrders: 130 },
  { id: 2, name: "Grilled Fish", numberOfOrders: 85 },
  { id: 3, name: "Rice & Veg", numberOfOrders: 70 },
];

/********* Culculate total meals served per event to determine event performance **********/
function getTotalOrders(meals) {
  return meals.reduce((total, meal) => total + meal.numberOfOrders, 0);
}

console.log("Wedding total:", getTotalOrders(weddingMeals));
console.log("Party total:", getTotalOrders(partyMeals));
console.log("Corporate total:", getTotalOrders(corporateMeals));

/****************** Find the most popular dish per event **************/
function getTopDish(meals) {
  return meals.reduce((top, meal) =>
    meal.numberOfOrders > top.numberOfOrders ? meal : top,
  );
}

console.log(getTopDish(weddingMeals));

/**************** Comparing events performance ******************/
const events = [
  { event: "Wedding", meals: weddingMeals },
  { event: "Party", meals: partyMeals },
  { event: "Corporate", meals: corporateMeals },
];

const performance = events.map((e) => ({
  event: e.event,
  totalOrders: getTotalOrders(e.meals),
}));

console.log(performance);

/*************** Determining the best performing event ******************/
const bestEvent = performance.reduce((best, current) =>
  current.totalOrders > best.totalOrders ? current : best,
);

console.log("Top Performing Event:", bestEvent);

/**************** Sorting dishes by porpularity (from most to least ordered) ******************/
const sortedWedding = [...weddingMeals].sort(
  (a, b) => b.numberOfOrders - a.numberOfOrders,
);

console.log(sortedWedding);

/*********************** Searching for a specific dish ********************/
const findDish = weddingMeals.find((meal) => meal.name === "Beef Stew");

console.log(findDish);

/****************** Store all catering data events meals in one object ********************/
const cateringData = {
  wedding: weddingMeals,
  party: partyMeals,
  corporate: corporateMeals,
};

getTotalOrders(cateringData.wedding);  

/* Use localStorage to store catering order data in the browser. JSON.stringify() and JSON.parse() methods are used to convert between objects and strings. This allows performance measures to remain available even after page reload. */

/* Convert objects to string and load existing data or create empty storage arrays structure */
const data = JSON.parse(localStorage.getItem("cateringData")) || {
  wedding: [],
  party: [],
  corporate: [],
};

/************************** Update Form Submission  *********************/
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

  saveData(); // Save string to LocalStorage

  this.reset();
});
