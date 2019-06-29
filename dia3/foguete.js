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
    var tamanhoTela = window.innerHeight;
    var foguete = document.getElementById('foguete');
    var altura = tamanhoTela;
    var altitude = setInterval(function() {
        if (altura > 0) {
            foguete.style.height = altura+'px';
            altura--;
        }else{
            clearInterval(altitude, alert('Sucesso no lançamento!'));
        }
    }, 10);
    
}