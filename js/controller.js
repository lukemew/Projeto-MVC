const select = document.querySelector("#select_tags") // pega o seletor
setImages(imagesList) // seta as imagens uma primeira vez, para a página não iniciar vazia

// quando o valor do select para uma das categorias, muda as imagens
select.addEventListener("change", () => {
    switch(select.value) {
        case "tudo":
            setImages(imagesList)
            break;
        case "animais":
            setImages(animaisList)
            break;
        case "natureza":
            setImages(naturezaList)
            break;
        case "cidade":
            setImages(cidadeList)
            break;
        default:
            setImages(imagesList)
        }
})