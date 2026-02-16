/* Meals Performance Data Analysis - Using JavaScript arrays of objects to calculate event performance based on total meals ordered and to identify the most popular dishes using reduce(), map(), and sort() methods. */

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
console.log("******* TOTAL MEALS PER EVENT ********");
console.log("Wedding total:", getTotalOrders(weddingMeals));
console.log("Party total:", getTotalOrders(partyMeals));
console.log("Corporate total:", getTotalOrders(corporateMeals));

/****************** Find the most popular dish per event **************/
function getTopDish(meals) {
  return meals.reduce((top, meal) =>
    meal.numberOfOrders > top.numberOfOrders ? meal : top,
  );
}
console.log("******** MOST POPULAR DISH PER EVENT ********");
console.log("Wedding Top Dish:", getTopDish(weddingMeals));
console.log("Party Top Dish:", getTopDish(partyMeals));
console.log("Corporate Top Dish:", getTopDish(corporateMeals));

/**************** Comparing events performance ******************/
const events = [
  { event: "Wedding", meals: weddingMeals },
  { event: "Party", meals: partyMeals },
  { event: "Corporate", meals: corporateMeals },
];
/******* creates a comparison dataset. **********/
const performance = events.map((e) => ({
  event: e.event,
  totalOrders: getTotalOrders(e.meals),
}));

console.log("****** MOST POPULAR DISH PER EVENT *******");
console.log("Wedding Top Dish:", getTopDish(weddingMeals));
console.log("Party Top Dish:", getTopDish(partyMeals));
console.log("Corporate Top Dish:", getTopDish(corporateMeals));

/*************** Determining the best performing event ******************/
const bestEvent = performance.reduce((best, current) =>
  current.totalOrders > best.totalOrders ? current : best,
);
console.log("***** BEST PERFORMING EVENT *****");
console.log(bestEvent.event, "with", bestEvent.totalOrders, "total meals");

/**************** Sorting dishes by porpularity (from most to least ordered) ******************/
const sortedWedding = [...weddingMeals].sort(
  (a, b) => b.numberOfOrders - a.numberOfOrders,
);

console.log("***** WEDDING DISHES SORTED BY POPULARITY *****");
console.table(sortedWedding);

/*********************** Searching for a specific dish ********************/
const findDish = weddingMeals.find((meal) => meal.name === "Beef Stew");

console.log("**** SEARCH RESULT ****");
console.log("Found dish:", findDish);

console.log("***** FINAL ANALYSIS SUMMARY *****");

console.log("Wedding Total:", getTotalOrders(weddingMeals));
console.log("Party Total:", getTotalOrders(partyMeals));
console.log("Corporate Total:", getTotalOrders(corporateMeals));

console.log("Best Event:", bestEvent.event);

console.log("Top Wedding Dish:", getTopDish(weddingMeals).name);

/* Use localStorage to store catering order data in the browser. JSON.stringify() and JSON.parse() methods are used to convert between objects and strings. This allows performance measures to remain available even after page reload. */

/* Convert objects to string and load existing data or create empty storage arrays structure */
const data = JSON.parse(localStorage.getItem("cateringData")) || {
  wedding: [],
  party: [],
  corporate: [],
};

/************************** Update Form Submission  *********************/
const form = document.getElementById("orderForm");

if (form) {
  form.addEventListener("submit", function (e) {
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
    saveData();
    this.reset();
  });
}
