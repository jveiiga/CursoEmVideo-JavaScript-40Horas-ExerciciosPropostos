function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        //BOM DIA 
        img.src = 'images/morning.png'
        document.body.style.background = "#e59c4d"
    } else if ( hora >= 12 && hora <= 20){
        //BOA TARDE 
        img.src = 'images/evening.png'
        document.body.style.background = "#aab5c5"
    } else {
        //BOA NOITE
        img.src = 'images/night.png.png'
        document.body.style.background = "#66442e"
    }
    

}


