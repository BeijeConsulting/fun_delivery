// Plate categories images
import Primi from '../../assets/images/primi.png'
import Secondi from '../../assets/images/secondi.jfif'
import Contorni from '../../assets/images/contorni.jpg'
import Dessert from '../../assets/images/dessert.png'
import Panini from '../../assets/images/hamburger.jpg'
import Pizze from '../../assets/images/pizza2.png'
import Piedine from '../../assets/images/messicano.jpg'
import Poke from '../../assets/images/poke.jpg'
import Sushi from '../../assets/images/sushi.png'
import Altro from '../../assets/images/altro.jpg'

const localStorageData = {
    restaurant_categories: [
        {
            id: 1,
            name: 'Pizza' 
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
            name: 'Contorni' 
        },
        {
            id: 4,
            name: 'Dessert' 
        },
        {
            id: 5,
            name: 'Panini' 
        },
        {
            id: 6,
            name: 'Pizze' 
        },
        {
            id: 7,
            name: 'Messicani' 
        },
        {
            id: 8,
            name: 'Pokè' 
        },
        {
            id: 9,
            name: 'Sushi' 
        },
        {
            id: 10,
            name: 'Altro' 
        }
    ]
};

export default localStorageData;