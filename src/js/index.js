'user strict'

const selectDivInicioIlustracao = document.querySelectorAll('.div-inicio-ilustracao');
const selectDivSobreNosIlustracao = document.querySelectorAll('.div-sobrenos-ilustracao');
let slideInicioAtual = 0;
let slideSobreNosAtual = 0;

setInterval(() => {
    slideInicio();
    slideSobreNos();
}, 4000);

function slideInicio() {

    selectDivInicioIlustracao[slideInicioAtual].classList.remove('visivel');
    
    slideInicioAtual++;
    
    if (slideInicioAtual > selectDivInicioIlustracao.length -1) {
        slideInicioAtual = 0;
    };
    
    selectDivInicioIlustracao[slideInicioAtual].classList.add('visivel');
};

function slideSobreNos() {

    selectDivSobreNosIlustracao[slideSobreNosAtual].classList.remove('visivel');

    slideSobreNosAtual++;
    
    if (slideSobreNosAtual > selectDivSobreNosIlustracao.length -1) {
        slideSobreNosAtual = 0;
    };
    
    selectDivSobreNosIlustracao[slideSobreNosAtual].classList.add('visivel');
};