//Procurar o botão
document.querySelector("#add-time")
    //Quando clicar no botao
.addEventListener('click', cloneField);

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Mas que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Dados repetidos. Como limpar os campos repetidos?
    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach(function(field) {
        //Pega o field do momento e limpa ele
        field.value = "";
    })

    //Colocar na página. Mas onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
