// capitalizarTitulos


const capitalizarTitulos = (livros) => {
    let vetor = []; 
    for (let i=0; i<livros.length; i++){
        vetor.push(livros[i].toUpperCase)
        return livros[i].toUpperCase();
    }
}
// length[i] 
//.split(\)

// Tentei realizar esta questões de muitas formas, até com 
// return livros[0].[0].toUpperCase(); 
// mas não consegui. Tem como o senhor postar as respostas depois, por gentileza? 

let nomes = ['o pequeno príncipe','dom casmurro', 'a metamorfose']
console.log(capitalizarTitulos(nomes)); 
