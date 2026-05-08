//  spread expandir (espalhar) um objeto ou array


const number = [1,2,3,4]
console.log(number)

console.log(...number)


const data = [
    {
        name: "Leo",
        email: "leo@gmail.com",
        avatar: "Guts"
    },

    {
        name: "Chico",
        email: "Chico@gmail.com",
        avatar: "Grifth"
    }
]


console.log(data)

console.log("################### Spread em Array #######################")

console.log(...data)
