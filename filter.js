import { pegavalores } from './pegavalores.js';

export async function meufilter() {
    /*passa o id a pegavalores*/
    let idarray = "listaFilter";
    let idchave = "objetivoFilter";

    /*pega o array e a chave de busca*/
    const { lista, chave } = await pegavalores(idarray, idchave);

    /*percorre o array contando cada vez que achar*/
    let cont = 0;
    lista.forEach(element => {
        if (element == chave)
            cont += 1;
    });

    /*retorna o numero de vezes achado*/
    let divresultado = document.getElementById("resultadoFilter");
    if (cont == 0) {
        divresultado.innerHTML = "<p>" + cont + " encontrados</p>";
        divresultado.style.background = " #D3455B";
    }
    else if (cont == 1 & lista[0] == "") {
        /*bug fix clicar no botão sem ter nenhum valor não retorna 1*/
    }
    else {
        divresultado.innerHTML = "<p>" + cont + " encontrados</p>";
        divresultado.style.background = " #1AAE9F";
    }
}

