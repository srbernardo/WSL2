let submit = document.getElementById("submit")
let result = document.getElementById("result")

function imc() {
    let nome = document.getElementById("nome").value
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let media = (peso/(altura*altura))
    result.textContent = nome + " voce esta com um indece de massa de " + media
    
}
submit.addEventListener("click",imc)