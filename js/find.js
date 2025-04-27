import { pegavalores } from './pegavalores.js';

export async function meufind() {
    /*passa os ids a pegavalores*/
    let idarray = "listaFind";
    let idchave = "objetivoFind";

    /*pega o array e chave*/
    const { lista, chave } = await pegavalores(idarray, idchave);

    /*percorre o array buscando um valor igual*/
    let cont = 0;
    lista.forEach(element => {
        if (element == chave) {
            cont += 1;
        }
    });

    /*retorna não encontrado ou encontrado*/
    let divresultado = document.getElementById("resultadoFind");
    if (cont == 1 & lista[0] == "") {
        /*bug fix clicar no botão sem ter nenhum valor não retorna 1*/
        divresultado.innerHTML = "<p>Falta algo!</p>";
    }
    else if (cont >= 1  ) {
        divresultado.style.background = " #1AAE9F";
        divresultado.innerHTML = "<p>Encontrado!</p>";
    }
    else {
        divresultado.innerHTML = "<p>Não Encontrado!</p>";
        divresultado.style.background = " #D3455B";
    }
}