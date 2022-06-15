function verificar(){
   var data = new Date
   var ano = data.getFullYear()
   var fAno = document.getElementById(`txtano`)
   var res = document.getElementById (`res`)
if (fAno.value.length ==0 || fAno.value > ano){
    window.alert("** [ERRO] **  Verifique os dados e tente novamente !!")
   }   
else {
    var fsex = document.getElementsByName(`radsex`) 
    var idade = ano - Number(fAno.value)
    var genero =''
    var img  = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero =`Homem`
        if (idade >=0 && idade <5){
            //bebe
            img.setAttribute(`src`, 'bm.png')}
            
        else if (idade <12){
                    //crianca
                img.setAttribute(`src`, 'cmo.png')
                }
        else if (idade < 25){
                    //Jovem
                img.setAttribute(`src`, 'ado.png')
                }
        else{
                img.setAttribute(`src`, 'ido.png')
                }}
  

    else if (fsex[1].checked) {
        genero = "Mulher"
        if (idade >=0 && idade <5){
                //bebe
                img.setAttribute(`src`, 'bm.png')
            }
        else if (idade <12){
                    //crianca
                img.setAttribute(`src`, 'cmo.png')
                }
        else if (idade  <25){
                    //Jovem
                img.setAttribute(`src`, 'ada.png')
                }
        else{
                img.setAttribute(`src`, 'ida.png')
            }
        }

res.innerHTML = `detectamos ${genero} com ${idade} anos.`
res.style.textAlign =`center`
res.appendChild(img)

     }
    }
