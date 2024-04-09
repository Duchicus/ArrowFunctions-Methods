// 1.Funciones flecha

// 1.1
const saludar =()=> {
    return "Hola";
}
console.log(saludar())

//1.2
const division = (a,b) =>{
    return a / b;
}
console.log(division(1,2))

// 1.3
const miNombre = nombre =>{
    return `Mi nombre es ${nombre}`;
}
console.log(miNombre())

// 1.4
const test2 = () =>{
    console.log("Función test 2 ejecutada.");
}
const test1 = callback => {
    callback();
}

test1(test2)

// 2.Foreach

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

// 2.1
const OlderThan25 = []

gente.forEach(persona => {
    if(persona.edad >= 25){
        return OlderThan25.push(persona)
    }
});

console.log(OlderThan25)

// 2.2
const StartWithJ = []

gente.forEach(persona => {
    if(persona.nombre.charAt(0) === "J"){
        return StartWithJ.push(persona)
    }
})

console.log(StartWithJ);


// 3.Map

// 3.1
const Older25Map = []

gente.map((persona) => {
    if(persona.edad >=25){
        return Older25Map.push(persona)
    }
})

console.log(Older25Map)

// 3.2
const StartWithJMap = []

gente.map((persona) => {
    if(persona.nombre.charAt(0) === "J"){
        return StartWithJMap.push(persona)
    }
})

console.log(StartWithJMap);

// 3.3
const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const ArrayElevar = []

numbers.map((a) => {
    return ArrayElevar.push(Math.pow(a, a))
})

console.log(ArrayElevar)

// 4.Filter

// 4.1
const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ImparesFilter = numbersFilter.filter((num)=> num % 2 !== 0)

console.log(ImparesFilter)

// 4.2
const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];

let Pasto = foodList.filter((Veggie) => Veggie.isVeggie === true)

console.log(
    Pasto.map((value) =>{
        return `Que rico ${value.name} me voy a comer`
    }
))

// 5.Reduce

// 5.1

const numerosReduce = [39, 2, 4, 25, 62];

console.log(numerosReduce.reduce((a,b) => a * b))

// Extras

// Map

// 1.1

const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
      name: "Ana",
      role: "becaria",
      hobbies: ["nadar", "bailar"],
    },
    {
      name: "Luis",
      role: "programador",
      hobbies: ["dormir", "comprar"],
    },
    {
      name: "Carlos",
      role: "secretario",
      hobbies: ["futbol", "queso"],
    },
  ];
  
staff.map((value)=>{
    return `${value.name} es ${value.role} y le gusta ${value.hobbies[0]} y ${value.hobbies[1]}`
})

console.log(
    staff.map((value)=>{
        return `${value.name} es ${value.role} y le gusta ${value.hobbies[0]} y ${value.hobbies[1]}`
    })
)

// 1.2

const foodListExtras = ["Pizza", "Ramen", "Paella", "Entrecot"];

let arrayComidas = []

foodListExtras.map((food) =>{

    if(food === "Pizza"){
        arrayComidas.push(`Como soy de Italia, amo comer ${food}`)

    }else if(food === "Ramen"){
        arrayComidas.push(`Como soy de Japon, amo comer ${food}`)

    }else if(food === "Paella"){
        arrayComidas.push(`Como soy de Valencia, amo comer ${food}`)

    }else if(food === "Entrecot"){
        arrayComidas.push(`Aunque no como carne, el Entrecot es sabroso ${food}`)
    }
})

console.log(arrayComidas)

// Filter

// 2.1

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

let newInventory = []

inventory.filter((element)=>{
    if(element.price >= 300){
       return newInventory.push(element.name)
    }
})

console.log(newInventory)

// Reduce

const sentenceElements = [
    'Me',
    'llamo',
    'Manel',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];

console.log(
    sentenceElements.reduce((a,b)=>{
        return a + " " + b
    })
)