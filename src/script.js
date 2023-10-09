const botao = document.getElementById('botao');
const menu = document.getElementById('exibirMenu');

botao.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
});

// ----------------------------------------------------

const btn = document.getElementById('btnTop');

btn.addEventListener('click', ()=> {
    window.scrollTo(0,0);
});

document.addEventListener('scroll', ocultar);

function ocultar() {
    if(window.scrollY > 10) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    };
};

ocultar();