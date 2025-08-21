let imagesList= [
    {
        url: "https://tse1.mm.bing.net/th/id/OIP.LjuAYbxehbYkcGQf1ZocFAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        tags: ["animais"]
    },
    {
        url:"https://th.bing.com/th/id/R.f6ce307b42afddcbf9454903f82805f7?rik=30ErJHl8ePLIBw&riu=http%3a%2f%2fwww.petpaw.com.au%2fwp-content%2fuploads%2f2014%2f04%2fChihuahua-4.jpg&ehk=8pX0HPRyEg0ZNlKS8VZijCjfz3DApUaLki0%2fa%2bsySRc%3d&risl=&pid=ImgRaw&r=0",
        tags: ["chihuahua"]
    },
    {
        url: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/shutterstock_34564123-ed-a-Border-Collie-stand-on-grass.jpeg",
        tags: ["chihuahua"]
    }
]

let animaisList = []
let naturezaList= []
imagesList.forEach (img => {
    if(img.tags[0] == "animais") {
        animaisList.push(img)
    }
    console.log(img)
}
)

console.log(imagesList)
console.log(animaisList)