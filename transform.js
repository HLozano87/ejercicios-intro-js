const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];


const devsJS = (data) => {
    const resultDevs = data.filter(skill =>  skill.habilidades.includes('JavaScript'))
    return resultDevs 
    //return JSON.stringify(resultDevs, null, 2) //-> en caso de querer que se vea en la web segun enunciado
}

console.log(devsJS(datos));


const namesProyects = (data) => {
    const resultProyects = 
    data.map(proyect => proyect.proyectos.map(nameProyect => nameProyect.nombre))
    .join(',')
    .split(',')
    return resultProyects
}

console.log(namesProyects(datos));

