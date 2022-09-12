const cards = [
    {
        name: 'fries',
        img: 'images/fries.webp'
    },
    {
        name: 'cheeseburger',
        img: 'images/Cheeseburger.jpg'
    },
    {
        name: 'hot dog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice cream',
        img: 'images/icecream.jpg'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'white',
        img: 'images/white.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.webp'
    },
    {
        name: 'cheeseburger',
        img: 'images/Cheeseburger.jpg'
    },
    {
        name: 'hot dog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice cream',
        img: 'images/icecream.jpg'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'white',
        img: 'images/white.jpg'
    },
]

console.log(cards);

const cardArrayLength = cards.length;

const grid = document.getElementById('gameGrid');
const cardsChosen = [];

console.log(grid)

cards.sort(() => 0.5 - Math.random());

makeGameboard = () => {
    for (let i = 0; i < cardArrayLength; i++) {
        const card = document.createElement('img');
        card.classList.add('card-size');
        card.setAttribute('src', 'images/black.webp');
        card.setAttribute('data-id', i)
        // console.log(card, i)
        console.log(card, i)
        card.addEventListener('click', flipper)
        grid.append(card)
    }
}

makeGameboard();

function flipper(e) {
    e.preventDefault
    console.log(e.target);
    e.target.classList.add('card-size')
    let cardId = this.getAttribute('data-id')
    console.log(cards[cardId].name)
    console.log('Im clicked!')
    console.log(cardId)
    cardsChosen.push(cards[cardId].name)
    console.log(cardsChosen)
    this.setAttribute('src', cards[cardId].img);
}
