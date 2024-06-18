function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()

    var hora
    var hora1 = 7
    var hora2 = window.document.getElementById('hora2')
    var hora2v = hora2.value

    // Verifique se o valor está vazio
    if (hora2 === '') {
        hora = hora1
    } else {
        hora = hora2v
    }

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotodia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}