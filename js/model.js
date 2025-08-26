let imagesList= [
    {
        url: "https://tse1.mm.bing.net/th/id/OIP.LjuAYbxehbYkcGQf1ZocFAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        tags: ["animais"]
    },
    {
        url: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-domesticated-dog.jpg?w=1600&h=1067",
        tags: ["animais"]
    },
    {
        url: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/shutterstock_34564123-ed-a-Border-Collie-stand-on-grass.jpeg",
        tags: ["animais"]
    }, 
    {
        url: "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg.webp",
        tags: ["animais"]
    },
    {
        url: "https://adimax.com.br/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg",
        tags: ["animais"]
    }
] // Lista de imagens

// Inicializa listas
let animaisList = []
let naturezaList= []
let cidadeList= []

// Dependendo da tag, insere na respectiva lista
imagesList.forEach (img => {

    switch (img.tags[0]) {
        case "animais":
            animaisList.push(img)
            break;
        case "natureza":
            naturezaList.push(img)
            break;
        case "cidade":
            cidadeList.push(img)
            break;
    }
}
)
