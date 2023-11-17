function mostrarRespostas() {
    var respostas = document.getElementById("respostas");
    var seta = document.getElementById('icone')


    if (respostas.style.display === "none") {
        respostas.style.display = "block";
        seta.style.transform  = 'rotate(270deg)';

        const respostasText = document.getElementsByClassName('respostas-das-perguntas');
        for (var i = 0; i < respostasText.length; i++) {
            respostasText[i].style.color = 'white';
            respostasText[i].style.padding = '40px';
        }
    } else {
        respostas.style.display = "none";
        seta.style.transform  = 'rotate(0deg)';

    }
}
function mostrarRespostas2() {
    var respostas2 = document.getElementById("respostas2");
    var seta = document.getElementById('icone2')
    if (respostas2.style.display === "none") {
        respostas2.style.display = "block";
        seta.style.transform  = 'rotate(270deg)';

        const respostasText = document.getElementsByClassName('respostas-das-perguntas');
        for (var i = 0; i < respostasText.length; i++) {
            respostasText[i].style.color = 'white';
            respostasText[i].style.padding = '40px';
        }
    } else {
        respostas2.style.display = "none";
        seta.style.transform  = 'rotate(0deg)';
    }
}
function mostrarRespostas3() {
    var respostas3 = document.getElementById("respostas3");
    var seta = document.getElementById('icone3')
    if (respostas3.style.display === "none") {
        respostas3.style.display = "block";
        seta.style.transform  = 'rotate(270deg)';
        const respostasText = document.getElementsByClassName('respostas-das-perguntas');
        
        for (var i = 0; i < respostasText.length; i++) {
            respostasText[i].style.color = 'white';
            respostasText[i].style.padding = '40px';
            
        }
    } else {
        respostas3.style.display = "none";
        seta.style.transform  = 'rotate(0deg)';
        
        
    }
}
