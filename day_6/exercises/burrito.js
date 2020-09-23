/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/burrito.js`

Add the following methods to this burrito class and call the methods below
the class:
1. addTopping
2. removeTopping
3. changeProtein
*/

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  addTopping() {
    this.toppings.push("peppers");
  }

  removeTopping() {
    this.toppings.pop();
  }

  changeProtein() {
    this.protein = this.protein.replace("Beans", "Beef");
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.addTopping();
console.log(dinner.toppings);

dinner.removeTopping();
console.log(dinner.toppings);

dinner.changeProtein();
console.log(dinner.protein);
