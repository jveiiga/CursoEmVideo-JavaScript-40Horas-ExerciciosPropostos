function sondando() {
    let txtp1 = document.querySelector("input#txtp1")
    let res = document.querySelector("div#res")
    let p1 = (txtp1.value)

    pais.innerHTML = `<p>Você é natural de: ${p1}.</p>`
    if (p1 == "Brasil" || p1 == "brasil" || p1 == "Brasileiro" || p1 == "brasileiro") {
        res.innerHTML = `<p>Você é BRASILEIRO <strong>SEJA BEM VINDO!</strong></p>`
    } else {
        res.innerHTML = `Você é estrangeiro, vá até o guichê e <strong>VERIFIQUE SUA DOCUMENTAÇÃO</strong> `
    }
}