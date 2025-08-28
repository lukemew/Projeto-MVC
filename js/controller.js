const select = document.querySelector("#select_tags");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const pageInfo = document.querySelector("#pageInfo");

let currentList = imagesList; // lista atual exibida (muda com o filtro)
let currentPage = 1;
const itemsPerPage = 4;

// Função para atualizar a tela
function updateView() {
    setImages(currentList, currentPage, itemsPerPage);

    // atualiza info de paginação
    const totalPages = Math.ceil(currentList.length / itemsPerPage);
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Inicializa com todas as imagens
updateView();

// Filtro por categoria
select.addEventListener("change", () => {
    switch (select.value) {
        case "tudo":
            currentList = imagesList;
            break;
        case "animais":
            currentList = animaisList;
            break;
        case "natureza":
            currentList = naturezaList;
            break;
        case "cidade":
            currentList = cidadeList;
            break;
        default:
            currentList = imagesList;
    }

    currentPage = 1; // sempre reinicia na página 1 ao trocar categoria
    updateView();
});

// Botões de navegação
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updateView();
    }
});

nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(currentList.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateView();
    }
});

    const barraPesquisa = document.getElementById('pesquisa');

    barraPesquisa.addEventListener('input', () => {
        const pesquisa = barraPesquisa.value.toLowerCase();
        const imagensFiltradas = imagesList.filter(img => img.tags.some(tag => tag.toLowerCase().includes(pesquisa)));
        currentList = imagensFiltradas;
        currentPage = 1;
        updateView();
    });