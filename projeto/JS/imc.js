let submit = document.getElementById("submit")
let result = document.getElementById("result")

function imc() {
    let nome = document.getElementById("nome").value
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let media = (peso/(altura*altura))
    let mess = ""


    if(media < 18.5) {
        mess = "a baixo do peso! "
    } else if (media >= 18.5 && media < 24.9) {
        mess = "no peso normal! "
    } else if (media >= 24.9 && media < 29.9) {
        mess = "com sobrepeso! "
    } else if (media >= 29.9 && media < 34.9) {
        mess = "com obesidade grau 1! "
    } else if (media >= 34.9 && media < 39.9) {
        mess = "com obesidade grau 2! "
    } else {
        mess = "com obesidade grau 3 ou mórbida! "
    }
    result.textContent = nome + " você está " + mess + "Seu IMC é de " + media.toFixed(2).replace(".",",")

    
}
let concatenar = () => {

} 
submit.addEventListener("click",imc)