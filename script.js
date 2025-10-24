/* selecionando os elementos*/
const form = document.querySelector('form');
const amount = document.getElementById('amount'); //valor//
const currency = document.getElementById('currency');//moeda//
const footer = document.querySelector('footer');
const description = document.getElementById('description');
const result = document.getElementById('result');


/*identificando as variaveis das cotações das moedas*/
let USD = 4.68;
let EUR =  2.67;
let GBP = 5.80;

function convertCurrency(amount, price, symbol){
    try {
    description.textContent = `${symbol}1 ${formatCurrencyBRL(price)};`
    
    // calcular o total//
    let total = amount * price;

    if (isNaN(total)){
        return alert("Digite o valor correto para converter");
    }
    // formatar o valor total//
    total = String(amount * price ).replace(".", ",");

    //exibir o resultado//
    result.textContent = `${total} Reais`;


 //aplica a classe que exibe o footer para mostrar o resultado//
    footer.classList.add('show-result');
    //remove a classe do footer removendo ele da tela//
    } catch (error) {
      footer.classList.remove('show-result');
      console.log(error);
      alert("nao foi possible converter");
    }
}
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"

    });
}

/*manipulando o input para receber somente numeros*/

amount.addEventListener('input', () => {
    const regexStructure = /\D/g; //criar uma variavel para colocar a estrutura do REGEX- validar expressões regulares//
    amount.value = amount.value.replace(regexStructure, "") // replace utilizado junto do regex remove as strings//

});

//captar o evento de submit 

form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD ,"US$");
            break
        case "EUR":
            convertCurrency(amount.value, EUR ,"€");
            break
        case "GBP":
            convertCurrency(amount.value, GBP ,"£");
            break
    }
}
