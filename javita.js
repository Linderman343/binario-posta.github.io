
let numero = document.querySelector('#randomNumber')
let random = Math.floor(Math.random()* (129 - 0) + 0)
numero.textContent = 'Calcula el numero ' + random 
alert((random).toString(2))

for (let i = 0; i < 8; i++) {
document.getElementById('table').innerHTML += `<input class="casillas" id="btn_${i}"type="button" value="0" onclick="llamado(btn_${i}.id)">`
}


//cambiar 0 y 1
function llamado(e) {
    let btn = document.querySelector(`#${e}`)
    e.preventDefault
    if (btn.value == 0) {
        btn.value = 1
    }
    else{
        btn.value = 0
    }
}
let binario_todo = ""

function todo(a) {
    binario_todo = ""
    document.getElementById(`resultados`).innerHTML += `<div class="reference"><p>${random}:</p></div>`
    for (let i = 0; i < 8; i++) {

    let btn = document.querySelector(`#btn_${i}`)
    document.getElementById(`resultados`).innerHTML += `<div class="reference"><p>${btn.value}</p></div>`
    binario_todo += String(btn.value)
    }

    let binario_decimal = parseInt(binario_todo,2);
    if (binario_decimal == random ) {
        document.getElementById(`resultados`).innerHTML += `<div id="correct">o</div>`
    }
    else{
        document.getElementById(`resultados`).innerHTML += `<div id="incorrect">X</div>`
    }
    random = Math.floor(Math.random()* (129 - 0) + 0)
numero.textContent = 'Numero es:' + random 
alert((random).toString(2))
}
