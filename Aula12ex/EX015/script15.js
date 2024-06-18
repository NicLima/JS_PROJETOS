function verificar(){
    var data    = new Date()
    var ano     = data.getFullYear()
    var fano    = document.getElementById("ano")    
    var res     = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex    = document.getElementsByName("radsex")
        var idade   = ano - Number(fano.value)
        var genero  = ""

        //Inserir um elemento de imagem.
        var img = document.createElement('img')
        //Atribuir um id = 'foto' a esse elemento.
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero  = "Homem"
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-menino.png')       
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menino.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')    
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            } 
        } else if (fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menina.png')
            } else if (idade < 65){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //Adiciona o elemento img.
        res.appendChild(img)
    }
    
}