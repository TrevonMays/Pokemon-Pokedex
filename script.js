 class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
        this.drink = this.drink
    }
    sayName(){
        console.log(`${this.name}`)
        return this
    }
    drink(){

    }
    showStats(){
        console.log(`
        Name: ${this.name}
        Health: ${this.health}
        Speed: ${this.speed}
        Strength: ${this.strength} 
        `)
        return this
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10
    }
speakWisdom(){
    console.log("What one programer can do in one month, two programmers can do in two months.")
    return this
}
}
const newSensei = new Sensei("trey")
console.log(newSensei)
newSensei.speakWisdom()