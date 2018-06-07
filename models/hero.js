var Hero = function(name, food){
  this.name = name
  this.health = 100;
  this.food = food;
  this.tasks = []
}

Hero.prototype.talk = function () {
  return "My name is " + this.name;
};

Hero.prototype.eat = function (food) {
  if(food.name === this.food){
    this.health += (food.replenishmentValue * 1.5);
  }else {
    this.health += (food.replenishmentValue);
  }

};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};



Hero.prototype.sort = function (sortAttribute) {
    if(sortAttribute === "Reward"){
        this.tasks.sort(function(a , b){
        return b.reward - a.reward;
        })
    } else if (sortAttribute === "Difficulty") {
        this.tasks.sort(function(a , b){
        return b.difficulty - a.difficulty;
        })
    } else if (sortAttribute === "Urgency") {
      this.tasks.sort(function(a , b){
      return b.urgency - a.urgency;
      })
    }
};


module.exports = Hero;
