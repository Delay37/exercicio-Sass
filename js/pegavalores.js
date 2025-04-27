export function pegavalores(idarray, idchave) {
    /*pega os valores da tela com o id passado e coloca no array*/
    let cont = 0;
    let textoTotal = document.getElementById(idarray).value;
    const lista = textoTotal.split(',').map(element => element.trim());
    let chave = document.getElementById(idchave).value;
    return {lista, chave};
    
    /*retorna o array e chave*/
}