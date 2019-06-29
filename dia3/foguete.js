var botao = document.getElementById('lancamento');
botao.addEventListener('click', function(){
    var tempo = document.getElementById('tempo').value;
    var cronometro = document.getElementById('cronometro');
    var intervalo = setInterval(function() {
        cronometro.textContent = tempo;
        tempo--;
        if (tempo < 0) {
            clearInterval(intervalo, decolar());
        }
    }, 1000);
})

function decolar() {
}