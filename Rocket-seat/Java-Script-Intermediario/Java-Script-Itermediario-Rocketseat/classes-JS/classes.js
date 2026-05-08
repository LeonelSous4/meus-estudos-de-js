// Criando classe com metodo constructor

class Person {

    // constructor é uma função que vai ser ativada sempre que a class for instanciada

    constructor(name, age, weight) {
        console.log(`Meu nome é`, name, 'e tenho', age, 'anos', 'e peso', weight, 'kg')
    }
}

// Instanciando
const person = new Person("Leonel", 25, 70)






// propriedades 

class Products {
    constructor(name) {
        this.name = name 
    }
}

const Product = new Products("teclado")

console.log(Product.name)

const Product1 = new Products("Mouse")

console.log(Product1.name)



// Adicionando Metodo nas Classes

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail () {
        console.log("Mandando E-mail para", this.name,
            "para o endereço", this.email
        )
    }
}

const user = new User ("Leonel", "LeoSousa@gmail.com")
user.sendEmail()









// Metodo Estatico
// acessa sem instanciar
class User1 {
    static ShowMessage () {
        console.log("essa é uma mensagem")
    }
}


User1.ShowMessage()

// const user2 = new User1()
// user2.ShowMessage()