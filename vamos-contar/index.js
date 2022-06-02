 function contar() {

    let init = document.getElementById("txti") 
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if( init.value.length === 0 || fim.value.length === 0 || passo.value.length === 0 ) {

      res.innerHTML = `[Erros] preencha todos os campos`

    } else {

      res.innerHTML = `Contando: <br>`

      let ini = Number(init.value)
      let fi = Number(fim.value)
      let pas = Number(passo.value)

      if(pas <= 0) {
        res.innerHTML = `Passo inválido! Considerando passo a partir de 1: <br>`
        pas = 1
      }

      if(ini < fi){
        for( let i = ini; i <= fi; i += pas) {

          res.innerHTML += ` ${i} \u{1F3C3}`

        }

      }else {

        for (let i = ini; i >= fi; i -= pas){

          res.innerHTML += ` ${i} \u{1F3C3}`

        }
      }
      
      res.innerHTML += `\u{1F3C1}`
    }
 }