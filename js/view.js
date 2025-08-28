let container = document.querySelector("#container");
let list = document.querySelector("#list");

// função que renderiza só as imagens da página
function setImages(imagesList, currentPage = 1, itemsPerPage = 4) {
    list.innerHTML = ""; // limpa a lista de imagens

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = imagesList.slice(start, end);

    pageItems.forEach(img => {
        const listItem = document.createElement("li");
        const image = document.createElement("img");
        image.src = img.url;
        listItem.appendChild(image);
        list.appendChild(listItem);
    });
     container.scrollIntoView({ block: 'center' });
}
