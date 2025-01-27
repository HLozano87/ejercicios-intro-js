// Ejercicio 3

/*
Según los datos proporcionados, la función debe separar cada elemento de la lista con un slash ('/'), 
salvo el último elemento que sería la extensión del archivo que debe ir con un punto ('.')
*/


// Ejercicio 3.1

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]
// create your function here
const createFullPath = (list) => {
    const path = list.slice(0, -1).join('/')
    const extension = list[list.length -1]
    return console.log(`${path}.${extension}`);
};

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
