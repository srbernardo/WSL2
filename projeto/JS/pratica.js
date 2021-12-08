let nome,idade
nome = "joene"
idade = 45
let cara = "joa", dude = "marcos"
console.log(`ola ${nome} vc tem ${idade}`)
console.log("ola " + nome + " vc tem " + idade)
console.log("ola " + cara +" e " + dude)

function ola(){
    console.log("ola")
}

let oi = function(){
    console.log("oi")
}

let hi = () => {
    console.log("hi")
}

function Carro(name) {
    this.name = name
    this.anda = () => {
        return "anda"
    }
}

let classic = new Carro("Classic")
console.log(classic.anda())
console.log(classic.name)
console.log(classic)

let coisa = 12

coisa.__proto__

let lista = ["fruta","morango","banana"]

for (const itemDaLista of lista) {
    console.log(itemDaLista)
    
}

