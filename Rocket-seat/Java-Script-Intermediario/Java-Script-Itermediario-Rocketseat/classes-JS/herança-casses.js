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
    // não tem nada aqui
}


const dog = new Dog("chico tripa")
console.log(dog.name)
dog.makeNoise()






// Sobrescrevendo metodos