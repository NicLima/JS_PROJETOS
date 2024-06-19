function Contar(){
    var ini = document.getElementById("ini")
    var inivalue = ini.value
    var fim = document.getElementById("fim")
    var fimvalue = fim.value
    var passo = document.getElementById("pas")
    var msg = ""
    var res = document.getElementById("res")
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert("[ERRO] Faltam dados")
        res.innerHTML = 'Impossível contar!'

    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if (i < f) {
            for ( let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for ( let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    /*
    if(inivalue.length > 0){
        if (inivalue == 0){
            //window.alert('[ERRO] O campo inicio deve ser maior que zero')
            msg += ('[ERRO] O campo inicio deve ser maior que zero')
            div2.innerHTML = `[ERRO] O campo inicio deve ser maior que zero`    
        } else {
            //window.alert('maior que zero no if 1')
            msg += ('[ERRO] O campo inicio deve ser maior que zero')
            div2.innerHTML = `Inicio : ${inivalue}.`
        }
    }  else {
        window.alert('[ERRO] O campo inicio esta em branco')
        div2.innerHTML = `[ERRO] Preencha o campo inicio`
    }

    if(fimvalue.length > 0){
        if (inivalue == 0){
            window.alert('[ERRO] O campo inicio deve ser maior que zero')
            div2.innerHTML = `[ERRO] O campo inicio deve ser maior que zero`    
        } else {
            window.alert('maior que zero no if 1')
            div2.innerHTML = `Inicio : ${inivalue}.`
        }
    }  else {
        window.alert('[ERRO] O campo inicio esta em branco')
        div2.innerHTML = `[ERRO] Preencha o campo inicio`
    }
    */
}

