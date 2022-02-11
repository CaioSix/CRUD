const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('nao foi possivel listar os clientes')
    })
}

const criaClientes = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('nao foi possivel criar o cliente')
    })
}


const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE',
    }).then ( resposta =>{
        if(!resposta.ok){
            throw new Error('nao foi possivel remover os clientes')
        }
    })
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('nao foi possivel detalhar os clientes')
    })
}

const atualizaCliente = (id, nome , email) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then( resposta =>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('nao foi possivel atualizar um  clientes')
    })

}

export const clienteService = {
    listaClientes,
    criaClientes,
    removeCliente,
    detalhaCliente,
    atualizaCliente

}