var json1 = `{
    "nome": "EMB 100 Bandeirante",
    "ano": "Primeiro voo: 1971",
    "capacidade": "8 passageiros",
    "link": "https://historicalcenter.embraer.com/br/pt/emb-100-bandeirante",
    "imagem": "<img src='img/emb100.jpg' width='600px'>"
}`;
var json2 = `{
    "nome": "EMB 110 Bandeirante",
    "ano": "Primeiro voo: 1972",
    "capacidade": "12 passageiros",
    "link": "https://historicalcenter.embraer.com/br/pt/emb-110-bandeirante",
    "imagem": "<img src='img/emb110.jpg' width='600px'>"
}`;
var json3 = `{
    "nome": "EMB 120 Brasília",
    "ano": "Primeiro voo: 1983",
    "capacidade": "30 passageiros",
    "link": "https://historicalcenter.embraer.com/global/en/emb-120-brasilia",
    "imagem": "<img src='img/emb120.jpg' width='600px'>"
}`;
var json4 = `{
    "nome": "EMB 121 Xingu",
    "ano": "Primeiro voo: 1976",
    "capacidade": "8 passageiros",
    "link": "https://historicalcenter.embraer.com/br/pt/emb-121-xingu",
    "imagem": "<img src='img/emb121.jpg' width='600px'>"
}`;
var json5 = `{
    "nome": "ERJ 145",
    "ano": "Primeiro voo: 1995",
    "capacidade": "50 passageiros",
    "link": "https://www.embraercommercialaviation.com/commercial-jets/erj145/",
    "imagem": "<img src='img/erj145.jpg' width='600px'>"
}`;
var json6 = `{
    "nome": "ERJ 135",
    "ano": "Primeiro voo: 1998",
    "capacidade": "37 passageiros",
    "link": "https://www.embraercommercialaviation.com/commercial-jets/erj135/",
    "imagem": "<img src='img/erj135.jpg' width='600px'>"
}`;
var json7 = `{
    "nome": "ERJ 135",
    "ano": "Primeiro voo: 1998",
    "capacidade": "37 passageiros",
    "link": "https://www.embraercommercialaviation.com/commercial-jets/erj135/",
    "imagem": "<img src='img/erj135.jpg' width='600px'>"
}`;

var data1 = JSON.parse(json1);
var data2 = JSON.parse(json2);
var data3 = JSON.parse(json3);
var data4 = JSON.parse(json4);
var data5 = JSON.parse(json5);
var data6 = JSON.parse(json6);
var data7 = JSON.parse(json7);

var link1 = `<a href="${data1.link}">SABER MAIS</a>`;
var link2 = `<a href="${data2.link}">SABER MAIS</a>`;
var link3 = `<a href="${data3.link}">SABER MAIS</a>`;
var link4 = `<a href="${data4.link}">SABER MAIS</a>`;
var link5 = `<a href="${data5.link}">SABER MAIS</a>`;
var link6 = `<a href="${data6.link}">SABER MAIS</a>`;
var link7 = `<a href="${data7.link}">SABER MAIS</a>`;

function buscar1() {
    document.getElementById('imagem').innerHTML = data1.imagem;
    document.getElementById('nome').innerHTML = data1.nome;
    document.getElementById('ano').innerHTML = data1.ano;
    document.getElementById('capacidade').innerHTML = data1.capacidade;
    document.getElementById('link').innerHTML = link1;
}
function buscar2() {
    document.getElementById('imagem').innerHTML = data2.imagem;
    document.getElementById('nome').innerHTML = data2.nome;
    document.getElementById('ano').innerHTML = data2.ano;
    document.getElementById('capacidade').innerHTML = data2.capacidade;
    document.getElementById('link').innerHTML = link2;
}
function buscar3() {
    document.getElementById('imagem').innerHTML = data3.imagem;
    document.getElementById('nome').innerHTML = data3.nome;
    document.getElementById('ano').innerHTML = data3.ano;
    document.getElementById('capacidade').innerHTML = data3.capacidade;
    document.getElementById('link').innerHTML = link3;
}
function buscar4() {
    document.getElementById('imagem').innerHTML = data4.imagem;
    document.getElementById('nome').innerHTML = data4.nome;
    document.getElementById('ano').innerHTML = data4.ano;
    document.getElementById('capacidade').innerHTML = data4.capacidade;
    document.getElementById('link').innerHTML = link4;
}
function buscar5() {
    document.getElementById('imagem').innerHTML = data5.imagem;
    document.getElementById('nome').innerHTML = data5.nome;
    document.getElementById('ano').innerHTML = data5.ano;
    document.getElementById('capacidade').innerHTML = data5.capacidade;
    document.getElementById('link').innerHTML = link5;
}
function buscar6() {
    document.getElementById('imagem').innerHTML = data6.imagem;
    document.getElementById('nome').innerHTML = data6.nome;
    document.getElementById('ano').innerHTML = data6.ano;
    document.getElementById('capacidade').innerHTML = data6.capacidade;
    document.getElementById('link').innerHTML = link6;
}
function buscar7() {
    document.getElementById('imagem').innerHTML = data7.imagem;
    document.getElementById('nome').innerHTML = data7.nome;
    document.getElementById('ano').innerHTML = data7.ano;
    document.getElementById('capacidade').innerHTML = data7.capacidade;
    document.getElementById('link').innerHTML = link7;
}