document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField(){
    //Armazena o node (nó) '.schedule-item' e seus filhos
    // A função .cloneNode() faz cópias do nó selecionado pelo querySelector()
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Limpar os campos antes de adicionar na página
    // O querySelectorAll está salvando todos os inputs do newFieldContainer na variavel 'fields'
    const fields = newFieldContainer.querySelectorAll('input');
    
    //altera o valor de todos os inputs que estão armazenados em fields para null.
    fields.forEach(field => field.value = "");

    //A função appendChild() adiciona os filhos passados como paramtro no nó selecionado 
    //pelo querySelector();
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}