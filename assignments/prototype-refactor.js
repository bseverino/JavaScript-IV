/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(objAttr){
        this.createdAt = objAttr.createdAt,
        this.name = objAttr.name,
        this.dimensions = attr.dimensions
    }

    destroy(){
        return `${this.name} was removed from the game.`;
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