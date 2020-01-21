/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(objAttr){
        this.createdAt = objAttr.createdAt,
        this.name = objAttr.name,
        this.dimensions = objAttr.dimensions
    }

    destroy(){
        return `${this.name} has died.`;
    }
}

class CharacterStats extends GameObject{
    constructor(charAttr){
        super(charAttr);
        this.healthPoints = charAttr.healthPoints
    }

    takeDamage(){
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats{
    constructor(humAttr){
        super(humAttr);
        this.team = humAttr.team,
        this.weapons = humAttr.weapons,
        this.language = humAttr.language
    }

    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue' 
  });

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue'
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

class Villian extends Humanoid{
    constructor(vilAttr){
        super(vilAttr);
        this.magic = vilAttr.magic
    }

    attack(target){
        let magicStrength = Math.ceil(Math.ceil(Math.random() * 4) + this.magic);
        if (this.healthPoints <= 0) {
          console.log(`${this.name} is dead and can't attack.`);
          return;
        } else if (target.healthPoints <= 0) {
          console.log (`${this.name} tries to flare ${target.name}, but ${target.name} is already dead.`);
          return;
        } else {      
          console.log(`${this.name} flares ${target.name} for ${magicStrength} damage.`);
          target.healthPoints = target.healthPoints -= magicStrength;
          if (target.healthPoints <= 0) {
            console.log(target.destroy());
          } else {
            console.log(`${target.name} has ${target.healthPoints} health left.`);
          }
        }    
    }
}

class Hero extends Humanoid{
    constructor(herAttr){
        super(herAttr);
        this.strength = herAttr.strength
    }

    attack(target){
        let attackStrength = (Math.ceil(Math.random() * 5) + this.strength);
        if (this.healthPoints <= 0) {
          console.log(`${this.name} is dead and can't attack.`);
          return;
        } else if (target.healthPoints <= 0) {
          console.log (`${this.name} tries to cleave ${target.name}, but ${target.name} is already dead.`);
          return;
        } else {      
          console.log(`${this.name} cleaves ${target.name} for ${attackStrength} damage.`);
          target.healthPoints = target.healthPoints -= attackStrength;
          if (target.healthPoints <= 0) {
            console.log(target.destroy());
          } else {
            console.log(`${target.name} has ${target.healthPoints} health left.`);
          }
        }    
    }
}

const wol = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 12,
    name: 'Warrior of Light',
    team: 'Scions of the Seventh Dawn',
    weapons: [
      'Axe'
    ],
    language: 'Common',
    strength: 3
  });

const hades = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 15,
    name: 'Emet Selch',
    team: 'Ascians',
    weapons: [
        'Grimoire',
        'Gun'
    ],
    language: 'Amaurotine',
    magic: 3
});

const battle = (playerOne, playerTwo) => {
    do {
        playerOne.attack(playerTwo);
        if (playerTwo.healthPoints > 0){
            playerTwo.attack(playerOne);
        }
    }

    while (playerOne.healthPoints > 0 && playerTwo.healthPoints > 0);
}

battle(wol, hades);