import React from 'react'
import './MenuRestaurant.css'
import SinglePlate from '../../components/funcComponents/singlePlate/SinglePlate'
import AOS from 'aos';
import { withTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import _, { concat } from 'lodash';
// Plate categories images

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




        this.arrPlate_categories = [];



        this.newPlateCategories = []

        this.categoriesArr = []

        this.menuArray = [

        ]


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
            console.log(this.menuArray, ' array')

            this.setState({
                categoryList: this.categoriesArr,
                restaurantName: responseName.name,
                restaurantInfo: responseName.city + ' ' + ' • ' + responseName.averageReview + ' ⭐ ',
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

    operatorSwitch = async (q, e) => {


        await e.preventDefault()
        let currentTarget = e.target.value
        let currentName = e.target.name
        let currentPrice = e.target.id

        let check = this.state.recapOrder


        check.push({
            plateId: currentTarget,
            quantity: q,
            name: currentName,
            price: currentPrice
        })

        for (let i = 0; i < check.length; i++) {
            if (check[i].plateId == currentTarget) {
                check[i].quantity = q
            }

        }



        let unique = _.uniqBy(check, "plateId");

        this.setState({
            recapOrder: unique,

        })
        this.calculateSum()
    }

    calculateSum = () => {

        let sum = 0
        for (let i = 0; i < this.state.recapOrder.length; i++) {
            sum += (this.state.recapOrder[i].quantity * Number(this.state.recapOrder[i].price))

        }
        this.setState({
            totalPrice: sum
        })

        console.log(sum, "sum")

    }

    goToFinalPage = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiPOST('/order', this.state.recapOrder, this.props.tokenDuck.token)
        console.log(response, 'response')



        this.props.history.push('/orderConfirmed');
    }

    render() {
        const { t } = this.props

        console.log('recapOrder', this.state.recapOrder)

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

                            {this.state.recapOrder.filter((item) => {
                                return item.quantity > 0
                            }).map((item, key) => {
                                return (
                                    <div key={key}>
                                        <p>Nome: {item.name}</p>
                                        <p>Quantità: {item.quantity}</p>
                                        <p>Prezzo: {item.price}</p>
                                        <hr></hr>
                                    </div>
                                )
                            })}


                            {this.state.totalPrice > 0 ? (
                                <div className=''>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
                                        <span style={{ fontWeight: 'bolder', fontSize: '18px', marginTop: '1rem' }}>TOTALE: </span>
                                        <span style={{ fontWeight: 'bolder', fontSize: '18px', marginTop: '1rem' }}>{this.state.totalPrice}€</span>

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
                                                                idPrice={item.price}
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