let ppt
let ale

document.getElementById("botao1").addEventListener("click", function (){
    ale = Math.floor(Math.random()*3)
    ppt = 1

    if(ale === 1){

        alert("Você: Pedra\nBot: Pedra\nEmpate")
    }else if(2 === ale){
        alert("Você: Pedra\nBot: Papel\nPerdeu")
    }else{
        alert("Você: Pedra\nBot: Tesoura\nVenceu")
    }
})
document.getElementById("botao2").addEventListener("click", function (){
    ale = Math.floor(Math.random()*3)
    ppt = 2

    if(1 === ale){
        alert("Você: Papel\nBot: Pedra\nVeceu")
    }else if(2 === ale){
        alert("Você: Papel\nBot: Papel\nEmpate")
    }else{
        alert("Você: Papel\nBot: Tesoura\nPerdeu")
    }
})
document.getElementById("botao3").addEventListener("click", function (){
    ale = Math.floor(Math.random()*3)
    ppt = 3

    if(1 === ale){
        alert("Você: Tesoura\nBot: Pedra\nPerdeu")
    }else if(2 === ale){
        alert("Você: Tesoura\nBot: Papel\nVenceu")
    }else{
        alert("Você: Tesoura\nBot: Tesoura\nEmpate")
    }
})
