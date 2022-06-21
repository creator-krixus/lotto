let click = 0;
function winners(numero){
    document.querySelector('#ultimo').innerHTML = numero.toString().charAt(3)
    document.querySelector('#dosCifras').innerHTML = numero.toString().charAt(2) + numero.toString().charAt(3)
    document.querySelector('#tresCifras').innerHTML = numero.toString().charAt(1)+numero.toString().charAt(2) + numero.toString().charAt(3)
}

function rotateImg() {
    let numero = Math.random(0, 9) * 10000
    if (numero > 1000) {
        document.querySelector('#ganador').innerHTML = Math.trunc(numero)
        winners(numero)
    }
    if (numero > 100 && numero < 1000) {
        document.querySelector('#ganador').innerHTML = `0${Math.trunc(numero)}`
        numero = `0${Math.trunc(numero)}`
        winners(numero)
    }
    if (numero < 100) {
        document.querySelector('#ganador').innerHTML = `00${Math.trunc(numero)}`
        numero = `00${Math.trunc(numero)}`
        winners(numero)
    }
    click++
    console.log(Math.trunc(numero), click, new Date())
}