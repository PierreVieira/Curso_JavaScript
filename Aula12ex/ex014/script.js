function carregar() {
    const body = document.querySelector('#corpo')
    const horario = document.querySelector('#horario')

    const imagem = document.querySelector('#imagem')

    horas = new Date().getHours()

    if (horas < 12) {
        horario.innerHTML = horas == 1 ? 'Agora é 1 hora da manhã' : 'Agora são ' + horas + 'da manhã'
        imagem.src = '#f2ff66'
        body.style.backgroundColor = 'black'
    } else if (horas < 18) {
        horario.innerHTML = 'Agora são ' + horas + ' da tarde'
        imagem.src = 'imagens/tarde.png'
        body.style.backgroundColor = '#cfac4c'
    } else {
        horario.innerHTML = 'Agora são ' + horas + 'da noite'
        imagem.src = 'imagens/noite.png'
        body.style.backgroundColor = '#35304f'
    }
}
