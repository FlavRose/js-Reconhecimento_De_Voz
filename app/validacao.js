// verifica se o valor dos chutes são validos
function verificaSeChutePossuiValorValido(chute) {
    const numero = +chute

    // caso chute não for um numero
    if (seChuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Isso não é um número! (ಠಿ_ಠ)</div>'
        return
    }

    // caso chute for maior ou menor que os numeros permitidos
    if (seNumeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Só são permitidos números entre ${menorValor} e ${maiorValor}, ok? (ㆆ_ㆆ)</div>
        `
        return
    }

    // caso usuário acerte o numero secreto
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) { // caso numero for menor secreto que numero chutado
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else { // caso numero secreto for maior que o numero chutado
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }                                        // font awesome ↑
}

// verifica se o valor do chute é um numero
function seChuteInvalido(numero) {
    return Number.isNaN(numero)
}

// verifica se o valor do chute está entre o menor e o maior valor possível
function seNumeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

// criando o botão para reiniciar a página e jogar novamente
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
