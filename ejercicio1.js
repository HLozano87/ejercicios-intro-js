
const usuario = {
    userName: 'Hector',
    userSurname: 'Lozano',
    temary: [
        {subject: 'Node.js', date: '2025-03-10'},
        {subject: 'Git', date: '2025-02-02'},
        {subject: 'React', date: '2025-05-12'},
    ],
    searchActive: true,
}

const getInfoDateTemary = (nameSubject) => {
    const searchModule = usuario.temary.find(item => item.subject === nameSubject)
    if (!searchModule) {
        throw new Error(`${nameSubject} not found.`)
    }
    return searchModule.date
}

const showDateReact = getInfoDateTemary('React')
console.log(showDateReact);
