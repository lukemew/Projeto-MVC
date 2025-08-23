let container= document.querySelector("#container") // pega container das imagens
let list= document.querySelector("#list") // pega a lista <ul>


// função que seta as imagens
function setImages(imagesList) {
    list.innerHTML = [] // limpa a lista de imagens, para nao duplicar
    imagesList.forEach(img => {
        const listItem = document.createElement('li'); // Cria um elemento <li> para ficar dentro da <ul>
        const image= document.createElement("img") // cria a imagem
        image.src=img.url; // seta url da imagem
        listItem.appendChild(image); // coloca a <img> dentro do <li>
        list.appendChild(listItem); // adiciona <li> na lista <ul>
    })
}
