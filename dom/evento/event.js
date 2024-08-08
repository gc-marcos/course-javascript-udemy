function mostrarAlerta() {
    alert('O botão foi Clicado!!')
}

function mudarTexto(xuxa){
    xuxa.innerHTML = 'Estou avisando....!'
}

function mudarCor(){
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1);
    document.bgColor = cores[numero];
}
    function escreverTexto(input){
        let span = document.getElementById('texto');
        span.innerHTML = input.value;
    }
