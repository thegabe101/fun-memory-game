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
let currentScore = 0
const results = document.querySelector("#resultDisplay");
const cardArrayLength = cards.length;
const grid = document.getElementById('gameGrid');
let cardsChosen = [];
let matchedCards = [];
const winnerCards = []

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
    matchedCards.push(cardId);
    console.log(matchedCards);
    console.log(cardsChosen)
    this.setAttribute('src', cards[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

checkMatch = () => {
    const matchCards = document.querySelectorAll('img');
    const optOne = matchedCards[0]
    const optTwo = matchedCards[1]
    if (optOne == optTwo) {
        alert("That's the same card!");
    }
    console.log('checkmatch called');
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("Nice! That's a match!");
        results.innerHTML = currentScore++
        matchCards[matchedCards[0]].setAttribute('src', 'images/match_peq5.png');
        matchCards[matchedCards[1]].setAttribute('src', 'images/match_peq5.png');
        matchCards[matchedCards[1]].removeEventListener('click', flipper);
        winnerCards.push(cardsChosen)
    } else {
        matchCards[optOne].setAttribute('src', 'images/black.webp');
        matchCards[optTwo].setAttribute('src', 'images/black.webp');
        alert("Try again!")
    }
    cardsChosen = []
    matchedCards = []

    if ((winnerCards.length - 1) == cards.length / 2) {
        results.innerhtml = "Congratulations! You won!"
    }
}
