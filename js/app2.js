// console.log(typeof(5));
// console.log(typeof('5'));
// console.log(typeof(10.5));
let x;
let y = [4, 6, 8];

let z = {
    edad: 21,
    nombre: 'juan'
};

// console.log(x);
// console.log(typeof(y));
// console.log(typeof(z));

let edad = 18;
let soltero = true;

let Acceso = edad >= 18 && soltero;

//console.log(Acceso);

let a = 5;
let b = '5'

let c = a == b;
let u = a === b;

// console.log(c);
// console.log(u);

// ternarias //
const cantidad = 8;
let base = 2000;
let descuento;

descuento = cantidad >= 5 ? base * 0.10 : base * 0.05;
console.log(descuento);

// for(let i = 1; i <= 10; i++) {
//     console.log(` \nla tabla del ${i}`);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

const fiestaanimales = ['perro', 'oso', 'conejo', 'gato'];

const eloso = fiestaanimales.forEach(osito => {
    if(osito === 'oso'){
        console.log(osito, 'si esta');
        return;
    } else {
        console.log(osito, 'no esta');
    }
});

const eloso2 = fiestaanimales.filter(osito => osito !== 'oso');
console.log(eloso2);