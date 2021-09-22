# FUN DELIVERY

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:   

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.    

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`    

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Test Backoffice
just a test for branches



# 

# Back Office

## Introduction

Il Back Office si occupa della realizzazione del pannello d'amministrazione che aiuta i Ristoratori a gestire l'intero processo in un unico luogo, la dashboard.

Questo processo riguarda principalmente:

- Gestione delle informazioni del ristorante ;
- Gestione dei piatti e del menù ;
- Gestione degli ordini e notifiche.

## Struttura delle pagine

- Login
- Forgot Password
- Registrazione
- Profilo
- Il tuo Menù
    - Visualizza lista piatti
    - Aggiungi piatto
    - Visualizza/Modifica piatto
- Ordini
    - Singolo ordine
- In arrivo

## Mappa del sito
![Questa è la mappa del sito](src\common\docs\schema_navigazione_back_office.png)


## Struttura dati e campi per singole pagine

### Login:		
- email(‘email’)
- Password(‘password’)

        data = {
            email: ‘mail@mail.com’,
	        password: ‘password’
        };


### Registrazione
- email 				(‘email’)	     
- Password 			    (‘password’)	        	
- Conferma Password	    (‘confirm_password’) 
- Nome Persona		    (‘name’)
- Cognome Persona 		(‘last_name’)
- Nome Ristorante		(‘restaurant_name’)	
- Indirizzo			    (‘address.street’)
- Città				    (‘address.city)
- Cap				    (‘address.cap)
- Stato				    (‘address.state)
- Partita Iva			(‘VAT’)
- Telefono			    (‘phone_number’)
- Categoria Ristorante	(‘restaurant_category’)

        data = {
            email: ‘mail@mail.com’,
	        password: ‘password’,
	        name: ‘nome’,
	        last_name: ‘cognome’,
	        restaurant_name: ‘nome ristorante’,
            address: {
		        street: ‘via ssadad’,
                city: ‘città’,	
                cap: ‘57031’,
                state: ‘IT’
            },
            VAT: “3578923578325782”,
	        phone_number: “23487248923”,
	        restaurant_category:”ristorante bangladino”
        }

### Forgot Password
- email				(‘email’)	
- Password			(‘password’)	
- Conferma Password	(‘confirm_password’)

        data = {
            email: ‘mail@mail.com’,
	        password: ‘password’
        }

### Profilo Ristorante (modalità modif)
- Nome Ristoratore  ('name')
- Cognome           ('surname')
- email             ('email')       
- Nome Ristorante	(‘restaurant_name’)	
- Indirizzo			(‘address.street’)
- Città				(‘address.city')
- Cap				(‘address.cap')
- Stato				(‘address.state')
- Partita Iva			(‘VAT’)
- Telefono			(‘phone_number’)
- Categoria Ristorante	(‘restaurant_category’)
- Logo ristorante		(‘restaurant_logo’)
- Orari di apertura		('restaurant_opening_hours')
- Descrizione	(‘restaurant_description’)
- Discount ('restaurant_discount') (dal 10% al 50%)
- Free Shipping ('restaurant_free_shipping') (0, 1)

        data: {
            name:'Nome_Ristoratore'
            surname:'Cognome_Ristoratore'
            email:'mail@mail.com'
            restaurant_name: “Bangladesh food”,
            address: {
                street: ‘via ssadad’,
                city: ‘città’,	
                cap: ‘57031’,
                state: ‘IT’
            },
            VAT: “3578923578325782”,
            phone_number: “23487248923”,
            restaurant_category:”ristorante bangladino”
            restaurant_logo: “una immagine di default”,
            restaurant_opening_hours: {
                monday: {
                    from: '9.00',
                    to: '18.00'
                },
                tuesday: {
                    from: '9.00',
                    to: '18.00'
                },
                wednesday: {
                    from: '9.00',
                    to: '18.00'
                },
                thursday: {
                    from: '9.00',
                    to: '18.00'
                },
                friday: {
                    from: '9.00',
                    to: '18.00'
                },
                saturday: {
                    from: '9.00',
                    to: '18.00'
                },
                sunday: {
                    from: '9.00',
                    to: '18.00'
                },
            },
            restaurant_description: ‘description’,
            restaurant_discount: 0.5,
            restaurant_free_shipping: 0
        }

### Pagina nuovo piatto
- Immagine piatto   		(‘plate_img’) 
- Nome piatto			(‘plate_name’)
- Descrizione			(‘plate_description’)
- Prezzo			(‘plate_price’)
- Categoria piatto		(‘plate_category’)

        data = {
          plate_img: ‘https://blablabla.jpg’,
			plate_name: ‘Spaghetti alla carbonara’,
			plate_description: ‘Il piatto più buono’,
			plate_price: 32.3,
			plate_category: ’primo’,
        }


### Pagina singolo piatto 
- Immagine piatto   		(‘plate_img’) 
- Nome piatto			(‘plate_name’)
- Descrizione			(‘plate_description’)
- Prezzo			(‘plate_price’)
- Categoria piatto		(‘plate_category’)

        data: {
			plate_img: 'https://blablabla.jpg'  
			plate_name: ‘Spaghetti alla carbonara’,
			plate_description: ‘Il piatto più buono’,
			plate_price: 32.3,
			plate_category: ’primo’,
        }



