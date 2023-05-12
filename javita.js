
let numero = document.querySelector('#hola')
let random = Math.floor(Math.random()* (129 - 0) + 0)
numero.textContent = 'Numero es:' + random 

function activar(e) {
    for (let i = 0; i < 8; i++) {
    document.getElementById('table').innerHTML += `<input class="casillas" id="btn_${i}"type="button" value="0" onclick="llamado(btn_${i}.id)">`
    }
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
    for (let i = 0; i < 8; i++) {
    let btn = document.querySelector(`#btn_${i}`)
    binario_todo += String(btn.value)
    }
    alert(binario_todo)
}
