function start() {
    const ucBtn = document.querySelector('#uc');
    const lcBtn = document.querySelector('#lc');
    const tcBtn = document.querySelector('#tc');
    const scBtn = document.querySelector('#sc');
    const ccBtn = document.querySelector('#cc');
    const acBtn = document.querySelector('#ac');
    const icBtn = document.querySelector('#ic');
    const copyBtn = document.querySelector('#copy');
    const downloadBtn = document.querySelector('#download');

    ucBtn.addEventListener('click', ucFun);
    lcBtn.addEventListener('click', lcFun);
    tcBtn.addEventListener('click', tcFun);
    scBtn.addEventListener('click', scFun);
    ccBtn.addEventListener('click', ccFun);
    acBtn.addEventListener('click', acFun);
    icBtn.addEventListener('click', icFun);
    copyBtn.addEventListener('click', copyFun);
    downloadBtn.addEventListener('click', downloadFun);

    setInterval(() => {
        countLine(); countWord();
    }, 500);
}
start();

function countLine() {
    const txt = document.querySelector('#txt');
    let lines = document.querySelector('#lines');
    let textValue = txt.value.trim();
    const line = [...textValue].reduce((a, c) => a + (c === '\n' ? 1 : 0), 0)

    if (textValue != "") {
        lines.innerHTML = line + 1;
    }
    else {
        lines.innerHTML = line;
    }
}

function countWord() {
    const txt = document.querySelector('#txt');
    const characters = document.querySelector('#letters');
    const words = document.querySelector('#words');
    let textValue = txt.value.trim(); // đoạn văn bản
    let textLength = textValue.length; // số kí tự
    let wordNum = textValue.split(' ').length + textValue.split('\n').length - 1;
    if (textValue != "") {
        characters.innerHTML = textLength;
        words.innerHTML = 500000 - (500000 - wordNum);
    }
    else {
        characters.innerHTML = textValue.length
        words.innerHTML = wordNum - 1;
    }
}

function ucFun() {
    const txt = document.querySelector('#txt');
    let textValueUp = txt.value.trim().toUpperCase();
    txt.value = textValueUp;
}

function lcFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim().toLowerCase();
    txt.value = textValue;
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function tcFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim();
    let titleCase = toTitleCase(textValue);
    txt.value = titleCase;
}

function scFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim();
    let lowerCase = textValue.toLowerCase();
    let sentenceCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    txt.value = sentenceCase;
}

function ccFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim();
    let capitalizedCase = textValue
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    txt.value = capitalizedCase;
}

function acFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim();
    let alternatingCase = textValue
        .split('')
        .map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
        .join('');
    txt.value = alternatingCase;
}

function icFun() {
    const txt = document.querySelector('#txt');
    let textValue = txt.value.trim();
    let inverseCase = textValue
        .split('')
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join('');
    txt.value = inverseCase;
}

function copyFun() {
    const txt = document.querySelector('#txt');
    txt.select();
    document.execCommand('copy');
}

function downloadFun() {
    const txt = document.querySelector('#txt');
    const textValue = txt.value;
    const blob = new Blob([textValue], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted_text.txt';
    a.click();
    window.URL.revokeObjectURL(url);
}
