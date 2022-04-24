function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
     msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
     img.src ='imagens/manha.png'
     document.body.style.background = '#e8d5af'
    } else if (hora >= 12 && hora <18) {
        //Boa Tarde
     img.src ='imagens/tarde.png'
     document.body.style.background = '#b19b84' 
    } else {
    // Boa noite!
     img.src ='imagens/noite1.png' 
     document.body.style.background = '#aa3e18'
   }

}