function primeiroElemento(array) {
    return array[0]
}

function primeiroLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve ) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroLetra)
    .then(letraMinuscula)
    .then(console.log)