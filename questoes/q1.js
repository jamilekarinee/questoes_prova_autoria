// "Nome: Ana Silva, Email: ana.silva@example.com, Telefone: 123456789".
function formatarContato(contato){
    let {nome, email, telefone} = contato; 
    return 'Nome: ' + nome + ', ' + 'Email: ' + email + ',' + ' Telefone: ' + telefone; 
}
let contato1 = {
    nome: 'Jamile', 
    email: 'jamile@gmail.com', 
    telefone: 84994567348
}; 
console.log(formatarContato(contato1)); 
