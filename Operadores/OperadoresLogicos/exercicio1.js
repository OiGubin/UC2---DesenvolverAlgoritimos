//Operadores Logicos - Utilizados geralmente para testar

/* - Operador E (Tudo deve ser verdadeiro). Representamos com: && 

Operador OU (Uma cndição sendo verdadeira já basta). Representamos : ||

Operador NAO (iverte o valor). Representamos com: 
!*/

const idade = 44 // idade da pessoa
const temAssinatura = false // indica se a pessoa tem assinatura ativa

//Verificando se a pessoa pode acessar: 
// Condiçoes: 
// - Precisa ser maior que 18 ( >= 18)
//E - &&
// - Ter assinatura (true) 

const podeAcessar = idade >= 18  && temAssinatura
console.log(podeAcessar)

