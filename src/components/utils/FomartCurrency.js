//Formatação da moeda

function FormatCurrency(value){
   return value.toLocaleString('pt-br', { //Fomatação da moeda //Só muda o estilo, não converte os valores
        style: 'currency',
        currency: 'BRL'
    })
}

export default FormatCurrency

