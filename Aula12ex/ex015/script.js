function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const formAno = document.querySelector('#txtAno')
    const res = document.querySelector('div#res')
    if (formAno.value.length === 0 || formAno.value > ano) {
        alert('Informe um ano de nascimento válido')
    } else {
        const sexo = document.getElementsByName('radsex')
        console.log(sexo)
        console.log('Ano atual: '+ano)
        const anoNascimento = Number(formAno.value)
        const idade = ano - anoNascimento
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('alt', 'Foto Pessoa')
        if (sexo[0].checked) {
            genero = 'homem'
          if(idade < 2) {
              img.setAttribute('src', 'imagens/foto-bebe-m.png')
          } else if(idade < 25){
              img.setAttribute('src', 'imagens/foto-jovem-m.png')
          } else if(idade < 65){
              img.setAttribute('src', 'imagens/foto-adulto-m.png')
          } else {
              img.setAttribute('src', 'imagens/foto-idoso-m.png')
          }
        } else{
            genero = 'mulher'
            if(idade < 2) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if(idade < 18){
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if(idade < 65){
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detecatamos ${genero} com ${idade} anos.`
        img.style.margin = '10px'
        res.appendChild(img)
    }
}