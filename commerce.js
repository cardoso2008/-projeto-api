fetch('https://raw.githubusercontent.com/cardoso2008/commerce-json/refs/heads/main/commerce.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('imagem').innerHTML = corpo.imagem
    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('autor').innerHTML = corpo.autor
    document.getElementById('pais').innerHTML = corpo.pais
    document.getElementById('ano').innerHTML = corpo.ano
    
    document.getElementById('imagem2').innerHTML = corpo.imagem2
    document.getElementById('nome2').innerHTML = corpo.nome2
    document.getElementById('autor2').innerHTML = corpo.autor2
    document.getElementById('pais2').innerHTML = corpo.pais2
    document.getElementById('ano2').innerHTML = corpo.ano2

    document.getElementById('imagem3').innerHTML = corpo.imagem3
    document.getElementById('nome3').innerHTML = corpo.nome3
    document.getElementById('autor3').innerHTML = corpo.autor3
    document.getElementById('pais3').innerHTML = corpo.pais3
    document.getElementById('ano3').innerHTML = corpo.ano3

})
