// let s = document.getElementById("btn").value

function digitar(valor) {
    document.calc.display.value += valor    
}

function result() {
    document.calc.display.value = eval(document.calc.display.value)
}

function apagar() {
    document.calc.display.value = "" 
}