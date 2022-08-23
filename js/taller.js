// algoritmo para cruzar un puente //


// suma de 2 numeros //
const a = 50;
const b = 60;

let suma1 = a + b;
//console.log(suma1);

// calcule la edad con su year de nacimiento //
let edad;
const nacimiento = 1990;
let actual = new Date().getFullYear() - nacimiento;

//console.log(actual);


// promedio de 5 notas //
const notas = [4, 7, 5, 7, 9];
let promedio = 0;
      
notas.forEach(nota => {
    promedio += nota  / 5;
});
console.log(promedio);

const media = notas.reduce((suma, nota) => nota + suma, 0) / 5;
console.log(media);


// suma de 10 numeros impares //
let suma = 0;
for(let i = 1; i <= 20; i++){
    if(i %2 == 1){
        suma += i; 
    }
}
//console.log(suma);