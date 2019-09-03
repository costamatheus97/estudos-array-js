// O map cria um novo array com os elementos transformados conforme o parâmetro passado

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){ // Criando um novo array com os elementos multiplicados por 2
    return e * 2
})

console.log(nums, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`



resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)