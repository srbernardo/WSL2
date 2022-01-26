
document.getElementById('cep').addEventListener('focusout',pes = async () => {
    let cep = document.getElementById('cep')
    let url = `http://viacep.com.br/ws/${cep.value}/json/`    
   
    let dados = await fetch(url)
    let endereco = await dados.json()
   
    function prenc(endereco) {
        document.getElementById('err').value = endereco.cep
    }

    prenc(endereco)
})

// fetch(url)
// .then(res => res.json())
// .then((out) => {
//   console.log('Checkout this JSON! ', out);
// })
// .catch(err => { throw err });


// fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })