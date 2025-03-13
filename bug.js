const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    if (numeros.length === 0) return 0
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }
    return sumaTotal / numeros.length
};
const listaNumeros = [1, 2, 3, 4, 5];
console.log(calcularPromedio(listaNumeros))