const botao = document.getElementById('botao');
const menu = document.getElementById('exibirMenu');

botao.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
})