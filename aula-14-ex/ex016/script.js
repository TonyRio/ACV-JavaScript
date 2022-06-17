function contar() {
    let ini =document.getElementById(`txti`)
    let fim =document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)
    let res = document.getElementById(`res`)


    if (ini.value.length ==0 || fim.value.length ==0 || passo.value.length ==0){
    alert (' [ERRO] - nao podemos prosseguir sem os dados') }
    else {
        res.innerHTML = `contando: <br><br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p==0){
            alert('Passo Invalido, Contando de 1 em 1')
            p=1
        }
        
        // contagem progressiva
        if (i <=f)
            for (let c =i ; c <= f; c += p){
                res.innerHTML += `${c}  \u{1F449}`}
        // contagem regressiva
        else{
            for (let c =i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        
        res.innerHTML += `\u{1F6D1}`
    }
}