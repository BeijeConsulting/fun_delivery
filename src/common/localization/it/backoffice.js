export const TRANSLATIONS_BACKOFFICE = {
    screens: {
        common_screens: {
            order: "Ordine",
            address: "Indirizzo"
        },
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
        my_orders: {
            your_orders: "I tuoi ordini",
            number_of_order: "Ordine #",
            status: "Stato",
        },
        incoming_orders: {
            title: "Ordini in arrivo",
            ordered_text: "ha effettuato un ordine",
        },
        single_order: {
            ordered_food: "Cibo ordinato",
            customer_name: "Nome cliente",
            date: "Data",
            price: "Prezzo",
            quantity: "Quantità",
            total: "TOTALE",
            approve: "Approva",
            dont_approve: "Non approvare",
            rejected_title: "Ordine rifiutato"
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
        },
        timeline: {
            title: {
                approved: "Approvato",
                preparing: "In preparazione",
                delivering: "In consegna",
                delivered: "Consegnato",
            },
            confirm_to_continue: "Sei sicuro di continuare?",
            next_step: "Prossimo step",
            cancel: "Annulla",
            next: "Prossimo",
            complete_order: "Completa",
            success_message: "Ordine completato"
        },
        back : "Indietro"
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
            approved: "🟣 Approvato",
            completed: "🟢 Completato",
            delivering: "🟡 In consegna",
            preparing: "🟠 In preparazione",
            pending: "🔵 Da approvare",
            rejected: "🔴 Rifiutato",
            error: "Errore"
        }

    }
}