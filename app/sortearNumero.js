// guardando os valores em variáveis
const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

// calculo para gerar numeros pseudo-aleatórios
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

// puxando os elementos do html de menor e maior valor pelo seus IDs para podermos modificar isso no html através das variáveis do arquivo javascript
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
