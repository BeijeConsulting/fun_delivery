export const TRANSLATIONS_BACKOFFICE = {
    screens: {
        common_screens: {
            order: "Ordine",
            address: "Indirizzo",
            visibility: "Visibilità"
        },
        login: {
            partner: "Vuoi diventare un nostro partner?",
            title: "Accedi al tuo ristorante",
            forgot_password: "Password dimenticata?",
            register_now: "Registrati ora",
            error: "Email o password errati"
        },
        forgot_password: {
            title: "Password dimenticata?",
            partner: "Sei già nostro partner?",
            login: 'Accedi ora.',
            error: "Email o password errati!"
        },
        registration: {
            title: "Registra il tuo ristorante",
            your_data: "I tuoi dati",
            your_restaurant: "Il tuo ristorante",
        },
        my_orders: {
            title: "I miei ordini",
            your_orders: "I tuoi ordini",
            number_of_order: "Ordine #",
            status: "Stato",
            show: "Visualizza"
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
            description: "Descrizione",
            discount: "SCONTO",
            total_before_discount: "TOTALE LORDO",
            total: "TOTALE",
            approve: "Approva",
            dont_approve: "Non approvare",
            rejected_title: "Ordine rifiutato"
        },
        single_plate: {
            title: "Piatto",
            save_plate: "Salva Piatto",
            delete_plate: "Elimina Piatto",
            edit_plate: "Modifica Piatto",
        },
        new_plate: {
            title: "Nuovo piatto",
            create_plate: "Crea il tuo piatto",
            dont_approve: "Non approvare",
            description: "Descrizione piatto"
        },
        my_menu: {
            title: "Il Tuo Menù",
        },
        profile: {
            profile: 'PROFILO',
            welcome: 'Benvenuto',
            edit_data: 'Modifica dati profilo',
            save_data: 'Salva dati profilo',
            your_data: 'I tuoi dati',
            free_shipping: 'Spedizione gratuita',
            first_name: 'Nome',
            last_name: 'Cognome',
            your_restaurant: 'Il tuo ristorante',
            restaurant_name: 'Nome ristorante',
            telephone: 'Telefono',
            address: 'Indirizzo',
            cap: 'CAP',
            state: 'Stato',
            city: 'Città',
            vat: 'P.IVA',
            categories: 'Categoria',
            discounts: 'Sconti',
            restaurant_description: 'Descrizione ristorante'
        },
        plates: {
            title: 'Lista Piatti',
            new_plate: 'Nuovo Piatto'
        }
    },
    components: {
        sidebar: {
            profile: 'Profilo',
            my_menu: 'Menu',
            my_orders: 'Ordini',
            incoming_orders: 'In arrivo'
        },
        button: {
            login: "ACCEDI",
            register: "REGISTRATI",
            logout: 'Esci'

        },
        inputbox: {
            restaurant_name: "Nome ristorante",
            vat: "P.IVA",
            confirm_password: "Conferma password",
            name_plate: "Nome del piatto",
            price: "Prezzo €"
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
        back: "Indietro"
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
        },
        my_menu_categories: {
            first_course: 'Primi',
            second_course: 'Secondi',
            sidedish: 'Cotorni',
            sandwich: 'Panini',
            mexican: 'Messicano',
            other: 'Altro'
        }
    }

}