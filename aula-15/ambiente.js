let num = [3,45,6,32,2,31]
num[5]=37
num.push(76)
num.push(30)
console.log(`o Vetor tem ${num.length} posiçoes `)

console.log(`nosso vetor é ${num}`)
console.log(`nosso vetor em ordem crrescente  ${num.sort()}`)
for (let pos =0;pos<num.length;pos++ ){
    console.log(`a poscicao ${pos} tem o valor ${num.sort()[pos]}`)
}