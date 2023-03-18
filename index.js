let games = {
    data: [
        {
            name: "The Last Of Us Part 1 Remake",
            price: "1.399.000đ",
            image: "images/the-last-of-us-1.jpg"
        },

        {
            name: "Ark Survival Evolved",
            price: "186.000đ",
            image: "images/Ark.jpg"
        },

        {
            name: "Grand Theft Auto V",
            price: "455.500",
            image: "images/GTAV.jpg"
        },

        {
            name: "Dead Space",
            price: "990.000đ",
            image: "images/deadspace.jpg"
        },

        {
            name: "The Last Of Us Prat 2",
            price: "1.399.000đ",
            image: "images/the-last-of-us-2.jpg"
        },

        {
            name: "Marvel's Spider-Man",
            price: "1.139.000đ",
            image: "images/spiderman.jpg"
        },

        {
            name: "Red Dead Redemption II",
            price: "330.000đ",
            image: "images/Red_Dead_Redemption_II.jpg"
        },

        {
            name: "Genshin Impact",
            price: "Free",
            image: "images/GenshinImpact.jpg"
        },
    ]
};

for (let game of games.data) {
    let card = document.createElement("div");
    card.classList.add("card") ;

    let img = document.createElement("img");
    img.classList.add("img-container");
    img.setAttribute("src", game.image);
    card.appendChild(img);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("game-name");
    name.innerText = game.name;
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b>" + game.price;
    container.appendChild(price);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", `addToCart("${game.name}")`);
    btn.innerText = "ADD To CART";
    container.appendChild(btn);

    card.appendChild(container);
    document.getElementById("games").appendChild(card);
}

let carts = [
    {
        name: "The Last Of Us Part 1 Remake",
        price: "1.399.000đ",
        quantity: 0,
        image: "images/the-last-of-us-1.jpg"
    },

    {
        name: "Ark Survival Evolved",
        price: "186.000đ",
        quantity: 0,
        image: "images/Ark.jpg"
    },

    {
        name: "Grand Theft Auto V",
        price: "455.500",
        quantity: 0,
        image: "images/GTAV.jpg"
    },

    {
        name: "Dead Space",
        price: "990.000đ",
        quantity: 0,
        image: "images/deadspace.jpg"
    },

    {
        name: "The Last Of Us Prat 2",
        price: "1.399.000đ",
        quantity: 0,
        image: "images/the-last-of-us-2.jpg" 
    },

    {
        name: "Marvel's Spider-Man",
        price: "1.139.000đ",
        quantity: 0,
        image: "images/spiderman.jpg"
    },

    {
        name: "Red Dead Redemption II",
        price: "330.000đ",
        quantity: 0,
        image: "images/Red_Dead_Redemption_II.jpg"
    },

    {
        name: "Genshin Impact",
        price: "Free",
        quantity: 0,
        image: "images/GenshinImpact.jpg"
    }, 
];

function addToCart(name) {
    for (let cart of carts) {
        if (name == cart.name) {
            cart.quantity += 1;
        }
    }
    localStorage.setItem("carts", JSON.stringify(carts));
}