const letter = document.querySelector('#carta-gerada');

const grupos = {
    estilo: ["newspaper", "magazine1", "magazine2"],
    tamanho: ["medium", "big", "reallybig"],
    rotacao: ["rotateleft", "rotateright"],
    inclinacao: ["skewleft", "skewright"]
}

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
}

const phraseCheck = (array) => {
    return array.every((string) => string.trim() === '');
}

const applyStyle = () => {
    const words = document.getElementsByTagName('span');
    for (let index = 0; index < words.length; index += 1) {
        const randomStyle = grupos.estilo[Math.floor(Math.random() * grupos.estilo.length)]
        const randomSize = grupos.tamanho[Math.floor(Math.random() * grupos.tamanho.length)]
        const randomRotation = grupos.rotacao[Math.floor(Math.random() * grupos.rotacao.length)]
        const randomInclination = grupos.inclinacao[Math.floor(Math.random() * grupos.inclinacao.length)]
        words[index].classList.add(randomStyle, randomSize, randomRotation, randomInclination);
    }
}

const buttonCreate = document.querySelector('#criar-carta');
buttonCreate.addEventListener('click', createLetter)

window.onload = () => {
}