//Probando callbacks

function sum (num1, num2) {
    return num1 + num2;
}

function mult (num1, num2) {
    return num1 * num2;
}

function division (num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

//Llamado a Callback

let a = 8;
let b = 4;

let suma = calc(a, b, sum);
let mul = calc(a, b, mult);
let div = calc(a, b, division);

console.log(`La suma de ${a} y ${b} es igual a ${suma}`);
console.log(`La multiplicacion de ${a} y ${b} es igual a ${mul}`);
console.log(`La division de ${a} y ${b} es igual a ${div}`);
console.log();

//**********

function date(callback) {
    let dateNow = new Date;
    console.log(dateNow);

    setTimeout(function() {
        dateNow = new Date;
        callback(dateNow);
    }, 3000);
}

function dateNow(date){
    console.log(date);
}

date(dateNow);

