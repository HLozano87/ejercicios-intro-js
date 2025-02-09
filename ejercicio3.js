// Ejercicio 3

/*
Según los datos proporcionados, la función debe separar cada elemento de la lista con un slash ('/'), 
salvo el último elemento que sería la extensión del archivo que debe ir con un punto ('.')
*/


// Ejercicio 3.1

const createFullPath = (list) => {
    const path = list.slice(0, -1).join('/')
    const extension = list[list.length -1]
    return `${path}.${extension}`;
};

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]

createFullPath(input1); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodinGame',
    'python',
    'py',
];

createFullPath(input2); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]

createFullPath(input3) // 'programming/languages/easy/beginner/useful/pythonstuff.py'


// Ejercicio 3.2

const toStringAndSeparate = (entry) => {
    let result = entry.toString().split('').join('-')
    return result;
}

const input = 10;
toStringAndSeparate(input) // '1-0'
const secondInput = 1;
toStringAndSeparate(secondInput); // '1'
const thirdInput = 11234;
toStringAndSeparate(thirdInput); // '1-1-2-3-4'


// Ejercicio 3.3

const toReverseModeAndLength = (word) => {
    let reverseWord = word.split('').reverse().join('')
    return `${reverseWord.length} ${reverseWord}`;
}

const inputStr1 = 'string';
console.log(toReverseModeAndLength(inputStr1)); // '6 gnirts'
const inputStr2 = 'variable';
console.log(toReverseModeAndLength(inputStr2)); // '8 elbairav'
const inputStr3 = 'pointer';
console.log(toReverseModeAndLength(inputStr3)); // '7 retniop'