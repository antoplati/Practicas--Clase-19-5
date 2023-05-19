let input = document.querySelector('#abracadabra');

input.addEventListener('click', function() {
    let nombre= prompt("Ingrese su nombre")
    console.log(nombre);
    let nombre2 = document.querySelector('#titular')
    nombre2.innerText = "Hi i'm " + nombre;
});

let touch = document.querySelector('#contactClick');
let parrafo = document.querySelector ('.parrafo-color');

touch.addEventListener ('click',function(e) {
    parrafo.style.color = 'red';
});


let colorAlAzar = ["negro", "rosa", "celeste", "blanco", "verde"]
let random = Math.floor(Math.random()*4)









// input.addEventListener('keydown', function(e) {
//     console.log(input.value);
// })