// heranças com classes
class animal {

    constructor(name) {
        this.name = name 
    }

    makeNoise() {
        console.log("algum som generico do animal")
    }
}

// vai herdar todas as propriedades da class animal
class Dog extends animal {


    // sobresecrevendo o makeNoise
    makeNoise() {
        console.log("Woof, Woof, ai lobo mau")
    }
}

const dog = new Dog("chico tripa")
console.log(dog.name)
dog.makeNoise()
