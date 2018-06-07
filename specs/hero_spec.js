const assert = require('assert')
const Hero = require('../models/hero.js')
const Food = require('../models/food.js')
const Task = require('../models/task.js')

describe("Hero", function(){

  let hero;
  let food1;
  let food2;
  let task1;
  let task2;
  let task3;
  let task4;
  let task5;

  beforeEach(function(){
    hero = new Hero("Connor", "Pizza");
    food1 =  new Food("Pizza", 10);
    food2 =  new Food("Apple", 10);
    task1 = new Task(1, 1, 10)
    task2 = new Task(5, 5, 100)
    task3 = new Task(3, 2, 1)
    task4 = new Task(2, 3, 50)
    task5 = new Task(4, 4, 600)

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

  it("Can eat", function(){
    hero.eat(food2);
    assert.strictEqual(hero.health ,110);
  });

  it("Can eat", function(){
    hero.eat(food1);
    assert.strictEqual(hero.health ,115);
  });

  it("can add task", function(){
    hero.addTask(task1);
    assert.strictEqual(hero.tasks.length , 1);
  });

  it("can sort tasks by urgency, most urgent first", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    hero.addTask(task5);

    expected = [task2, task5, task4, task3, task1]
    hero.sort("Urgency");
    assert.deepStrictEqual(hero.tasks, expected);
  });

  it("can sort tasks by difficulty, most difficult first", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    hero.addTask(task5);

    expected = [task2, task5, task3, task4, task1]
    hero.sort("Difficulty");
    assert.deepStrictEqual(hero.tasks, expected);
  });

  it("can sort tasks by reward, most rewarding first", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    hero.addTask(task5);

    expected = [task5, task2, task4, task1, task3]
    hero.sort("Reward");
    assert.deepStrictEqual(hero.tasks, expected);
  });



})
