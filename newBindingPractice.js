/*
  Create a function that you can create new superheroes with
  Each super hero should have:
    - a name,
    - a power,
    - a battle cry,
    - a function to shout the battle cry
    - a function to use the super power
*/

var SuperHero = function(name, power, battleCry) {
  this.name = name;
  this.power = power;
  this.battleCry = battleCry,
  this.shout = function() {
    console.log(this.name + "yells " + this.battleCry + "!");
}
  this.powerUse = function() {
    console.log(this.name + "channels their energy to " + this.power);
  };
}

var theFlash = new SuperHero("Flash", "the speedforce", "too slow");
var hoover = new SuperHero("Hoover", "unlimited consumption", "nom nom nom nom");
var nightcrawler = new SuperHero("Nightcrawler","teleportation","BAMF");

//
