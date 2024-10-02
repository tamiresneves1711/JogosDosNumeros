let numerosecreto
let tentativas = 0;

function gerarNumeroAleatorio(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            // gera um numero de 1 até 100
            numerosecreto = Math.floor(Math.random()*100) +1;
            resolve(numerosecreto);
        }, 2000);
    });
}