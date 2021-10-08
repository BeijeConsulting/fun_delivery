export const TRANSLATIONS_BACKOFFICE = {
    screens: {
        login: {
            partner: "Vuoi diventare un nostro partner?",
            title: "Accedi al tuo ristorante",
            forgot_password: "Password dimenticata?",
            register_now: "Registrati ora",
            error: "Email o password errati"
        },

        registration: {
            title: "Registra il tuo ristorante",
            your_data: "I tuoi dati",
            your_restaurant: "Il tuo ristorante",
        },
        my_orders:{
            your_orders: "I tuoi ordini",
            number_of_order: "Ordine #" 
        }
    },

    components: {
        button: {
            login: "ACCEDI",
            register: "REGISTRATI"
        },
        inputbox: {
            restaurant_name: "Nome ristorante",
            vat: "P.IVA",
        }
    },

    useful_constants: {
        restaurant_categories: {
            title_component: 'Categorie',
            pizza: 'Pizza',
            poke: 'Pokè',
            sushi: 'Sushi',
            mexican: 'Messicano',
            italian: 'Italiano',
            hamburger: 'Hamburger',
            other: 'Altro'
        },
        countries: {
            titleComponent: "Paese",
            italy: "Italia",
            england: "Inghilterra"
        },
        order_status: {
            all: "Tutti",
            completed: "🟢 Completato",
            delivering: "🟡 In consegna",
            preparing: "🟠 In preparazione",
            confirmed: "🔵 Confermato",
            rejected: "🔴 Rifiutato",
            error: "Errore"
        }

    }
}