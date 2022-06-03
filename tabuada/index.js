function tabuada() {

    let n = document.getElementById("numero")
    let tab = document.getElementById("tab")
    let res = document.getElementById("erro")
   
    if( n.value.length === 0 ){

        res.innerHTML = `[Erro] preencha o campo`
        
    }else {

        res.innerHTML = ``

        let num = Number(n.value)
        let mult = 1
        tab.innerHTML = ``
        
        for( let i = mult; i < 11; i++ ) {

            let item = document.createElement("option")  
            item.innerHTML = `${num} x ${i} = ${num * i}` 
            tab.appendChild(item)
            
        }
    }
}
