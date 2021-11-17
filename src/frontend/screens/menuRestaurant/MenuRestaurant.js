import React from 'react'
import './MenuRestaurant.css'
import SinglePlate from '../../components/funcComponents/singlePlate/SinglePlate'
import AOS from 'aos';
import { withTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import _ from 'lodash';
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
import Navbar from '../../components/ui/navbar/Navbar'
// import { createRef } from 'react/cjs/react.production.min'

import genericServices from "../../../common/utils/genericServices";
import properties from "../../../common/utils/properties";
import { get as _get } from 'lodash';
import { setToken } from "../../../common/redux/duck/tokenDuck";
import { connect } from "react-redux";




class MenuRestaurant extends React.Component {
    constructor(props) {

        super(props)



        /* DATA */
        // this.restaurant_categories = {
        //     1: 'Pizza',
        //     2: 'Pokè',
        //     3: 'Sushi',
        //     4: "Messicano",
        //     5: 'Italiano',
        //     6: 'Hamburger',
        //     7: 'Altro',
        //     8: 'Cinese'
        // }

        this.arrPlate_categories = [];
            // {
            //     id: 1,
            //     name: 'Primi',
            //     img_path: Primi
            // },
            // {
            //     id: 2,
            //     name: 'Secondi',
            //     img_path: Secondi
            // },
            // {
            //     id: 3,
            //     name: 'Contorni',
            //     img_path: Contorni
            // },
            // {
            //     id: 4,
            //     name: 'Dessert',
            //     img_path: Dessert
            // },
            // {
            //     id: 5,
            //     name: 'Panini',
            //     img_path: Panini
            // },
            // {
            //     id: 6,
            //     name: 'Pizze',
            //     img_path: Pizze
            // },
            // {
            //     id: 7,
            //     name: 'Messicani',
            //     img_path: Messicano
            // },
            // {
            //     id: 8,
            //     name: 'Pokè',
            //     img_path: Poke
            // },
            // {
            //     id: 9,
            //     name: 'Sushi',
            //     img_path: Sushi
            // },
            // {
            //     id: 10,
            //     name: 'Altro',
            //     img_path: Altro
            // },
        


        this.newPlateCategories = []
        // for (const iterator of this.arrPlate_categories) {
        //     this.newPlateCategories[iterator.id] = { name: iterator.name, img_path: iterator.name }
        // }
        
        // console.log(this.newPlateCategories, 'SDAD')
        // this.categoriesSet = new Set();
         this.categoriesArr = []
        // for (const key in this.newPlateCategories) {
        //     this.categoriesSet.add(this.newPlateCategories[key].name)
        // }
        // for (const iterator of this.categoriesSet) {
        //     this.categoriesArr.push(iterator);
        // }

        this.menuArray = [
            // {
            //     id: 1,
            //     plate_img: Primi,
            //     plate_name: 'Spaghetti alla carbonara',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 15,
            //     plate_category_id: 1,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 2,
            //     plate_img: Primi,
            //     plate_name: 'Spaghetti al Pesto',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 12,
            //     plate_category_id: 1,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 3,
            //     plate_img: Secondi,
            //     plate_name: 'Bistecca',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 32.3,
            //     plate_category_id: 2,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 4,
            //     plate_img: Contorni,
            //     plate_name: 'Insalata',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 10,
            //     plate_category_id: 3,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 5,
            //     plate_img: Dessert,
            //     plate_name: 'Torta',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 6,
            //     plate_category_id: 4,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 6,
            //     plate_img: Panini,
            //     plate_name: 'Panino al salame',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 5,
            //     plate_category_id: 5,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 7,
            //     plate_img: Pizze,
            //     plate_name: 'Margherita',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 7,
            //     plate_category_id: 6,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 8,
            //     plate_img: Messicano,
            //     plate_name: 'Tacos',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 8,
            //     plate_category_id: 7,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 9,
            //     plate_img: Poke,
            //     plate_name: 'Poke',
            //     plate_description: 'Il Poke più buono',
            //     plate_price: 9,
            //     plate_category_id: 8,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 10,
            //     plate_img: Sushi,
            //     plate_name: 'Sushi',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 17,
            //     plate_category_id: 9,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // },
            // {
            //     id: 11,
            //     plate_img: Altro,
            //     plate_name: 'Vermi fritti',
            //     plate_description: 'Il piatto più buono',
            //     plate_price: 0,
            //     plate_category_id: 10,
            //     plate_visibility: true,
            //     plate_quantity: 0
            // }
        ]
        /* END DATA */

        this.state = {
            menuArray: this.menuArray,
            isClick: false,
            totalPrice: 0,
            adressRestaurant: '',
            resturantInfo: '',
            restaurantName: '',
            filteredList: this.arrPlate_categories,
            categoryList: [],
            quantityCounter: 0,
            cartToggle: 'fe-menu-cart',
            recapOrder: [],
        }
    }

    // FUNCTION SCROLL


    view = () => {
        this.setState({
            isClick: !this.state.isClick
        })
        console.log(this.state.isClick)
    }

    async componentDidMount() {
        AOS.init({
            duration: 1000
        })
        // REF
        console.log()
        

        this.scrollOnTop()

        properties.GENERIC_SERVICE = new genericServices();
        
        let idRestaurant = this.props.restaurantIdDuck.restaurant_id
        let response = await properties.GENERIC_SERVICE.apiGET(`/platecategories/restaurant/${idRestaurant}`, this.props.tokenDuck.token)
        // NAME NON AUTH
        let responseName = await properties.GENERIC_SERVICE.apiGET(`/restaurant/info/${idRestaurant}`, this.props.tokenDuck.token)
        console.log(responseName, 'EEEE')
        let responsePlate = await properties.GENERIC_SERVICE.apiGET(`/plates/restaurant/${idRestaurant}`, this.props.tokenDuck.token)
        
        let statusCode = _get(response, "status", null)
        let userRole = _get(response, "permission", [])
        // AUTORIZZ?
        if (statusCode === 401 || userRole === "restaurant") {
            console.log('error')
        }
        else {
        
            this.arrPlate_categories = response
            this.newPlateCategories = this.arrPlate_categories.map((item) => {
                return item
            })
            console.log(this.newPlateCategories, 'di')
            this.categoriesSet = new Set();
            this.categoriesArr = []
            for (const key in this.newPlateCategories) {
                this.categoriesSet.add(this.newPlateCategories[key].name)
            }
            console.log(this.categoriesSet, 'Set')
            for (const iterator of this.categoriesSet) {
                this.categoriesArr.push(iterator);
            }
            console.log(this.categoriesArr, 'ARR')
            this.menuArray = responsePlate;
            console.log(this.menuArray ,' array')

            this.setState({
                categoryList: this.categoriesArr,
                restaurantName: responseName.name,
                restaurantInfo: responseName.city +  ' ' + ' • ' + responseName.averageReview + ' ⭐ ',
                adressRestaurant: responseName.address
                
            })
           

        }

        
    }

    
    scrollOnTop = () => {
        window.scrollTo(0, 0)
    }

    cartToggler = () => {
        this.setState({
            cartToggle: this.state.cartToggle === 'fe-menu-cart' ? 'fe-menu-cart-toggled-on' : 'fe-menu-cart',
        })
    }

    operatorSwitch = async(q, e) => {
        console.log('switch', e.target)
        
        await e.preventDefault()
        let currentTarget = e.target.value
        let currentName = e.target.name
        let currentPrice = e.target.price
        let findOrder = undefined

        console.log('price', currentPrice)
        let recapOrder = this.state.recapOrder

        if(recapOrder.length === 0){
            recapOrder.push({
                plateId: currentTarget,
                quantity: q,
                name: currentName,
                price: currentPrice
            })
        }
        else{
            findOrder = _.find(recapOrder, (item, key)=>{
                return item.plateId === currentTarget
                // console.log(item.plateId, 'plateId')
                
            })

            if(findOrder === undefined){
                recapOrder.push({
                    plateId: currentTarget,
                    quantity: q,
                    name: currentName,
                    price: currentPrice
                })
            }
            else{
                findOrder.quantity = q
            }
        }



        this.setState({
            recapOrder: findOrder === undefined?recapOrder:findOrder,
            quantityCounter: q

        })
        

    }
        
    

    goToFinalPage = async() => {
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiPOST('/order', JSON.stringify(this.state.recapOrder),this.props.tokenDuck.token )
        console.log(response, 'response')
        
        
        
        this.props.history.push('/orderConfirmed');
    }

    render() {
        const { t } = this.props

        console.log('recapOrder',this.state.recapOrder)
        return (
            <>
                <Navbar />
                <div className='fe-menu-page-wrapper'>
                    {/* BANNER */}
                    <div className='fe-menu-header-center'>
                        <div className='fe-menu-header-restaurant' data-aos="zoom-in">
                            <div className='fe-menu-info-container'>
                                <h2 className='fe-menu-restaurant-name'>{this.state.restaurantName}</h2>
                                <p className='fe-menu-restaurant-price'>{this.state.restaurantInfo}</p>
                            </div>
                            <div className='fe-menu-filter-blur'></div>
                        </div>

                    </div>

                    <div className='fe-menu-restaurant-address' data-aos="zoom-in">
                        {/* <p style={{ fontWeight: '600', fontSize: '25px' }}>Pizza 🍕</p> */}
                        <p style={{ marginTop: '' }} >{this.state.adressRestaurant}</p>
                    </div>
                    <h2 style={{ fontSize: '30px', zIndex: '5' }} data-aos="fade-right">{t('frontend.components.menu_restaurant.sombreroWeek')}</h2>
                    <div className='fe-menu-categories-picker' data-aos="">
                        {
                            this.state.categoryList.map((item, index) => {
                                return (
                                    <button key={index} className='voicePlate'>{item}</button>
                                )
                            })
                        }
                    </div>

                    {/* ALL CATEGORIES */}
                    <div className='fe-menu-wrapper'>

                        {/* CARRELLO */}

                        {/* TOGGLER del carrello nella media query */}
                        <div className='fe-menu-cart-toggler'>
                            <button onClick={this.cartToggler} >{this.state.cartToggle === 'fe-menu-cart' ? 'Vedi Carrello' : 'Torna al menu'}</button>
                            {this.state.cartToggle === 'fe-menu-cart-toggled-on' &&
                                <button
                                    style={{ backgroundColor: 'var(--primary-dark)', marginTop: '1rem' }}
                                    onClick={this.goToFinalPage}
                                >
                                    {t('frontend.components.goTo_checkout.check')}</button>}
                        </div>

                        {/* CARRELLO nella modalita` desktop */}
                        <div className={`${this.state.cartToggle}`}>
                            <h2 className={`fe-menu-cart-title`}>
                                {t('frontend.components.my_cart.cart')}
                            </h2>

                            {/* <div className='fe-menu-cart-content'>
                                {
                                    // item.plate_quantity > 0
                                    this.state.recapOrder.filter((item) => {
                                        return item
                                    }).map((item, index) => {
                                        console.log(item, 'item')
                                        return (
                                            <div className='fe-menu-cart-single' key={index} style={{ paddingBottom: '.3rem' }}>
                                                <span> {item.name}•{item.quantity} * {item.price}</span>
                                                <span>{(item.price).toFixed(2)}€</span>
                                            </div>
                                        )
                                    })
                                }
                            </div> */}


                            {this.state.totalPrice > 0 ? (
                                <div className=''>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
                                        <span style={{ fontWeight: 'bolder', fontSize: '18px', marginTop: '1rem' }}>TOTALE: </span>
                                        <span style={{ fontWeight: 'bolder', fontSize: '18px', marginTop: '1rem' }}>{this.state.totalPrice.toFixed(2)}€</span>

                                    </div>
                                    {this.state.cartToggle === 'fe-menu-cart' && <button className='fe-menu-cart-btn fe-menu-cart-media-btn' onClick={this.goToFinalPage}>{t('frontend.components.goTo_checkout.check')}</button>}
                                </div>) : <span style={{ color: 'lightgray' }}>{t('frontend.components.my_cart_empty.cartEmpty')}</span>
                            }
                        </div>


                        {/* ALL CATEGORIES */}
                        <div className='fe-menu-all-categories' >

                            {
                                this.categoriesArr.map((itemCategory, index) => {
                                    return (
                                        <div className='fe-menu-category-container' key={index}>
                                            <h2 className='fe-menu-category-title'
                                                data-aos="fade-right" >{itemCategory}</h2>
                                            <div className="fe-menu-plate-container">


                                                {this.menuArray
                                                    .filter((item) => { return (this.newPlateCategories[item.id] === itemCategory) }) &&

                                                    this.menuArray.map((item, key) => {
                                                        return (
                                                            <SinglePlate
                                                                key={key}
                                                                image={item.img}
                                                                descriptPlate={item.description}
                                                                plateName={item.name}
                                                                valueId={item.id}
                                                                platePrice={item.price}
                                                                // quantity={this.state.quantityCounter}
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
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})
export default connect(mapStateToProps)(withTranslation()(MenuRestaurant));