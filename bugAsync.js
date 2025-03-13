// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id || typeof id !== 'number') {
                return reject(new Error('Debe introducir un número.'))
            }
            if (id === 1) {
                let usuario = { id: 1, nombre: 'John Doe' };
                return resolve(usuario)
            }
            return reject(`El id "${id}", no está asociado a ningún usuario.`)
        }, 2000);
    })
    
}

obtenerUsuario(1)
.then(usuario => console.log(usuario))
.catch(error => console.error(`¡¡Error durante la busqueda!!\n ${error}`))

obtenerUsuario(2)
.then(usuario => console.log(usuario))
.catch(error => console.error(`¡¡Error durante la busqueda!!\n ${error}`))