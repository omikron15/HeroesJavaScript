const assert = require('assert')
const Hero = require('../models/hero.js')

describe("Hero", function(){

  let hero;

  beforeEach(function(){
    hero = new Hero("Connor", "Pizza");
  });

  it("has a name", function(){
    assert.strictEqual(hero.name, "Connor");
  });

  it("has health", function(){
    assert.strictEqual(hero.health, 100);
  });

  it("has a favourite food", function(){
    assert.strictEqual(hero.food, "Pizza");
  });

  it("can talk", function(){
    assert.strictEqual(hero.talk(), "My name is Connor");
  });

  it("has a collection of tasks", function(){
    assert.strictEqual(hero.tasks.length, 0);
  });

})
