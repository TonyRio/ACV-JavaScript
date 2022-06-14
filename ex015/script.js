function verificar(){
   var data = new Date
   var ano = data.getFullYear()
   var fAno = document.getElementById(`txtano`)
   var res = document.querySelector(`div#res`)
    if (fAno.value.length ==0 || fAno.value >ano){
    window.alert("** [ERRO] **  Verifique os dados e tente novamente !!")
   }   
    else {
   var fsex = document.getElementsByName(`radsex`) 
   var idade = ano - Number(fAno.value)
   // res.innerHTML= `idade Calculada ${idade} anos`
   var genero =""
   var img  = document.createElement(`img`)
   img.setAttribute(`id`, `foto`)
    if (fsex[0].checked) {
    genero =`Homem`}
    
    if (idade >=0 && idade <3){
        //bebe
        img.attributes(`src`, 'bebe.png')
    }
    else if (idade >=3 && idade <10){
        //crianca
        img.attributes(`src`, 'criancamenino.png')
    }
    else if (idade >=10 && idade <18){
        //Jovem
        img.attributes(`src`, 'jovemmenino.png')
    }
    
   
       
    else if (fsex[1].checked) {
    genero = "Mulher"}
            
    else if (idade >=0 && idade <3){
         //bebe
         img.attributes(`src`, 'bebe menina.png')
     }
    else if (idade >=3 && idade <10){
         //crianca
         img.attributes(`src`, 'criancamenina.png')
     }
    else if (idade >=10 && idade <18){
         //Jovem
         img.attributes(`src`, 'jovemmenina.png')
     }
     
     
  
   
    
res.style.textAlign =`center`
res.innerHTML = `detectamos ${genero} com ${idade} anos.`
    

     }
    }

