// verificando se a pessoa pode udar cupom:
//condições:
// - Precisa ganhar acima de R$ 100 (> 100)
// OU - || ser cliente VIP (true)
const valorCompra = 200
const clienteVip = false

const podeUsarCupom = valorCompra > 100 || clienteVip

console.log(podeUsarCupom)