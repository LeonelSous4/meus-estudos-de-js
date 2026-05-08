// Ativando o modo restrito globalmente ou no topo do script para evitar erros silenciosos
"use strict";

function showMessage() {
    // No modo estrito, somos OBRIGADOS a usar let, const ou var
    let personName = "Leo"; 

    console.log("Olá,", personName);
}

// Chamando a função para executar o console.log
showMessage();

// --- ENTENDENDO A CLASSE ---

// 1. "class" é o molde. Aqui definimos como um Estudante deve ser.
class Student {
    
    // 2. "get" cria um Getter. Ele permite que acessemos "point" como se fosse uma variável,
    // mas na verdade ele executa uma função por trás.
    get point() {
        return 7; // Sempre retornará 7 quando alguém ler student.point
    }

    // EXTRA: Para que a linha "student.point = 10" funcione, precisaríamos de um SETTER:
    /*
    set point(valor) {
        console.log("Tentando mudar a nota para: " + valor);
        // Aqui viria a lógica para salvar esse valor
    }
    */
}

// 3. "new" é o construtor. Ele cria uma INSTÂNCIA (um objeto real) baseada na classe.
let student = new Student(); 

// 4. Tentativa de atribuição:
// Como só existe o "get" e não o "set", se tentarmos mudar o valor, 
// o JavaScript vai ignorar ou dar erro (no strict mode), pois a propriedade é apenas de LEITURA.
student.point = 10; 

console.log("A nota atual é:", student.point); // Continuará sendo 7