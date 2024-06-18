function Contar(){
    //var ini = Number(document.getElementById("ini"))
    var ini = document.getElementById("ini")
    var inivalue = ini.value

    var fim = document.getElementById("fim")
    var fimvalue = fim.value

    var msg = ""
    
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
}

