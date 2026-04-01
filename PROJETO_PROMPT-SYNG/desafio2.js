const prompt = require('prompt-sync')()

let nome = prompt("qual é seu nome? ")
let SABOR = prompt("qual sabor da pizza? ")
let tamanho = prompt("qual tamanho o senhor deseja?" )

console.log(`Está bem senhor ${nome} confere se o sabor ${SABOR} e tamanho ${tamanho} estão corretos`)