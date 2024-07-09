var setaDireita = window.document.getElementById("seta-direita")
var Leornado = window.document.getElementById("Leornardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leornado.style = "display: none"
    Bruna.style = "display: flex"
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    Leornado.style = "display: flex"
    Bruna.style = "display: none"
    setaDireita.style = "display: flex; margin-top: 55px"
    setaEsquerda.style = "display: none"


}


