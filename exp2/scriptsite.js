function load(){
    var imagem = document.querySelector("div#img")
    var horas = document.querySelector("div#hrs")
    var momento = new Date()
    var hors = momento.getHours ()
    hrs.innerHTML = `Agora são ${hors} horas.`

    //var hors = 1
    

    if(hors >=0 && hors <12){
        imagem.innerHTML = '<img src="manha.png">'
        document.body.style.background = '#DDBB96'

    } else if(hors >=12 && hors <18 ){
        imagem.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#FE8900'

    } else {
        imagem.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#1E2737'

    }
}
