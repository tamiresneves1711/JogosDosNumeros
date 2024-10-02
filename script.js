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

function verificarPalpite(palpite){
    return new Promise((resolve, reject) => {
        tentativas++;
        if(palpite < 1 || palpite >100){
            reject("Por Favor, digite um número entre 1 e 100");
        }else if(palpite === numerosecreto){
            resolve("Parabéns! Você acertou o número");
        }else if(palpite < numerosecreto){
            resolve("Muito baixo! Jogue novamente")
        }else{
            resolve("Muito alto! Jogue novamente")
        }
    });
}

async function iniciarjogo(){
    await gerarNumeroAleatorio();
    const botaoEnviar = document.getElementById("enviar");
    const inputPalpite = document.getElementById("palpite");
    const resultado = document.getElementById("resultado");
    const tentativasDisplay = document.getElementById("tentativas");

    botaoEnviar.addEventListener("click", async() => {
        try {
            const palpite = parseInt(inputPalpite.value);
            const mensagem = await verificarPalpite(palpite);
            resultado.textContent = mensagem;
            tentativasDisplay.textContent = `Tentativas: ${tentativas}`;

            inputPalpite.value= "";

            if(mensagem.includes("acertou")){
                tentativas =0;
                resultado.textContent += "  o jogo será reiniciado"
                await gerarNumeroAleatorio();
                tentativasDisplay.textContent = "";
            }

        } catch (erro) {
            resultado.textContent = erro;
        }
    });
}

window.onload =iniciarjogo
