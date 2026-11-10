class Animal {
    constructor(kind, sound) {
        this.kind = kind
        this.sound = sound
    }


    talk(){
        console.log(`${this.kind} says ${this.sound}`)
    }
}


class Cat extends Animal {
    constructor(name){
        super("cat", "meow")
        this.name = name
    }

    talk(){
        console.log(`${this.kind} ${this.name} says ${this.sound}`)
    }
}


// const cat = new Cat("Murchik")
// cat.talk()



class MeinKung extends Cat {
    constructor(){
        super("OLOLOOL")
    }
}

// const cat = new MeinKung("Murchik")
// cat.talk()



class Dog extends Animal {
     constructor(){
        super("dog", "bark")
    }
}


// const dog = new Dog()
// dog.talk()

// console.log(dog.hasOwnProperty("name"))



class Chicken extends Animal {
    constructor(){
        super("chicken", "ko-ko")
    }
}

const animals = [
    new Cat("Cat1"),
    new Cat("Cat2"),
    new Dog("Dog1"),
    new Chicken("Chicken1")
]


animals.forEach((animal)=> animal.talk())