const elementoChute = document.getElementById('chute');

// SpeechRecognition, API de reconhecimento de voz para web
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// configurações do SpeechRecognition
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();
recognition.addEventListener('result', onSpeak)

// função para reconhecer e transcrever voz para exibir apenas o results na tela
function onSpeak (e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute);
    verificaSeChutePossuiValorValido(chute);
}

// função para exibir na box da tela o que o usuário fala / para quando for chutar um numero
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

// função para o jogo não acabar até o usuário acertar
recognition.addEventListener('end', () => recognition.start())
