//  Shallow copy (cópia rasa) é uma cópia de um objeto onde apenas o primeiro nível de propriedades é copiado. Se o objeto original tiver propriedades que são objetos ou arrays, a cópia rasa irá referenciar os mesmos objetos ou arrays, em vez de criar cópias independentes. Isso significa que alterações feitas em objetos ou arrays dentro da cópia rasa afetarão o objeto original e vice-versa.

// Exemplo de Shallow Copy usando Object.assign()

const HtmlCourse = {
    course: "HTML",
    duration: "2 months",
    studentes: [{name: "John", email: 'john@gmail.com'}],
}

const JsCourse = {
     // usando spread operator para criar uma cópia rasa do objeto HtmlCourse
    ...HtmlCourse,
    course: "JavaScript",
    duration: "4 months",
}

console.log(JsCourse, HtmlCourse); // { course: 'JavaScript', duration: '2 months', studentes: [ { name: 'John', email: 'john@gmail.com' } ] } { course: 'HTML', duration: '2 months', studentes: [ { name: 'John', email: 'john@gmail.com' } ] }

// adicionando um novo estudante ao curso de JavaScript
JsCourse.studentes.push({name: "Zé Priquito", email: 'ze@gmail.com'});

console.log(JsCourse, HtmlCourse);

// fez apenas uma referencia pois e uma copia rasa, ou seja, o array de estudantes é o mesmo para ambos os objetos, então quando adicionamos um novo estudante ao curso de JavaScript, ele também aparece no curso de HTML.


















console.log("############## Deep Copy ##############");
console.log("################# Copia profunda #################");

// Deep copy (cópia profunda) é uma cópia de um objeto onde todas as propriedades, incluindo objetos e arrays aninhados, são copiados de forma independente. Isso significa que alterações feitas em objetos ou arrays dentro da cópia profunda não afetarão o objeto original e vice-versa.



const HtmlCurso = {
    course: "HTML",
    duration: "2 months",
    students: [{name: "John", email: 'john@gmail.com'}],
}


const JsCurso = {
     // usando spread operator para criar uma cópia rasa do objeto HtmlCourse
    ...HtmlCurso,
    course: "JavaScript",
    students: [...HtmlCurso.students, {name: "Franciso Chibata", email: 'franciso@gmail.com'}], // usando spread operator para criar uma cópia independente do array de estudantes
}

console.log(JsCurso, HtmlCurso); // { course: 'JavaScript', duration: '2 months', students: [ { name: 'John', email: '



// objetos complexo = DEEP COPY
// objetos simples = SHALLOW COPY, strings, numbers, boolean, null, undefined, symbol