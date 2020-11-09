var botao = document.querySelector("#botao");
var input = document.querySelector("#input-data");
var titulo = document.querySelector("#titulo");
let img = document.querySelector("#img")

let pedido = new XMLHttpRequest();


botao.addEventListener("click", function(){
    let inputValor= input.value

    pedido.onreadystatechange = function(dados){
        if ( this.status == 200 && this.readyState == 4 )
        {
            let texto = this.responseText;
            let textJson = JSON.parse(texto)
            let imagem = textJson.hdurl
            titulo.innerText = textJson.title
            img.innerHTML = `<img src="${imagem}" width="500" height="500">`
            
        
        }

    }
 pedido.open("GET", `https://api.nasa.gov/planetary/apod?api_key=bVeIcN2GJ3fhlKrOyxcsVzeIEUOQwefJz8Fr0zak&date=${inputValor}
    `);
    pedido.send();
})

