import burger from "../assets/images/memoryImg/burger.png"
import chinese from "../assets/images/memoryImg/chinese.png"
import dessert from "../assets/images/memoryImg/dessert.png"
import pizza from "../assets/images/memoryImg/pizza.png"
import poke from "../assets/images/memoryImg/poke.png"
import sushi from "../assets/images/memoryImg/sushi.png"

// AVATARZZ
import apple from '../assets/images/avatar/avatar_apple.png'
import banana from '../assets/images/avatar/avatar_banana.png'
import cherries from '../assets/images/avatar/avatar_cherries.png'
import icecream from '../assets/images/avatar/avatar_icecream.png'
import lemon from '../assets/images/avatar/avatar_lemon.png'
import pear from '../assets/images/avatar/avatar_pear.png'
import pineapple from '../assets/images/avatar/avatar_pineapple.png'
import strawberry from '../assets/images/avatar/avatar_strawberry.png'
import watermelon from '../assets/images/avatar/avatar_watermelon.png'


// BADGES
import capitan20 from '../assets/images/badges/capitan20.png'
import signedUp from '../assets/images/badges/signedUp.png'
import firstOrder from '../assets/images/badges/firstOrder.png'
import firstOrder2 from '../assets/images/badges/firstOrder2.png'
import greedy from '../assets/images/badges/greedy.png'
import king from '../assets/images/badges/king.png'
import mexican from '../assets/images/badges/mexican.png'
import mostPopular from '../assets/images/badges/mostPopular.png'
import pizzaKing from '../assets/images/badges/pizzaKing.png'
import playTogether from '../assets/images/badges/playTogether.png'
import spendthrift from '../assets/images/badges/spendthrift.png'
import topClient from '../assets/images/badges/topClient.png'


const properties = {
    memoryCardsPair: [
        { name: burger, active: false, visible: true },
        { name: chinese, active: false, visible: true },
        { name: dessert, active: false, visible: true },
        { name: poke, active: false, visible: true },
        { name: pizza, active: false, visible: true },
        { name: sushi, active: false, visible: true },
        { name: burger, active: false, visible: true },
        { name: chinese, active: false, visible: true },
        { name: dessert, active: false, visible: true },
        { name: poke, active: false, visible: true },
        { name: pizza, active: false, visible: true },
        { name: sushi, active: false, visible: true }
    ],

    gamification: {
        coins: 101,
        avatar: {
            userAvatars: [0],
            selectedAvatar: 0,
        },
        badge: {
            userBadges: [0],
            selectedBadge: 0,
        },
        levelExp: 250,
    },


    avatar_list: [
        { image: apple, cost: 0 },
        { image: banana, cost: 10 },
        { image: cherries, cost: 20 },
        { image: icecream, cost: 30 },
        { image: lemon, cost: 100 },
        { image: pear, cost: 30 },
        { image: pineapple, cost: 100 },
        { image: strawberry, cost: 100 },
        { image: watermelon, cost: 100 }
    ],

    badge_list: [
        { image: signedUp },
        { image: capitan20 },
        { image: firstOrder },
        { image: firstOrder2 },
        { image: greedy },
        { image: king },
        { image: mexican },
        { image: mostPopular },
        { image: pizzaKing },
        { image: playTogether },
        { image: spendthrift },
        { image: topClient }
    ],

    missions: [
        {
            title: 'Iscriviti!',
            description: `Effettua l'iscrizione a Beije Delivery!`,
            exp: 100,
            claim: false,
            beijeCoin: 7,
            badge: null
        },
        {
            title: 'Mangia con noi',
            description: 'Effettua il primo ordine',
            exp: 0,
            claim: false,
            beijeCoin: 0,
            badge: 3
        },
        {
            title: 'Special One',
            description: 'Effettua almeno un ordine dalla special week',
            exp: 300,
            claim: null,
            beijeCoin: 7,
            badge: null
        },
        {
            title: 'Giochiamo/ insieme',
            description: 'Fai una partita ad un minigame',
            exp: 100,
            claim: null,
            beijeCoin: 3,
            badge: null
        },
        {
            title: 'Spendaccione',
            description: 'Compra almeno un avatar premium',
            exp: 200,
            claim: null,
            beijeCoin: 5,
            badge: null
        },
        {
            title: 'Capitano 20',
            description: 'Spendi almeno 20 euro per un ordine',
            exp: 300,
            claim: null,
            beijeCoin: 10,
            badge: null
        },
        {
            title: 'King',
            description: 'Ordina da tre categorie diverse',
            exp: 500,
            claim: null,
            beijeCoin: 15,
            badge: null
        },

    ],
    userOrders: [
        {
            title: "Creuza de mä",
            description: `14/10/21`,
            cost: 10.5,
        },
        {
            title: 'La taverna',
            description: '10/10/21',
            cost: 15.1,
        },
        {
            title: 'Los Pollos Hermanos',
            description: '02/10/21',
            cost: 27.99,
        },
        {
            title: 'La fiera della panza',
            description: '27/09/21',
            cost: 10.70,
        },
        {
            title: 'Carne di dubbia',
            description: '23/09/21',
            cost: 22.00,
        },
        {
            title: 'Provenienza',
            description: '07/09/21',
            cost: 50.80,

        },
        {
            title: 'Il postaccio',
            description: '22/08/21',
            cost: 20.30,
        }
    ]
}

export default properties