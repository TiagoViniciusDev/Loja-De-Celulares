//Requisição feita por uma função que aguarda a resposta do fetch e retorna seu valor

async function ApiProducts(query){
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    const data = await response.json() //Passando para json
    return data.results //Retornado apenas "results" do objeto
    
}

export default ApiProducts