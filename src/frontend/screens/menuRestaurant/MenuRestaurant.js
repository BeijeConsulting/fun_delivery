import React from 'react'
import './MenuRestaurant.css'
import SingleRestaurant from '../../components/classComponents/singleRestaurant/SingleRestaurant'
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png"
import SinglePlate from '../../components/funcComponents/singlePlate/SinglePlate'
import AOS from 'aos';
import 'aos/dist/aos.css';
// Plate categories images
import Primi from '../../../backoffice/assets/images/primi.png'
import Secondi from '../../../backoffice/assets/images/secondi.jfif'
import Contorni from '../../../backoffice/assets/images/contorni.jpg'
import Dessert from '../../../backoffice/assets/images/dessert.png'
import Panini from '../../../backoffice/assets/images/hamburger.jpg'
import Pizze from '../../../backoffice/assets/images/pizza2.png'
import Messicano from '../../../backoffice/assets/images/messicano.jpg'
import Poke from '../../../backoffice/assets/images/poke.jpg'
import Sushi from '../../../backoffice/assets/images/sushi.png'
import Altro from '../../../backoffice/assets/images/altro.jpg'
import Carbonara from '../../../backoffice/assets/images/carbonara.jpg'
export default class MenuRestaurant extends React.Component {
    constructor(props) {

        super(props)
        

        this.restaurant_categories = {
            1: 'Pizza',
            2: 'Pokè',
            3: 'Sushi',
            4: "Messicano",
            5: 'Italiano',
            6: 'Hamburger',
            7: 'Altro',
        }
        this.arrPlate_categories = [
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
        ]

        this.newPlateCategories = {}
        for (const iterator of this.arrPlate_categories) {
            this.newPlateCategories[iterator.id] = {name: iterator.name, img_path : iterator.name}
        }
        console.log(this.newPlateCategories);

        
        this.categoriesSet = new Set();
        this.categoriesArr = []
        for (const key in this.newPlateCategories) {
            this.categoriesSet.add(this.newPlateCategories[key].name)
        }
        for (const iterator of this.categoriesSet) {
            this.categoriesArr.push(iterator);
        }
        
        this.menuArray = [
            {
                id: 1,
                plate_img: Primi,
                plate_name: 'Spaghetti alla carbonara',
                plate_description: 'Il piatto più buono',
                plate_price: 15,
                plate_category_id: 1,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 2,
                plate_img: Primi,
                plate_name: 'Spaghetti al Pesto',
                plate_description: 'Il piatto più buono',
                plate_price: 12,
                plate_category_id: 1,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 3,
                plate_img: Secondi,
                plate_name: 'Bistecca',
                plate_description: 'Il piatto più buono',
                plate_price: 32.3,
                plate_category_id: 2,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 4,
                plate_img: Contorni,
                plate_name: 'Insalata',
                plate_description: 'Il piatto più buono',
                plate_price: 10,
                plate_category_id: 3,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 5,
                plate_img: Dessert,
                plate_name: 'Torta',
                plate_description: 'Il piatto più buono',
                plate_price: 6,
                plate_category_id: 4,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 6,
                plate_img: Panini,
                plate_name: 'Panino al salame',
                plate_description: 'Il piatto più buono',
                plate_price: 5,
                plate_category_id: 5,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 7,
                plate_img: Pizze,
                plate_name: 'Margherita',
                plate_description: 'Il piatto più buono',
                plate_price: 7,
                plate_category_id: 6,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 8,
                plate_img: Messicano,
                plate_name: 'Tacos',
                plate_description: 'Il piatto più buono',
                plate_price: 8,
                plate_category_id: 7,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 9,
                plate_img: Poke,
                plate_name: 'Poke',
                plate_description: 'Il Poke più buono',
                plate_price: 9,
                plate_category_id: 8,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 10,
                plate_img: Sushi,
                plate_name: 'Sushi',
                plate_description: 'Il piatto più buono',
                plate_price: 17,
                plate_category_id: 9,
                plate_visibility: true,
                plate_quantity: 0
            },
            {
                id: 11,
                plate_img: Altro,
                plate_name: 'Vermi fritti',
                plate_description: 'Il piatto più buono',
                plate_price: 0,
                plate_category_id: 10,
                plate_visibility: true,
                plate_quantity: 0
            }
        ]

        this.scrollItem = [
            //SCROLL REF
            this.myRefAntipasti = React.createRef(),
            this.myRefDolce = React.createRef(),
            this.myRefScelti = React.createRef(),
            this.myRefPrimi = React.createRef(),
            this.myRefSecondi = React.createRef()
        ]

        this.state = {
            menuArray: this.menuArray,
            isClick: false,
            totalPrice: 0,
            cartToggle: 'fe-menu-cart',
        }

    }
    // FUNCTION SCROLL

    scrollAntipasti = () => {
        this.myRefAntipasti.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollScelti = () => {
        this.myRefScelti.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollDolce = () => {
        this.myRefDolce.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollPrimi = () => {
        this.myRefPrimi.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollSecondi = () => {
        this.myRefSecondi.current.scrollIntoView({ behavior: 'smooth' })
    }


    view = () => {
        this.setState({
            isClick: !this.state.isClick
        })
        console.log(this.state.isClick)
    }

    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }

    cartToggler = () => {
        this.setState({
            cartToggle: this.state.cartToggle === 'fe-menu-cart' ? 'fe-menu-cart-toggled-on' : 'fe-menu-cart',
        })
    }

    operatorSwitch = (e) => {
        let operator = e.target.getAttribute('operator')
        switch (operator) {
            case '+':
                this.add(e);
                break;
            case '-':
                this.remove(e);
            default:
                break;
        }
    }
    add = (e) => {
        let currentTarget = e.target.value
        let tempArr = this.state.menuArray;
        for (let i = 0; i < tempArr.length; i++) {
            const element = tempArr[i];
            if (element.plate_name === currentTarget) {
                this.setState({
                    menuArray: [...this.menuArray,
                    this.menuArray[i].plate_quantity++],
                    totalPrice: this.state.totalPrice + this.menuArray[i].plate_price
                })
            }
        }
    }
    remove = (e) => {
        let currentTarget = e.target.value
        let tempArr = this.state.menuArray;
        for (let i = 0; i < tempArr.length; i++) {
            const element = tempArr[i];

            if (element.plate_name === currentTarget) {
                if (element.plate_quantity == 0) { return; }
                this.setState({
                    menuArray: [...this.menuArray,
                    this.menuArray[i].quantity--],
                    totalPrice: this.state.totalPrice - this.menuArray[i].plate_price

                })
            }
        }
    }

    goToFinalPage = () => {
        localStorage.setItem('orderConfirmed', JSON.stringify(this.state.menuArray.filter(item => item.quantity > 0)));
        this.props.history.push('/orderConfirmed');
    }



    render() {
        return (

            <div className='fe-menu-page-wrapper'>
                {/* BANNER */}
                <div className='fe-menu-header-center'>
                    <div className='fe-menu-header-restaurant' data-aos="zoom-in">
                        <div className='fe-menu-info-container'>
                            <h2 className='fe-menu-restaurant-name'>Nome Ristorante</h2>
                            <p className='fe-menu-restaurant-price'>Costo 1.90€ • 30-40 min  • 4.5 </p>
                        </div>
                        <div className='fe-menu-filter-blur'></div>
                    </div>

                </div>

                <div className='fe-menu-restaurant-address' data-aos="zoom-in">
                    {/* <p style={{ fontWeight: '600', fontSize: '25px' }}>Pizza 🍕</p> */}
                    <p style={{ marginTop: '' }} >Via da Cacacas 22 Milano (MI)</p>
                </div>
                <h2 style={{ fontSize: '30px', zIndex: '5' }} data-aos="fade-right">Scegli il tuo piatto!</h2>
                <div className='fe-menu-categories-picker' data-aos="">
                    {/* DA AGGIUNGERE MAP DINAMICO CON LE CATEGORIE */}
                    <button onClick={this.scrollAntipasti} ref={this.myRefAntipasti} className='voicePlate'> Antipasti </button>
                    <button className='voicePlate' onClick={this.scrollPrimi} ref={this.myRefPrimi}> Primi </button>
                    <button className='voicePlate' onClick={this.scrollSecondi} ref={this.myRefSecondi}> Secondi </button>
                    <button className='voicePlate' onClick={this.scrollDolce} ref={this.myRefDolce}> Dolci </button>
                </div>

                {/* ALL CATEGORIES */}
                <div className='fe-menu-wrapper'>

                    {/* CARRELLO */}
                    <div className='fe-menu-cart-toggler'>
                        <button onClick={this.cartToggler} >{this.state.cartToggle === 'fe-menu-cart' ? 'Vedi Carrello' : 'Torna al menu'}</button>
                        {this.state.cartToggle === 'fe-menu-cart-toggled-on' &&
                            <button
                                style={{ backgroundColor: 'var(--primary-dark)', marginTop: '1rem' }}
                                onClick={this.goToFinalPage}
                            >
                                Vai alla cassa</button>}
                    </div>
                    <div className={`${this.state.cartToggle}`}>
                        <h2 className={`fe-menu-cart-title`}>Il mio Carrello</h2>

                        <div className='fe-menu-cart-content'>
                            {
                                this.state.menuArray.filter((item) => {
                                    return item.plate_quantity > 0
                                }).map((item, index) => {
                                    return (
                                        <div className='fe-menu-cart-single' key={index} style={{ paddingBottom: '.3rem' }}>
                                            <span>{item.plate_quantity} {item.plate_name}</span>
                                            <span>{item.plate_price * item.plate_quantity}€</span>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        {this.state.totalPrice > 0 ? (
                            <div className=''>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bolder', fontSize: '18px', marginTop: '1rem' }}>TOTALE: </span>
                                    <span style={{ fontWeight: 'bolder', fontSize: '18px', marginTop: '1rem' }}>{this.state.totalPrice}€</span>

                                </div>
                                {this.state.cartToggle === 'fe-menu-cart' && <button className='fe-menu-cart-btn' onClick={this.goToFinalPage}>Go to checkout</button>}
                            </div>) : <span style={{ color: 'lightgray' }}>Il tuo carrello e` vuoto</span>
                        }
                    </div>


                    {/* ANTIPASTI */}

                    {
                        this.categoriesArr.map((itemCategory, index) => {
                            return (
                                <div className='fe-menu-category-container'>
                                    <h2 className='fe-menu-category-title' ref={this.myRefAntipasti} data-aos="fade-right">{itemCategory}</h2>
                                    <div className="fe-menu-plate-container" data-aos="">

                                        {this.menuArray
                                            .filter((item) => { return (this.newPlateCategories[item.plate_category_id].name === itemCategory) })
                                            .map((item, key) => {
                                                return (
                                                    <SinglePlate
                                                        key={key}
                                                        image={item.plate_img}
                                                        descriptPlate={item.plate_description}
                                                        plateName={item.plate_name}
                                                        platePrice={item.plate_price}
                                                        quantity={item.plate_quantity}
                                                        counter={item.plate_quantity}
                                                        classNameWrapper="fe-menu-single-plate"
                                                        classNameImage="imageSinglePlate"
                                                        callbackHandler={this.operatorSwitch}
                                                    />
                                                )
                                            })}
                                    </div>
                                </div>
                            );
                        })
                    }



                    {/* da aggiungere il ref per salire al carrello*/}
                    <button
                        style={{ marginTop: '2rem' }}
                        className='fe-menu-cart-btn fe-menu-btn-bottom'>
                        Torna al carrello
                    </button>

                </div>

            </div>
        )
    }
}
