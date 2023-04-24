let games = {
    data: [
        {
            name: "The Last Of Us Part 1 Remake",
            price: " 1.399.000đ",
            image: "images/the-last-of-us-1.jpg"
        },

        {
            name: "Ark Survival Evolved",
            price: " 466.000đ",
            image: "images/Ark.jpg"
        },

        {
            name: "Grand Theft Auto V",
            price: " 455.500",
            image: "images/GTAV.jpg"
        },

        {
            name: "Dead Space",
            price: " 990.000đ",
            image: "images/deadspace.jpg"
        },

        {
            name: "The Last Of Us Prat 2",
            price: " 1.399.000đ",
            image: "images/the-last-of-us-2.jpg"
        },

        {
            name: "Marvel's Spider-Man",
            price: " 1.139.000đ",
            image: "images/spiderman.jpg"
        },

        {
            name: "Red Dead Redemption II",
            price: " 1.000.000đ",
            image: "images/Red_Dead_Redemption_II.jpg"
        },

        {
            name: "Marvel's Spider Man: Miles Morales",
            price: " 1.159.000đ",
            image: "images/spiderman2.jpg"
        },

        {
            name: "Jurassic World Evolution 2",
            price: " 910.000đ",
            image: "images/jw.jpg"
        },

        {
            name: "Jurassic World Evolution ",
            price: " 950.000đ",
            image: "images/jw1.jpg"
        },

        {
            name: "Lego Jurassic World",
            price: " 900.000đ",
            image: "images/legoJW.jpg"
        },

        {
            name: "Among Us",
            price: " 47.000đ",
            image: "images/amongus.jpg"
        },

        {
            name: "Cyber Punk 2077",
            price: " 971.000đ",
            image: "images/cyberpunk-2077.jpg"
        },

        {
            name: "World War Z Aftermath",
            price: " 373.000đ",
            image: "images/worldwarz.jpg"
        },

        {
            name: "Dying Light 2 Stay Human",
            price: " 990.000đ",
            image: "images/dyinglight2.png"
        },

        {
            name: "Poppy Playtime",
            price: " 120.000đ",
            image: "images/poppy.jpg"
        },

        {
            name: "Resident Evil 3",
            price: " 699.000đ",
            image: "images/re3.jpg"
        },

        {
            name: "Resident Evil 4",
            price: " 1.599.000đ",
            image: "images/re4.jpg"
        },
    ]
};

for (let game of games.data) {
    let card = document.createElement("div");
    card.classList.add("card");

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
        price: "466.000đ",
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
        price: "1.000.000đ",
        quantity: 0,
        image: "images/Red_Dead_Redemption_II.jpg"
    },

    {
        name: "Marvel's Spider Man: Miles Morales",
        price: " 1.159.000đ",
        quantity: 0,
        image: "images/spiderman2.jpg"
    },

    {
        name: "Jurassic World Evolution 2",
        price: " 910.000đ",
        quantity: 0,
        image: "images/jw.jpg"
    },

    {
        name: "Jurassic World Evolution ",
        price: " 950.000đ",
        quantity: 0,
        image: "images/jw1.jpg"
    },

    {
        name: "Lego Jurassic World",
        price: " 900.000đ",
        quantity: 0,
        image: "images/legoJW.jpg"
    },

    {
        name: "Among Us",
        price: " 47.000đ",
        quantity: 0,
        image: "images/amongus.jpg"
    },

    {
        name: "Cyber Punk 2077",
        price: " 971.000đ",
        quantity: 0,
        image: "images/cyberpunk-2077.jpg"
    },


    {
        name: "World War Z Aftermath",
        price: " 373.000đ",
        quantity: 0,
        image: "images/worldwarz.jpg"
    },

    {
        name: "Dying Light 2 Stay Human",
        price: " 990.000đ",
        quantity: 0,
        image: "images/dyinglight2.png"
    },

    {
        name: "Poppy Playtime",
        price: " 120.000đ",
        quantity: 0,
        image: "images/poppy.jpg"
    },

    {
        name: "Resident Evil 3",
        price: " 699.000đ",
        quantity: 0,
        image: "images/re3.jpg"
    },

    {
        name: "Resident Evil 4",
        price: " 1.599.000đ",
        quantity: 0,
        image: "images/re4.jpg"
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

const token = localStorage.getItem("auth_token");

if (!token) {
    window.location = "login.html";
}

function logout() {
    localStorage.clear();
    window.location = "login.html";
}

