function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = 'nightcity-manha.png'
        document.body.style.background = '#f0c877'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'nightcity-tarde.png'
        document.body.style.background = '#ffb0db'
    } else {
        img.src = 'nightcity-noite.png'
        document.body.style.background = '#061946'
    }
}
