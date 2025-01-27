
const usuario = {
    userName: 'Hector',
    userLastName: 'Lozano',
    temary: [
        {subject: 'NodeJS', date: '2025-03-10'},
        {subject: 'Git', date: '2025-02-02'},
        {subject: 'React', date: '2025-05-12'}],
    searchActive: true,
}

const viewDateReact = usuario.temary[2].date
console.log(viewDateReact);