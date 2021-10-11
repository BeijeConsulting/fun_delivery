// Plate categories images
import Primi from '../assets/images/primi.png'
import Secondi from '../assets/images/secondi.jfif'
import Contorni from '../assets/images/contorni.jpg'
import Dessert from '../assets/images/dessert.png'
import Panini from '../assets/images/hamburger.jpg'
import Pizze from '../assets/images/pizza2.png'
import Messicano from '../assets/images/messicano.jpg'
import Poke from '../assets/images/poke.jpg'
import Sushi from '../assets/images/sushi.png'
import Altro from '../assets/images/altro.jpg'
import Carbonara from '../assets/images/carbonara.jpg'
// import Profile from '../screens/profile/Profile'
const localStorageData = {
    restaurant_categories: [
        {
            id: 1,
            name: 'Pizza',
        },
        {
            id: 2,
            name: 'Pokè'
        },
        {
            id: 3,
            name: 'Sushi'
        },
        {
            id: 4,
            name: 'Messicano'
        },
        {
            id: 5,
            name: 'Italiano'
        },
        {
            id: 6,
            name: 'Hamburger'
        },
        {
            id: 7,
            name: 'Altro'
        }
    ],
    plate_categories: [
        {
            id: 1,
            name: 'Primi',
            img_path: Primi
        },
        {
            id: 2,
            name: 'Secondi',
            img_path: Secondi
        },
        {
            id: 3,
            name: 'Contorni',
            img_path: Contorni
        },
        {
            id: 4,
            name: 'Dessert',
            img_path: Dessert
        },
        {
            id: 5,
            name: 'Panini',
            img_path: Panini
        },
        {
            id: 6,
            name: 'Pizze',
            img_path: Pizze
        },
        {
            id: 7,
            name: 'Messicani',
            img_path: Messicano
        },
        {
            id: 8,
            name: 'Pokè',
            img_path: Poke
        },
        {
            id: 9,
            name: 'Sushi',
            img_path: Sushi
        },
        {
            id: 10,
            name: 'Altro',
            img_path: Altro
        }
    ],
    plate_list: [
        {
            id: 1,
            plate_img: Carbonara,
            plate_name: 'Spaghetti alla carbonara',
            plate_description: 'Il piatto più buono',
            plate_price: 15,
            plate_category_id: 1,
            plate_visibility: true
        },
        {
            id: 2,
            plate_img: Primi,
            plate_name: 'Spaghetti al Pesto',
            plate_description: 'Il piatto più buono',
            plate_price: 12,
            plate_category_id: 1,
            plate_visibility: true
        },
        {
            id: 3,
            plate_img: Secondi,
            plate_name: 'Bistecca',
            plate_description: 'Il piatto più buono',
            plate_price: 32.3,
            plate_category_id: 2,
            plate_visibility: true
        },
        {
            id: 4,
            plate_img: Contorni,
            plate_name: 'Insalata',
            plate_description: 'Il piatto più buono',
            plate_price: 10,
            plate_category_id: 3,
            plate_visibility: true
        },
        {
            id: 5,
            plate_img: Dessert,
            plate_name: 'Torta',
            plate_description: 'Il piatto più buono',
            plate_price: 6,
            plate_category_id: 4,
            plate_visibility: true
        },
        {
            id: 6,
            plate_img: Panini,
            plate_name: 'Panino al salame',
            plate_description: 'Il piatto più buono',
            plate_price: 5,
            plate_category_id: 5,
            plate_visibility: true
        },
        {
            id: 7,
            plate_img: Pizze,
            plate_name: 'Margherita',
            plate_description: 'Il piatto più buono',
            plate_price: 7,
            plate_category_id: 6,
            plate_visibility: true
        },
        {
            id: 8,
            plate_img: Messicano,
            plate_name: 'Tacos',
            plate_description: 'Il piatto più buono',
            plate_price: 8,
            plate_category_id: 7,
            plate_visibility: true
        },
        {
            id: 9,
            plate_img: Poke,
            plate_name: 'Poke',
            plate_description: 'Il Poke più buono',
            plate_price: 9,
            plate_category_id: 8,
            plate_visibility: true
        },
        {
            id: 10,
            plate_img: Sushi,
            plate_name: 'Sushi',
            plate_description: 'Il piatto più buono',
            plate_price: 17,
            plate_category_id: 9,
            plate_visibility: true
        },
        {
            id: 11,
            plate_img: Altro,
            plate_name: 'Vermi fritti',
            plate_description: 'Il piatto più buono',
            plate_price: 0,
            plate_category_id: 10,
            plate_visibility: true
        }
    ],
    profile: {
        name: "Nome_Ristoratore",
        last_name: "Cognome_Ristoratore",
        email: "mail@mail.com",
        restaurant_name: "Bangladesh food",
        address: {
            street: "via ssadad",
            city: "città",
            cap: "57031",
            country: "IT"
        },
        VAT: "3578923578325782",
        phone_number: "23487248923",
        restaurant_category_id: 1,
        restaurant_logo: "una immagine di default",
        restaurant_description: "description",
        restaurant_discount: 0.5,
        restaurant_free_shipping: 0
    }

};

export default localStorageData;