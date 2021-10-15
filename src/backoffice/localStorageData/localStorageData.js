// Plate categories images
import Primi from "../assets/images/primi.png";
import Secondi from "../assets/images/secondi.jfif";
import Contorni from "../assets/images/contorni.jpg";
import Dessert from "../assets/images/dessert.png";
import Panini from "../assets/images/hamburger.jpg";
import Pizze from "../assets/images/pizza2.png";
import Messicano from "../assets/images/messicano.jpg";
import Poke from "../assets/images/poke.jpg";
import Sushi from "../assets/images/sushi.png";
import Altro from "../assets/images/altro.jpg";
import Carbonara from "../assets/images/carbonara.jpg";
import moment from "moment";
import i18n from "../../common/localization/i18n";
import constantsDictionary from '../../common/utils/constantsDictionary'

// import Profile from '../screens/profile/Profile'
const localStorageData = {
  restaurant_categories: [{
      id: 1,
      name: constantsDictionary.RESTAURANT_CATEGORIES.pizza,
    },
    {
      id: 2,
      name: constantsDictionary.RESTAURANT_CATEGORIES.poke,
    },
    {
      id: 3,
      name: constantsDictionary.RESTAURANT_CATEGORIES.sushi,
    },
    {
      id: 4,
      name: constantsDictionary.RESTAURANT_CATEGORIES.mexican,
    },
    {
      id: 5,
      name: constantsDictionary.RESTAURANT_CATEGORIES.italian,
    },
    {
      id: 6,
      name: constantsDictionary.RESTAURANT_CATEGORIES.hamburger,
    },
    {
      id: 7,
      name: constantsDictionary.RESTAURANT_CATEGORIES.other,
    },
  ],
  plate_categories: [{
      id: 1,
      name: constantsDictionary.MY_MENU_CATEGORIES.first_course,
      img_path: Primi,
    },
    {
      id: 2,
      name: constantsDictionary.MY_MENU_CATEGORIES.second_course,
      img_path: Secondi,
    },
    {
      id: 3,
      name: constantsDictionary.MY_MENU_CATEGORIES.side_dish,
      img_path: Contorni,
    },
    {
      id: 4,
      name: "Dessert",
      img_path: Dessert,
    },
    {
      id: 5,
      name: constantsDictionary.MY_MENU_CATEGORIES.sandwiches,
      img_path: Panini,
    },
    {
      id: 6,
      name: "Pizza",
      img_path: Pizze,
    },
    {
      id: 7,
      name: constantsDictionary.MY_MENU_CATEGORIES.mexican,
      img_path: Messicano,
    },
    {
      id: 8,
      name: "Pokè",
      img_path: Poke,
    },
    {
      id: 9,
      name: "Sushi",
      img_path: Sushi,
    },
    {
      id: 10,
      name: constantsDictionary.MY_MENU_CATEGORIES.other,
      img_path: Altro,
    },
  ],
  countries:[
    {
      country_name: constantsDictionary.COUNTRIES.italy,
      country_id: 1
    },
    {
      country_name: constantsDictionary.COUNTRIES.england,
      country_id: 2
    }
  ],
  plate_list: [
    {
      id: 1,
      plate_img: Carbonara,
      plate_name: "Spaghetti alla carbonara",
      plate_description: "Il piatto più buono",
      plate_price: 15,
      plate_category_id: 1,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 2,
      plate_img: Primi,
      plate_name: "Spaghetti al Pesto",
      plate_description: "Il piatto più buono",
      plate_price: 12,
      plate_category_id: 1,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 3,
      plate_img: Secondi,
      plate_name: "Bistecca",
      plate_description: "Il piatto più buono",
      plate_price: 32.3,
      plate_category_id: 2,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 4,
      plate_img: Contorni,
      plate_name: "Insalata",
      plate_description: "Il piatto più buono",
      plate_price: 10,
      plate_category_id: 3,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 5,
      plate_img: Dessert,
      plate_name: "Torta",
      plate_description: "Il piatto più buono",
      plate_price: 6,
      plate_category_id: 4,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 6,
      plate_img: Panini,
      plate_name: "Panino al salame",
      plate_description: "Il piatto più buono",
      plate_price: 5,
      plate_category_id: 5,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 7,
      plate_img: Pizze,
      plate_name: "Margherita",
      plate_description: "Il piatto più buono",
      plate_price: 7,
      plate_category_id: 6,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 8,
      plate_img: Messicano,
      plate_name: "Tacos",
      plate_description: "Il piatto più buono",
      plate_price: 8,
      plate_category_id: 7,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 9,
      plate_img: Poke,
      plate_name: "Poke",
      plate_description: "Il Poke più buono",
      plate_price: 9,
      plate_category_id: 8,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 10,
      plate_img: Sushi,
      plate_name: "Sushi",
      plate_description: "Il piatto più buono",
      plate_price: 17,
      plate_category_id: 9,
      plate_visibility: true,
      quantity:0,
    },
    {
      id: 11,
      plate_img: Altro,
      plate_name: "Vermi fritti",
      plate_description: "Il piatto più buono",
      plate_price: 0,
      plate_category_id: 10,
      plate_visibility: true,
      quantity:0,
    },
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
      country: "IT",
    },
    VAT: "3578923578325782",
    phone_number: "23487248923",
    restaurant_category_id: 1,
    restaurant_logo: "una immagine di default",
    restaurant_description: "description",
    restaurant_discount: 0.5,
    restaurant_free_shipping: 0,
  },
  order_list: [{
      order_id: 34225,
      date: moment("2021-10-13T23:40:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Antonino Rossi",
      customer_address: "Una via a Firenze",
      ordered: [{
          nameFood: "Margherita",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Napoli",
          price: 6,
          quantity: 2,
        },
        {
          nameFood: "Coca cola",
          price: 2.5,
          quantity: 2,
        },
      ],
      status: "approved",
    },
    {
      order_id: 34221,
      date: moment("2021-10-12T19:47:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Marco Brambilla",
      customer_address: "Una via a Milano",
      ordered: [{
          nameFood: "Margherita",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Napoli",
          price: 6,
          quantity: 2,
        },
        {
          nameFood: "Coca cola",
          price: 2.5,
          quantity: 2,
        },
      ],
      status: "completed",
    },
    {
      order_id: 34220,
      date: moment("2021-10-12T20:47:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Lorenzo Chiesa",
      customer_address: "Una via all'Elba",
      ordered: [{
          nameFood: "Margherita",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Napoli",
          price: 6,
          quantity: 2,
        },
        {
          nameFood: "Coca cola",
          price: 2.5,
          quantity: 2,
        },
      ],
      status: "completed",
    },
    {
      order_id: 34229,
      date: moment("2021-10-12T20:47:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Lorenzo Chiesa",
      customer_address: "Una via all'Elba",
      ordered: [{
          nameFood: "Margherita",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Napoli",
          price: 6,
          quantity: 2,
        },
        {
          nameFood: "Coca cola",
          price: 2.5,
          quantity: 2,
        },
      ],
      status: "pending",
    },
    {
      order_id: 34230,
      date: moment("2021-10-12T20:47:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Simone Micalizzi",
      customer_address: "Una via a Palermo",
      ordered: [{
          nameFood: "Romana",
          price: 5,
          quantity: 1,
        },
        {
          nameFood: "Capricciosa",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Sprite",
          price: 2.5,
          quantity: 1,
        },
      ],
      status: "pending",
    },
    {
      order_id: 34224,
      date: moment("2021-10-11T21:35:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Simone Micalizzi",
      customer_address: "Una via a Palermo",
      ordered: [{
          nameFood: "Margherita",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Napoli",
          price: 6,
          quantity: 2,
        },
        {
          nameFood: "Coca cola",
          price: 2.5,
          quantity: 1,
        },
      ],
      status: "rejected",
    },
    {
      order_id: 34223,
      date: moment("2021-10-10T20:05:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Enrico Paolazzi",
      customer_address: "Una via a Ferrara",
      ordered: [{
          nameFood: "Margherita",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Napoli",
          price: 10,
          quantity: 2,
        },
        {
          nameFood: "Coca cola",
          price: 2,
          quantity: 5,
        },
      ],
      status: "delivering",
    },
    {
      order_id: 34222,
      date: moment("2021-10-18T21:00:00+0000").format(i18n.t('common.formats.date')),
      customer_name: "Calogero Messina",
      customer_address: "Una via a Caltanissetta",
      ordered: [{
          nameFood: "Margherita",
          price: 6,
          quantity: 1,
        },
        {
          nameFood: "Napoli",
          price: 6,
          quantity: 2,
        },
        {
          nameFood: "Coca cola",
          price: 2.5,
          quantity: 2,
        },
      ],
      status: "preparing",
    },
  ],
};

export default localStorageData;