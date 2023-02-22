let nomeProduto = "tv";
let precoProduto =1300;
let descontoProduto = 50;
let descontoValido = true;
let demandas = [10, 2, 1, 30, 5];
let lucro = [];

if (precoProduto > 1000) {
  let precoFinal = precoProduto - 50;
  console.log(`O desconto é válido? ${descontoValido}.`);
  console.log(`O valor final do produto é: R$${precoFinal}.`);

  let clienteUm = precoFinal * demandas[0];
  console.log(`O cliente 1 deve pagar R$${clienteUm}.`);
  let clienteDois = precoFinal * demandas[1];
  console.log(`O cliente 2 deve pagar R$${clienteDois}.`);
  let clienteTres = precoFinal * demandas[2];
  console.log(`O cliente 3 deve pagar R$${clienteTres}.`);
  let clienteQuatro = precoFinal * demandas[3];
  console.log(`O cliente 4 deve pagar R$${clienteQuatro}.`);
  let clienteCinco = precoFinal * demandas[4];
  console.log(`O cliente 5 deve pagar R$${clienteCinco}.`);

  lucro.push(clienteUm, clienteDois, clienteTres, clienteQuatro, clienteCinco);
  lucroTotal = lucro.reduce(function (lucroTotal, lucro) {
    return lucroTotal + lucro;
  }, 0);
  console.log(`O lucro total é: R$${lucroTotal}.`);
} else {
  let precoFinal = precoProduto;
  descontoValido = !descontoValido;
  console.log(`O desconto é válido? ${descontoValido}.`);
  console.log(`O valor final do produto é: R$${precoProduto}.`);
  let clienteUm = precoFinal * demandas[0];
  console.log(`O cliente 1 deve pagar R$${clienteUm}.`);
  let clienteDois = precoFinal * demandas[1];
  console.log(`O cliente 2 deve pagar R$${clienteDois}.`);
  let clienteTres = precoFinal * demandas[2];
  console.log(`O cliente 3 deve pagar R$${clienteTres}.`);
  let clienteQuatro = precoFinal * demandas[3];
  console.log(`O cliente 4 deve pagar R$${clienteQuatro}.`);
  let clienteCinco = precoFinal * demandas[4];
  console.log(`O cliente 5 deve pagar R$${clienteCinco}.`);

  lucro.push(clienteUm, clienteDois, clienteTres, clienteQuatro, clienteCinco);
  lucroTotal = lucro.reduce(function (lucroTotal, lucro) {
    return lucroTotal + lucro;
  }, 0);
  console.log(`O lucro total é: R$${lucroTotal}.`);
}
