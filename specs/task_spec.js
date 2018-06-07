const assert = require('assert')
const Task = require('../models/task.js')

describe("Task", function(){

  let task;

  beforeEach(function(){
    task = new Task(5, 1, 100);
  });

  it("has a difficulty", function(){
    assert.strictEqual(task.difficulty, 5);
  });

  it("has an urgency", function(){
    assert.strictEqual(task.urgency, 1);
  });

  it("has a reward", function(){
    assert.strictEqual(task.reward, 100);
  });

})
