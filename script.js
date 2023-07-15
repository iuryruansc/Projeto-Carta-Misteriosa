const letter = document.querySelector('#carta-gerada');

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
}

const phraseCheck = (array) => {
    return array.every((string) => string.trim() === '');
}

const buttonCreate = document.querySelector('#criar-carta');
buttonCreate.addEventListener('click', createLetter)

window.onload = () => {
}