import LogoBeije from '../assets/images/logo_beijeRosa.png';
const localStorageRestaurants = {
    restaurant_list: [
        {
            id: 1,
            firstName: 'Calogero',
            lastName: 'Messina',
            email: 'calo@mail.com',
            password: 'CalogerO1.',            
            restaurant_name: 'Pizzeria da Calo',
            address: {
                street: 'Via Manzoni 2',
                city: 'Caltanissetta',
                cap: 93100,
                country_id: 1,
            },
            VAT: 11111111111,
            phone_number: 3336098765,
            restaurant_category_id: 4,
            description: 'La pizzeria che fa per te',
            profile_img: LogoBeije,
            discount_id: 1,
            coins: 300,
            restaurant_free_shipping: false,
            sponsor: null,
        },
        {
            id: 2,
            firstName: 'Enrico',
            lastName: 'Paolazzi',
            email: 'paol@email.com',
            password: 'Enri_1998',
            restaurant_name: 'Pizza da Enrico',
            address: {
                street: 'via Roma 8',
                city: 'Ferrara',
                cap: 44121,
                country_id: 2,
            },
            VAT: 86334519757,
            phone_number: 3338889510,
            restaurant_category_id: 2,
            description: 'La pizzeria più buona',
            profile_img: LogoBeije,
            discount_id: 1,
            coins: 300,
            restaurant_free_shipping: true,
            sponsor: null,
        }
    ],
    discounts: [
        {
            id: 1,
            dicount_value: 0.1,
            label: '10%'
        },
        {
            id: 2,
            dicount_value: 0.2,
            label: '20%'
        },
        {
            id: 3,
            dicount_value: 0.3,
            label: '30%'
        }       
    ]
}

export default localStorageRestaurants