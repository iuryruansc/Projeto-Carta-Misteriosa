const letter = document.querySelector('#carta-gerada');

// agrupamento das classes css
const grupos = {
    estilo: ["newspaper", "magazine1", "magazine2"],
    tamanho: ["medium", "big", "reallybig"],
    rotacao: ["rotateleft", "rotateright"],
    inclinacao: ["skewleft", "skewright"]
}

// função para criar a carta
const createLetter = () => {
    const phraseWords = document.querySelector('#carta-texto').value.split(" ");
    const check = phraseCheck(phraseWords);
    if (check) {
        letter.innerHTML = "Por favor, digite o conteúdo da carta.";
    } else {
        letter.innerHTML = "";
        for (let index = 0; index < phraseWords.length; index +=1) {
            if (phraseWords[index] === '') {
            } else {
                const word = document.createElement('span')
                word.innerHTML = phraseWords[index];
                letter.appendChild(word);
            }
        }
    }
    applyStyle();
    wordCount();
}

// função para checar se o input está vazio
const phraseCheck = (array) => {
    return array.every((string) => string.trim() === '');
}

// função para aplicar css à carta
const applyStyle = () => {
    const words = document.getElementsByTagName('span');
    for (let index = 0; index < words.length; index += 1) {
        const randomStyle = grupos.estilo[calc(grupos.estilo)];
        const randomSize = grupos.tamanho[calc(grupos.tamanho)];
        const randomRotation = grupos.rotacao[calc(grupos.rotacao)];
        const randomInclination = grupos.inclinacao[calc(grupos.inclinacao)];
        words[index].classList.add(randomStyle, randomSize, randomRotation, randomInclination);
    }
}

// função para alterar o estilo ao clique
const changeStyle = () => {
    letter.addEventListener('click', (event) => {
        if (event.target.classList.value === '') {
        } else {
            event.target.classList = [];
            const randomStyle = grupos.estilo[Math.floor(Math.random() * grupos.estilo.length)]
            const randomSize = grupos.tamanho[Math.floor(Math.random() * grupos.tamanho.length)]
            const randomRotation = grupos.rotacao[Math.floor(Math.random() * grupos.rotacao.length)]
            const randomInclination = grupos.inclinacao[Math.floor(Math.random() * grupos.inclinacao.length)]
            event.target.classList.add(randomStyle, randomSize, randomRotation, randomInclination);
        }
    })
}

// função para contagem de palavras
const wordCount = () => {
    const phraseWords = document.querySelector('#carta-texto').value.split(" ");
    const check = phraseCheck(phraseWords);
    var count = 0;
    if (check) {
    } else {
        for (let index = 0; index < phraseWords.length; index +=1) {
            if (phraseWords[index] === '') {
            } else {
                count +=1;
            }
        }
    }
    document.querySelector('#carta-contador').innerHTML = `A carta contem ${count} palavras`;
}

// função para calcular valor
const calc = (array) => {
    return Math.floor(Math.random() * array.length);
}

// aplicando eventos aos elementos
const buttonCreate = document.querySelector('#criar-carta');
buttonCreate.addEventListener('click', createLetter)

window.onload = () => {
    changeStyle();
}