let num = document.querySelector("input#number")
let tab = document.querySelector("select#tab")
let res = document.querySelector("div#res")
let valores = []

function isNumero(num) {

    if( Number(num) >= 1 && Number(num) <= 100 ) {

        return true

    } else {

        return false
    }
}

function inLista(num, list) {

    if( list.indexOf(Number(num)) != -1 ) {

        return true 

    } else {

        return false
        
 }
}

function adicionar() {

    let numb = num.value 

    if( isNumero(numb) && !inLista(numb, valores )) {

        valores.push(Number(numb))
        
        let item = document.createElement("option")  
        item.innerHTML = `O valor ${numb} adicionado` 
        tab.appendChild(item)
        res.innerHTML = ``
        
    } else {
        
        window.alert('Valor inválido ou já encontrado na lista')
        
    }

    num.value = ''
    num.focus()
    
}

function finalizar() {

    if( valores.length == 0 ){

        window.alert('Adicione valores antes de finalizar')

    } else {

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let posicao in valores) {
            if( valores[posicao] > maior ) {
                maior =  valores[posicao]
            }
            if( valores[posicao] < menor ) {
                menor = valores[posicao]
            }
            soma += valores[posicao]
            media = soma / total
        }

        res.innerHTML = ``

        if( total <= 1 )  {

        res.innerHTML += `
        <p>Ao todo, temos ${total} número cadastrados.</p>
        `

        }else {

        res.innerHTML += `
        <p>Ao todo, temos ${total} números cadastrados.</p>
        `
        res.innerHTML +=`
        <p>O maior valor informado foi ${maior}.</p>
        `
        res.innerHTML +=`
        <p>O menor valor informado foi ${menor}.</p>
        `
        res.innerHTML +=`
        <p>A soma dos valores foi ${soma}.</p>
        `
        res.innerHTML +=`
        <p>A média dos valores foi ${media}.</p>
        `
        }
    }
}
        





 


