let imagesList = [
  {
    url: "https://tse1.mm.bing.net/th/id/OIP.LjuAYbxehbYkcGQf1ZocFAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["animais"],
  },
  {
    url: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-domesticated-dog.jpg?w=1600&h=1067",
    tags: ["animais"],
  },
  {
    url: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/shutterstock_34564123-ed-a-Border-Collie-stand-on-grass.jpeg",
    tags: ["animais"],
  },
  {
    url: "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg.webp",
    tags: ["animais"],
  },
  {
    url: "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg",
    tags: ["animais"],
  },
  {
    url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    tags: ["animais"],
  },
  {
    url: "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg",
    tags: ["animais"],
  },
  {
    url: "https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg",
    tags: ["animais"],
  },

  {
    url: "https://adimax.com.br/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg",
    tags: ["animais"],
  },
  {
    url: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg",
    tags: ["animais"],
  },
  {
    url: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg",
    tags: ["cidade"],
  },
  {
    url: "https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg",
    tags: ["cidade"],
  },
  {
    url: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg",
    tags: ["cidade"],
  },
  {
    url: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
    tags: ["cidade"],
  },
  {
    url: "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg",
    tags: ["cidade"],
  },
  {
    url: "https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg",
    tags: ["cidade"],
  },
  {
    url: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg",
    tags: ["natureza"],
  },
  {
    url: "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg",
    tags: ["natureza"],
  },
  {
    url: "https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg",
    tags: ["natureza"],
  },
  {
    url: "https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg",
    tags: ["natureza"],
  },
  {
    url: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg",
    tags: ["natureza"],
  },
  {
    url: "https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg",
    tags: ["natureza"],
  },
]; // Lista de imagens

// Inicializa listas
let animaisList = [];
let naturezaList = [];
let cidadeList = [];

// Dependendo da tag, insere na respectiva lista
imagesList.forEach((img) => {
  switch (img.tags[0]) {
    case "animais":
      animaisList.push(img);
      break;
    case "natureza":
      naturezaList.push(img);
      break;
    case "cidade":
      cidadeList.push(img);
      break;
  }
});
