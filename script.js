// Memory game 
// OSCAR POCO

document.addEventListener('DOMContentLoaded', ()=>
{
    const cardArray = 
    [
        // I wan't my array to be not able to be modified, I will use const intead of let
        {name: 'A', img: 'img/A.jpg'},
        {name: 'B', img: 'img/B.jpg'},
        {name: 'C', img: 'img/C.jpg'},
        {name: 'D', img: 'img/D.jpg'},
        {name: 'E', img: 'img/E.jpg'},
        {name: 'F', img: 'img/F.jpg'},
        {name: 'G', img: 'img/G.jpg'},
        {name: 'H', img: 'img/H.jpg'}
    ];

    let userName = prompt("Please Enter Your Name: ");
    alert('Hi '+ userName + ' welcome to Memory game');

    // I want to duplicate my images
    const gameGrid = cardArray.concat(cardArray);

    // I want to shuffle my images to make it more interesting when choosing cards
    gameGrid.sort(() => 0.5 - Math.random());

    // for the choosen cards and won cards I want variables for those conditions
    const grid = document.querySelector('.grid');
    let cardsChoosen = [];
    let cardsChoosenIds = [];
    let cardsWon = [];

    // now I am creating gameboard
    function boardGame()
    {
        for (let i = 0; i < gameGrid.length; i++)
        {
            const card = document.createElement('img');
            card.setAttribute('src', 'img/back.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // checking if the cards do match
    function check4Match()
    {
        const cards = document.querySelectorAll('img');
        const firstCardId = cardsChoosenIds[0];
        const secondCardId = cardsChoosenIds[1];
        

        if (cardsChoosen[0] === cardsChoosen[1])
        {
            alert('match found ' + userName);
            cards[firstCardId].setAttribute('src', 'img/correct.jpg');
            cards[secondCardId].setAttribute('src', 'img/correct.jpg');
            cardsWon.push(cardsChoosen);
        }

        else
        {
            cards[firstCardId].setAttribute('src', 'img/back.jpg');
            cards[secondCardId].setAttribute('src', 'img/back.jpg');
            alert('Sorry, Try again ' + userName);
        }

        cardsChoosen = [];
        cardsChoosenIds = [];
        if (cardsWon.length === gameGrid.length/2)
        {
            alert('You found all the match ' + userName + ' press ok to start over');
            location.reload();
        }
    }


    // flipping the cards
    function flipCard()
    {
        let cardId = this.getAttribute('data-id');
        cardsChoosen.push(gameGrid[cardId].name);
        cardsChoosenIds.push(cardId);
        this.setAttribute('src', gameGrid[cardId].img);
        if (cardsChoosen.length === 2)
        {
            setTimeout(check4Match, 500);
        }
    }
    
    boardGame();
    
});