const assert = require('assert')
const Food = require('../models/food.js')

describe("Food", function(){

  let food;

  beforeEach(function(){
    food = new Food("Pizza", 10);
  });

  it("has a name", function(){
    assert.strictEqual(food.name, "Pizza");
  });

  it("has a replenishment value", function(){
    assert.strictEqual(food.replenishmentValue, 10);
  });


})
