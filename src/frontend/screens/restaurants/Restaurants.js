import React from "react"
import "./Restaurants.css"
import SingleRestaurant from "../../components/classComponents/singleRestaurant/SingleRestaurant"
import SidebarRestaurants from "../../components/classComponents/sidebarRestaurants/SidebarRestaurants"
import IconCategories from "../../components/funcComponents/iconCategories/IconCategories"
import orderBy from "lodash/orderBy"
import filter from "lodash/filter"
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png"
import Burger from '../../assets/images/burger.png'
import Italian from '../../assets/images/italian.png'
import Mexican from '../../assets/images/mexican.png'
import Pizza from '../../assets/images/pizza.png'
import Altro from '../../assets/images/altro.png'
import Poke from '../../assets/images/poke.png'
import Sushi from '../../assets/images/sushi.png'
import {setRestaurantId} from '../../../common/redux/duck/restaurantIdDuck'

/* HOOKS */
import { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router"


//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//i18n
import { useTranslation } from 'react-i18next';
import Navbar from "../../components/ui/navbar/Navbar"


import genericServices from "../../../common/utils/genericServices"
import properties from "../../../common/utils/properties"
import { get as _get } from 'lodash';
import { connect } from "react-redux"
import { ConsoleSqlOutlined } from "@ant-design/icons"

const Restaurants = (props) => {

    const { t, i18n } = useTranslation()

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);


   

    //STATE
    const [state, setState] = useState({
        isSideToggle: false,
        objectRestaurantsForList: [],
        objectRestaurantsForTrend: [],
        objectRestaurantsForList: [],
        categoriesRestaurants: [],
        restaurantsData: []
    })

    //USEEFFECT
    useEffect(() => {

        showApi()
        console.log(state.restaurantsData, 'RESDATA')
    
        /* gsap */
        const element = ref.current;
        const title = element.querySelector('.fe-title-main');
        const sectionTrend = element.querySelector('.fe-trend-title')
        const sectionNear = element.querySelector('.fe-near-title')
        const restaurantsRowOne = element.querySelectorAll('.row-one .imageSingleRestaurant');
        const restaurantsRowTwo = element.querySelectorAll('.row-two .imageSingleRestaurant');


        //scroll trigger rules
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTrend,
                //markers : true,
                start: 'top 75%'
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionNear,
                //markers : true,
                start: 'top 75%'
            }
        })

        tl.from(restaurantsRowOne, { y: -50, opacity: 0, stagger: 0.300, duration: 1.5, ease: 'back' })
        tl2.from(restaurantsRowTwo, { y: -50, opacity: 0, stagger: 0.300, duration: 1.5, ease: 'back' })

        gsap.fromTo(title, { opacity: 0, scale: 0.2, y: -20, }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "none", })

    }, []) //componentDidMount    


    const orderByRestaurants = async (e) => {

        properties.GENERIC_SERVICE = new genericServices();
        let orderedRestaurants = await properties.GENERIC_SERVICE.apiGET('/restaurants/r', props.tokenDuck.token)
        let statusCode = _get(orderedRestaurants, "status", null)
        let userRole = _get(orderedRestaurants, "permission", null)
        console.log(orderedRestaurants, 'orderedRestaurants')
        if (statusCode === 401 || userRole === "restaurant") {
            console.log('error')
        }

        else {
            setState({
                ...state,
                objectRestaurantsForList: orderedRestaurants
            })

        }



        // let orderedRestaurants = []
        // e.target.value === "averageReview" ? orderedRestaurants = orderBy(state.restaurantsData, "averageReview", 'desc') : orderedRestaurants = orderBy(state.restaurantsData, "averageReview", 'asc')
        // console.log(orderedRestaurants)

        // setState({
        //     ...state,
        //     objectRestaurantsForList: orderedRestaurants
        // })

    }



    // const filterByRestaurants = (e) => {
    //     let filteredRestaurants = []
    //     isNaN(e.target.value) ? filteredRestaurants = filter(state.restaurantsData, { 'category': e.target.value })
    //         : filteredRestaurants = filter(state.restaurantsData, { 'averageReview': parseInt(e.target.value) })
    //     setState({
    //         ...state,
    //         objectRestaurantsForList: filteredRestaurants
    //     })
    //     console.log(e.target.value, ) 
    // }


    
    //FILTRA IN BASE ALLA REVIEW
    // const filterByDeliveryRestaurants = async (e) => {
    //     // let filteredRestaurants = []
    //     // e.value === true ? filteredRestaurants = state.restaurantsData : filteredRestaurants = filter(state.restaurantsData, { 'restaurantFreeShipping': e.value })
    //     // setState({
    //     //     ...state,
    //     //     objectRestaurantsForList: filteredRestaurants
    //     // })
    //     // console.log(e.value, 'gesu')
    //     properties.GENERIC_SERVICE = new genericServices();
    //     let orderedRestaurants = await properties.GENERIC_SERVICE.apiGET('/restaurants/r', props.tokenDuck.token)
    //     let statusCode = _get(orderedRestaurants, "status", null)
    //     let userRole = _get(orderedRestaurants, "permission", null)
    //     console.log(orderedRestaurants, 'orderedRestaurants')
    //     if (statusCode === 401 || userRole === "restaurant") {
    //         console.log('error')
    //     }

    //     else {
    //         setState({
    //             ...state,
    //             objectRestaurantsForList: orderedRestaurants
    //         })

    //     }

       
    
  
    // FILTRA RISTORANTI PER CATEGORIA
    const filterByRestaurants = async (e) => {
        
        properties.GENERIC_SERVICE = new genericServices();
        let orderedRestaurants = await properties.GENERIC_SERVICE.apiGET(`/restaurants/category/${e.target.value}`, props.tokenDuck.token)
        let statusCode = _get(orderedRestaurants, "status", null)
        let userRole = _get(orderedRestaurants, "permission", null)
        console.log(orderedRestaurants, 'orderedRestaurants')
        if (statusCode === 401 || userRole === "restaurant") {
            console.log('error')
        }

        else {
            
            if (e.target.value !== undefined){
                setState({
                    ...state,
                    objectRestaurantsForList: orderedRestaurants
                }) 
            } else {
                setState({
                    ...state,
                    objectRestaurantsForList: []
                })
            }
        
        }
    }

    // FILTRA RISTORANTI PER CONSEGNA GRATUITA

    const filterByDeliveryRestaurants = (e)=> {
        let filteredRestaurants = []
        if (e.name === 'free') {
            filteredRestaurants = filter(state.restaurantsData, { 'restaurantFreeShipping': true })
            
            
        } else if (e.name === 'pay') {
            console.log('pay')
            filteredRestaurants = state.restaurantsData
        }
        
        setState({
            ...state,
            objectRestaurantsForList: filteredRestaurants
        })
        console.log('resData', state.restaurantsData)
        
        
    }

    const clearFilters = () => {
        setState({
            ...state,
            objectRestaurantsForList: state.restaurantsData
        })
    }

    const scrollMeTo = () => {
        const element = ref.current;
        const sectionTwo = element.querySelector('.fe-restaurants-section-two')
        sectionTwo.scrollIntoView()
    }

    const sideToggle = () => {
        setState({
            ...state,
            isSideToggle: !state.isSideToggle
        })
    }

    const goToMenu = (e) => {

        let geus = props.dispatch(setRestaurantId(e.target.id))
        console.log('gesu', geus)
        console.log(e.target.id, 'id')
        props.history.push('/menuRestaurant' )
    }


    const showApi = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET('/platecategories', props.tokenDuck.token)
        let responseData = await properties.GENERIC_SERVICE.apiGET('/restaurants', props.tokenDuck.token)
        let statusCode = _get(response, "status", null)
        let userRole = _get(response, "permission", null)
        console.log(response, 'response')

        if (statusCode === 401 || userRole === "restaurant") {
            console.log('error')
        }

        else {
            // SOLO QUELLI CON SPONSOR ATTIVO IN TENDENZE
            let orderedRestaurants = []
            orderedRestaurants = filter(responseData, {"sponsorId" : 1})
            
            
            setState({
                ...state,
                categoriesRestaurants: response,
                restaurantsData: responseData,
                objectRestaurantsForTrend: orderedRestaurants,
                objectRestaurantsForList: responseData
            })
            console.log(responseData, 'ges')
            
        }

    }
    return (
        <>
            <Navbar />
            <main className="fe-main-screen-container" ref={ref}>
                <section className="fe-restaurants-section-one">
                    {/* JUMBO */}
                    <h1 className='fe-title-main'>{t('frontend.screens.restaurants.title')}</h1>
                    <div className='fe-restaurants-banner'>
                    </div>
                    {/* categorie */}
                    <h2 className='fe-categories-title'>{t('frontend.screens.restaurants.category')}</h2>

                    <div className='fe-categories-container'>
                        {
                            state.categoriesRestaurants &&

                            state.categoriesRestaurants.map((item, key) => {

                                return (
                                    <IconCategories key={key}
                                        label={item.name}
                                        value={item.id}
                                        icon={item.img}
                                        callback= {filterByRestaurants}
                                    />

                                )
                            })
                        }
                    </div>




                    {/* <div className='fe-categories-container'>
                        <IconCategories value={"hamburger"} icon={Burger} caption={"Hamburger"} callback={filterByRestaurants} />
                        <IconCategories value={"italian"} icon={Italian} caption={"Italian"} callback={filterByRestaurants} />
                        <IconCategories value={"mexican"} icon={Mexican} caption={"Mexican"} callback={filterByRestaurants} />
                        <IconCategories value={"pizza"} icon={Pizza} caption={"Pizza"} callback={filterByRestaurants} />
                        <IconCategories value={"poke"} icon={Poke} caption={"Poke"} callback={filterByRestaurants} />
                        <IconCategories value={"sushi"} icon={Sushi} caption={"Sushi"} callback={filterByRestaurants} />
                    </div> */}
                    <button className='fe-btn-goTo' onClick={scrollMeTo}>{t('frontend.screens.restaurants.chose')}</button>
                </section>

                <section className='fe-restaurants-section-two'>



                    <SidebarRestaurants
                        callbackElementRadio={orderByRestaurants}
                        // callbackButton={filterByRestaurants}
                        callbackClearButton={clearFilters}
                        callbackElementRadioDelivery={filterByDeliveryRestaurants}
                        className={state.isSideToggle ? 'sideNav-toggleOn' : 'sideNav'}
                    />
                    <div className='fe-restaurants-wrapper'>
                        <button className='fe-btn-side-toggler' onClick={sideToggle}>Filters</button>
                     

                        <div className='trendRestaurants'>
                            <h2 className='fe-trend-title'>{t('frontend.screens.restaurants.trend')}</h2>
                            <div className="fe-restaurants-container row-one">
                                {state.restaurantsData &&
                                state.objectRestaurantsForTrend.map((item, key) => {
                                    return (
                                        <SingleRestaurant
                                            key={key}
                                            restaurantId={item.id}
                                            image={imagePaniniCaMeusa}
                                            restaurantName={item.name}
                                            restaurantRating={item.averageReview}
                                            restaurantShipping={item.restaurantFreeShipping}
                                            classNameWrapper="fe-img-wrapper"
                                            classNameImage="imageSingleRestaurant"
                                            callback={goToMenu}
                                        />
                                    )
                                })
                                }

                               
                            </div>
                        </div>

                        <div className='nearbyRestaurants'>
                            <h2 className='fe-near-title'>{t('frontend.screens.restaurants.area')}</h2>
                            {/* tutti */}
                            <div className='fe-restaurants-container row-two'>
                                {state.objectRestaurantsForList.map((item, key) => {
                                    return (
                                        <SingleRestaurant
                                            key={key}
                                            image={imagePaniniCaMeusa}
                                            restaurantName={item.name}
                                            restaurantId={item.id}
                                            restaurantRating={item.averageReview}
                                            restaurantShipping={item.restaurantFreeShipping}
                                            classNameWrapper="fe-img-wrapper"
                                            classNameImage="imageSingleRestaurant"
                                            callback={goToMenu}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})


export default connect(mapStateToProps)(Restaurants);