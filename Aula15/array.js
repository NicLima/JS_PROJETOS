let num = [5, 1, 9]

num[3] = 8

console.log(`O vetor tem ${num.length} posições: ${num}`)

//coloca em ordem crescente
num.sort()

console.log(`O vetor colocado em ordem: ${num}`)

//adiciona informação na ultima posição do array
num.push(12)

console.log(`Array com novas informações: ${num}`)

//Detalhando item a item do array
for(let pos = 0; pos < num.length; pos++)
    {
        console.log(num[pos])
    }

    console.log('Outra forma de fazer o for')
//Utilizando For In
for(let pos in num){
    console.log(num[pos])
}

let pos = 5

//Procura no array o valor 7 e retorna qual o posição dele
num.indexOf(pos)

console.log(`O valor ${pos} esta na posição ${num.indexOf(pos)}`)