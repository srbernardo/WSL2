const coisa = document.querySelectorAll(".item")
coisa.forEach(function(ask) {
    ask.addEventListener("click", function() {
        const ativo = ask.classList.contains("ativo")
        if (!ativo) {
            coisa.forEach(function(ask) {
                ask.classList.remove("ativo")
            })
            ask.classList.add("ativo")
        }
        else {
            ask.classList.remove("ativo")
        }       
    })
})