let container= document.querySelector("#container")
let list= document.querySelector("#list")



animaisList.forEach(img => {
    const listItem = document.createElement('li'); // Cria um elemento da lista "li"
    const image= document.createElement("img") // cria a imagem
    image.src=img.url; // seta url da imagem
    listItem.appendChild(image);
    list.appendChild(listItem); // adiciona li na lista ul
})