'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, starterIndex = 2, mainIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const rest1 = {
  name: 'Capri',
  numGest: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// restaurant.numGest = rest1.numGest || 10;
// restaurant.numGest = rest2.numGest || 10;
rest1.numGest ||= 10;
rest2.numGest ||= 10;
console.log(rest1);
console.log(rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// Nullish assignment operator (null and undefined)
rest1.numGest ??= 10;
rest2.numGest ??= 10;
console.log(rest1);
console.log(rest2);

/*
// Nullish: null and undefined (NOT 0 or '')
const guest = restaurant.numGuest ?? 10;
console.log(guestCorrect);

// restaurant.numGest = undefined | 0
const guestCorrect = restaurant.numGuest || 10;
console.log(guest);

// or
console.log(3 || 'Jonas');
console.log(false || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 'Jonas');
console.log(undefined || null);
console.log(3 || 'Jonas' || 0 || '' || true || false || undefined || null);

const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

const guests2 = restaurant.numGuest || 10;
console.log(guests2);

// and
console.log(3 && 'Jonas');
console.log(false && 'Jonas');
console.log('' && 'Jonas');
console.log(true && 'Jonas');
console.log(undefined && null);
console.log(3 && 'Jonas' && 0 && '' && true && false && undefined && null);

const guests3 = restaurant.numGuest && 10;
console.log(guests3);

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

const arr = [1, 2, 3, ...[4, 5]];
const [a, b, c, ...others] = arr;
console.log(others);

const [risotto, focaccia, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(risotto, focaccia, otherFood);

const { thu, ...weekdays } = restaurant.openingHours;
console.log(thu, weekdays);

function add(...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}
add(1, 2, 3);

const x = [23, 65, 28];
console.log(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

const arr = [4, 5, 6];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Bakso'];
console.log(newMenu);

const newMenuCopy = [...newMenu];
console.log(newMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
console.log(...str);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1"),
  prompt('Ingredient 2'),
  prompt('Ingredient 3'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

const newRestaurant = { ...restaurant, founder: 'Guisppe' };
console.log(newRestaurant);
restaurant.orderDelivery({
  time: '22:45',
  address: 'Via Del Sole, 11',
  // starterIndex: 0,
  mainIndex: 1,
});

const { categories, name: restaurantName, openingHours } = restaurant;
console.log(categories, restaurantName, openingHours);

let a, b, c;
const obj = { a: 1, b: 2, c: 3 };
({ a, b, c } = obj);
console.log(a, b, c);

const {
  fri: { close, open },
} = openingHours;
console.log(close, open);

const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(a, b, c, x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

const [starter, main] = restaurant.order(1, 0);
console.log(starter, main);

const nested = [1, 2, 3, [4, 5]];
const [i, q = 10, , [j, k]] = nested;
console.log(i, q, j, k);
*/
