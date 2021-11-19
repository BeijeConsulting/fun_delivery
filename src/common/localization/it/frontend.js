export const TRANSLATIONS_FRONTEND = {
    screens: {
        order_confirmed: {
            title: 'Il tuo ordine sta arrivando!',
            step_one: 'In preparazione',
            step_one_description: 'Stiamo preparando il tuo ordine',
            step_two: 'Spedito',
            step_two_description: 'Il rider arriverà a breve',
            step_three: 'Consegnato',
            step_three_description: "L'ordine è stato consegnato"
        },
        loginUser: {
            title: "Accedi",
            forgot_password: "Password dimenticata?",
            register_now: "Registati ora",
        },
        registrationUser: {
            title: "Registrati"
        },
        forgot_password: {
            title: "Reimposta la tua password"
        },
        restaurants: {
            title:'Settimana del sombrero',
            category:'Categorie',
            chose:'Scegli il ristorante',
            trend:'Ristoranti in tendenza',
            area:'Ristoranti in zona'
        },

        landing_page:{
            title : "Fame?",
            titleFame: 'Si mangia!'
        }

    },

    components: {

        landing_page :{
            footer:{
                button:{
                    register:'Registrati',
                    login:'Accedi',
                    find:'Trova ristoranti'
                },
                paragraph:{
                    first:'Diventa partner di Beije Delivery',
                    second:'Sei già un nostro partner?',
                    third:'Seguici'
                },
               navbar:{
                   button:{
                       register:'Registrati',
                       login:'Accedi'
                   }
               }
            }
            
        },
        order_confirmed: {
            button: 'Gioca con noi',
            buttonBack: 'Torna indietro'
        },

        login_page: {
            button: {
                login: "ACCEDI",
                register: "REGISTRATI",
                forgot_psw: "MODIFICA"
            },
            login_placeholder: {
                username: 'Nome o Email',
                password: 'Password',
            },
            register_placeholder: {
                userName: "Nome",
                surname: "Cognome",
                email: "Email",
                phone: "Telefono",
                password: "Password",
                confpsw: "Conferma password",
            },
            forgot_placeholder: {
                email: 'email',
                password: 'password',
                confpsw: 'conferma password',
            },
            error_login: {
                email: 'Email non valida',
                password: 'Password non valida',
                email_password: 'Email e password non valide'
            },
            error_registration: {
                userName: 'Nome non valido',
                surname: 'Cognome non valido',
                email: 'Email non valida',
                phone: 'Numero non valido',
                password: 'Password non valida, deve contenere almeno 8 caratteri, un numero, un carattere speciale',
                confirm_password: 'Password non corrispondono',
                registration_accept: 'Registration effettuata',
            },
            error_forgot: {
                email: 'Email non valida',
                password: 'Password non valiida',
                confirm_password: 'Password non corrispondono',
                forgot_accept: "Password cambiata",
            }
        },
        menu_restaurant: {
            sombreroWeek: 'Settimana del sombrero'
        },
        my_cart: {
            cart : 'Il mio carrello'
        }, 
        my_cart_empty:{
            cartEmpty: 'Il tuo carrello è vuoto'
        },
        view_cart: {
            view : 'Vedi carrello'
        },
        goTo_checkout: {
            check : 'Vai alla cassa'
        }

    }
}
