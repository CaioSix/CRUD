import { clienteService } from '../service/cliente-service.js'


const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit',(goku) =>{
    goku.preventDefault();
    const nome = goku.target.querySelector('[data-nome]').value;
    const email = goku.target.querySelector('[data-email]').value;

    clienteService.criaClientes(nome, email)
    .then(() =>{
        window.location.href = '../telas/cadastro_concluido.html'
    })
})