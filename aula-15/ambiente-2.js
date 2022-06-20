let num = [3,45,6,32,2,31]
num[5]=37
num.push(76)
num.push(30)
//console.log(`o Vetor tem ${num.length} posiçoes `)

console.log(`nosso vetor é ${num}`)
// console.log(`nosso vetor em ordem crrescente  ${num.sort()}`)
//for (let pos in num){
//    console.log(`Na posição ${pos} temos o valor ${num[pos]}`)
let pos = num.indexOf(32)
if (pos==-1){
    console.log(`valor nao foi encontrado`)
}
else{
    console.log(`o valor 32 está na posicao ${pos} `)
}