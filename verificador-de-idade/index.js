function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formularioAno.value.length == 0 || Number(formularioAno.value > ano)) {
        window.alert ("[ERRO] Verifique os dados e tente novamente!")
    }   else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { 
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Child 
                img.setAttribute('src','images/childman.png')
            } else if (idade > 10 && idade < 21) {  
                //Young 
                img.setAttribute('src', 'images/youngman.png')
            } else if (idade > 21 && idade < 50) {
                //Adult
                img.setAttribute('src', 'images/adultman.png')
            } else {
                //Elderly
                img.setAttribute('src', 'images/elderlyman.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Child 
                img.setAttribute('src', 'images/childwoman.png')
            } else if (idade > 10 && idade < 21) {
                //Young 
                img.setAttribute('src', 'images/youngwoman.png' )
            } else if (idade > 21 && idade < 50) {
                //Adult
                img.setAttribute('src', 'images/adultwoman.png')
            } else {
                //Elderly
                img.setAttribute('src', 'images/elderlywoman.png')
            }
        }
        res.innerHTML = `Dectectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}