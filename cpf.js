//Função que carrega o JSON para consumir a API e processa os dados JSon
function buscar() {
    // alert("O botão foi selecionado")
    fetch('https://raw.githubusercontent.com/cardoso2008/cpf-json/refs/heads/main/cpf.json').then(resposta => resposta.json()).then(corpo => {
     var identificador = document.getElementById('valor').value
     
     var encontrado = false
 
     corpo.forEach(pessoa => {
 
         if(identificador == pessoa.cpf) {
             var linkSite = `<a href="${pessoa.link}">VISITE O TSE</a>`
 
             document.getElementById('imagem').innerHTML = pessoa.imagem;
             document.getElementById('nome').innerHTML = pessoa.nome;
             document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
             document.getElementById('cidade').innerHTML = pessoa.cidade;
             document.getElementById('pais').innerHTML = pessoa.pais;
             document.getElementById('link').innerHTML = linkSite;
             document.getElementById('erro').innerHTML = ""
             encontrado = true
         }
     })
     if(!encontrado) {
         document.getElementById('erro').innerHTML = "Registro inválido"
     }
     console.log(corpo)
    })
 }