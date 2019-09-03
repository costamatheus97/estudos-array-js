const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento ao final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento ao começo de um array
console.log(pilotos)

// Splice pode adicionar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionando elementos ao índice 2, removendo 0 elementos
console.log(pilotos)

pilotos.splice(3, 1) // Removendo 1 elemento do índice 3
console.log(pilotos)

// Slice cria um novo array a partir do índice selecionado

const algunsPilotos1 = pilotos.slice(2) // Cria um array novo com os elementos a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Cria um novo array com os elementos entre o índice 1 e 4
console.log(algunsPilotos2)