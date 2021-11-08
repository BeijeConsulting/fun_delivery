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
import Poke from '../../assets/images/poke.png'
import Sushi from '../../assets/images/sushi.png'


/* HOOKS */
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useHistory } from "react-router"


//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//i18n
import { useTranslation } from 'react-i18next';
import Navbar from "../../components/ui/navbar/Navbar"




const Restaurants = (props) => {

    const { t, i18n } = useTranslation()

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);


    //DATA
    const objectRestaurantsForListReference = [
        {
            name: "Nino u Ballerino",
            category: "hamburger",
            free_shipping: 0, // non è gratuito
            restaurant_logo: imagePaniniCaMeusa,
            rating: 4.5,
            delivery_time: "35-45 min",
            number_orders: 200,
            price_range: 1
        },
        {
            name: "Da Ciro",
            category: "pizza",
            free_shipping: 1, //è gratuito
            restaurant_logo: imagePaniniCaMeusa,
            rating: 5,
            delivery_time: "15-35 min",
            number_orders: 150,
            price_range: 1
        },
        {
            name: "La Pokentona",
            category: "poke",
            free_shipping: 0, // non è gratuito
            restaurant_logo: imagePaniniCaMeusa,
            rating: 3.5,
            delivery_time: "35-45 min",
            number_orders: 20,
            price_range: 3
        },
        {
            name: "Sacro Romano Impero",
            category: "italian",
            free_shipping: 0, // non è gratuito
            restaurant_logo: imagePaniniCaMeusa,
            rating: 4,
            delivery_time: "20-30 min",
            number_orders: 50,
            price_range: 2
        },
        {
            name: "Profumi di mare",
            category: "sushi",
            free_shipping: 1, // non è gratuito
            restaurant_logo: imagePaniniCaMeusa,
            rating: 5,
            delivery_time: "35-45 min",
            number_orders: 300,
            price_range: 4
        },
    ]

    //STATE
    const [state, setState] = useState({
        isSideToggle: false,
        objectRestaurantsForList: objectRestaurantsForListReference,
        objectRestaurantsForTrend: objectRestaurantsForListReference
    })

    //USEEFFECT
    useEffect(() => {
        let orderedRestaurants = []
        orderedRestaurants = orderBy(state.objectRestaurantsForList, ['number_orders'], ['desc'])
        orderedRestaurants = orderedRestaurants.slice(0, 3)
        setState({
            ...state,
            objectRestaurantsForTrend: orderedRestaurants
        })


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


    const orderByRestaurants = (e) => {
        let orderedRestaurants = []
        e.target.value === "delivery_time" ? orderedRestaurants = orderBy(state.objectRestaurantsForList, [e.target.value], ['asc'])
            : orderedRestaurants = orderBy(state.objectRestaurantsForList, [e.target.value], ['desc'])
        setState({
            ...state,
            objectRestaurantsForList: orderedRestaurants
        })
    }

    const filterByRestaurants = (e) => {
        let filteredRestaurants = []
        isNaN(e.target.value) ? filteredRestaurants = filter(objectRestaurantsForListReference, { 'category': e.target.value })
            : filteredRestaurants = filter(objectRestaurantsForListReference, { 'price_range': parseInt(e.target.value) })
        setState({
            ...state,
            objectRestaurantsForList: filteredRestaurants
        })
    }

    const filterByDeliveryRestaurants = (e) => {
        let filteredRestaurants = []
        isNaN(e.target.value) ? filteredRestaurants = objectRestaurantsForListReference : filteredRestaurants = filter(objectRestaurantsForListReference, { 'free_shipping': parseInt(e.target.value) })
        setState({
            ...state,
            objectRestaurantsForList: filteredRestaurants
        })
    }

    const clearFilters = () => {
        setState({
            ...state,
            objectRestaurantsForList: objectRestaurantsForListReference
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

    const goToMenu = () => {
        props.history.push('/menuRestaurant')
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
                        <IconCategories value={"hamburger"} icon={Burger} caption={"Hamburger"} callback={filterByRestaurants} />
                        <IconCategories value={"italian"} icon={Italian} caption={"Italian"} callback={filterByRestaurants} />
                        <IconCategories value={"mexican"} icon={Mexican} caption={"Mexican"} callback={filterByRestaurants} />
                        <IconCategories value={"pizza"} icon={Pizza} caption={"Pizza"} callback={filterByRestaurants} />
                        <IconCategories value={"poke"} icon={Poke} caption={"Poke"} callback={filterByRestaurants} />
                        <IconCategories value={"sushi"} icon={Sushi} caption={"Sushi"} callback={filterByRestaurants} />
                    </div>
                    <button className='fe-btn-goTo' onClick={scrollMeTo}>{t('frontend.screens.restaurants.chose')}</button>
                </section>

                <section className='fe-restaurants-section-two'>

                    <SidebarRestaurants
                        callbackElementRadio={orderByRestaurants}
                        callbackButton={filterByRestaurants}
                        callbackClearButton={clearFilters}
                        callbackElementRadioDelivery={filterByDeliveryRestaurants}
                        className={state.isSideToggle ? 'sideNav-toggleOn' : 'sideNav'}
                    />
                    <div className='fe-restaurants-wrapper'>
                        <button className='fe-btn-side-toggler' onClick={sideToggle}>Filters</button>

                        <div className='trendRestaurants'>
                            <h2 className='fe-trend-title'>{t('frontend.screens.restaurants.trend')}</h2>
                            <div className="fe-restaurants-container row-one">
                                {state.objectRestaurantsForTrend.map((item, key) => {
                                    return (
                                        <SingleRestaurant
                                            key={key}
                                            image={item.restaurant_logo}
                                            restaurantName={item.name}
                                            restaurantRating={item.rating}
                                            restaurantShipping={item.free_shipping}
                                            restaurantDeliveryTime={item.delivery_time}
                                            classNameWrapper="fe-img-wrapper"
                                            classNameImage="imageSingleRestaurant"
                                            callback={goToMenu}
                                        />
                                    )
                                })}
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
                                            image={item.restaurant_logo}
                                            restaurantName={item.name}
                                            restaurantRating={item.rating}
                                            restaurantShipping={item.free_shipping}
                                            restaurantDeliveryTime={item.delivery_time}
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

export default Restaurants;