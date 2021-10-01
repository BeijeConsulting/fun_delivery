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

class Restaurants extends React.Component {
    constructor(props) {
        super(props)

        this.objectRestaurantsForListReference = [
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

        this.state = {
            objectRestaurantsForList: this.objectRestaurantsForListReference,
            objectRestaurantsForTrend: this.objectRestaurantsForListReference
        }
    }

    componentDidMount = () => {
        let orderedRestaurants = []
        orderedRestaurants = orderBy(this.state.objectRestaurantsForList, ['number_orders'], ['desc'])
        orderedRestaurants = orderedRestaurants.slice(0, 3)
        this.setState({
            objectRestaurantsForTrend: orderedRestaurants
        })
    }

    orderByRestaurants = (e) => {
        let orderedRestaurants = []
        e.target.value === "delivery_time" ? orderedRestaurants = orderBy(this.state.objectRestaurantsForList, [e.target.value], ['asc'])
            : orderedRestaurants = orderBy(this.state.objectRestaurantsForList, [e.target.value], ['desc'])
        this.setState({
            objectRestaurantsForList: orderedRestaurants
        })
    }

    filterByRestaurants = (e) => {
        let filteredRestaurants = []
        isNaN(e.target.value) ? filteredRestaurants = filter(this.objectRestaurantsForListReference, { 'category': e.target.value })
            : filteredRestaurants = filter(this.objectRestaurantsForListReference, { 'price_range': parseInt(e.target.value) })
        this.setState({
            objectRestaurantsForList: filteredRestaurants
        })
    }

    filterByDeliveryRestaurants = (e) => {
        let filteredRestaurants = []
        isNaN(e.target.value) ? filteredRestaurants = this.objectRestaurantsForListReference : filteredRestaurants = filter(this.objectRestaurantsForListReference, { 'free_shipping': parseInt(e.target.value) })
        this.setState({
            objectRestaurantsForList: filteredRestaurants
        })
    }

    clearFilters = () => {
        this.setState({
            objectRestaurantsForList: this.objectRestaurantsForListReference
        })
    }
    render() {
        return (
            <main className="mainContainerRestaurants">
                <div className="categoriesListContainer">
                    <header className='headerSombrero'></header>
                    <div className='orientedLeft'>
                        <h2 className='categoriesTitle'>Categorie</h2>
                    </div>
                    <section className='categoriesIcon'>
                        <IconCategories value={"fast_food"} icon={Burger} caption={"Fast food"} callback={this.filterByRestaurants} />
                        <IconCategories value={"italian"} icon={Italian}ù caption={"Italian"} callback={this.filterByRestaurants} />
                        <IconCategories value={"mexican"} icon={Mexican} caption={"Mexican"} callback={this.filterByRestaurants} />
                        <IconCategories value={"pizza"} icon={Pizza} caption={"Pizza"} callback={this.filterByRestaurants} />
                        <IconCategories value={"poke"} icon={Poke} caption={"Poke"} callback={this.filterByRestaurants} />
                        <IconCategories value={"sushi"} icon={Sushi} caption={"Sushi"} callback={this.filterByRestaurants} />
                    </section>
                    
                </div>

                
                <div className='row'>
                    <SidebarRestaurants callbackElementRadio={this.orderByRestaurants} callbackButton={this.filterByRestaurants} callbackClearButton={this.clearFilters} callbackElementRadioDelivery={this.filterByDeliveryRestaurants} />
                    <div className='restaurantsWrapper'>
                        <div className='trendRestaurants'> 
                            <h2 className='trendRist'>Ristoranti in tendenza</h2>
                            <div className="restaurantsListContainer">
                                {/* mapping che dipende dal risultato della ricerca*/}
                                {/* tendenza */}
                                {this.state.objectRestaurantsForTrend.map((item, key) => {
                                    return (
                                        <SingleRestaurant key={key} image={item.restaurant_logo} restaurantName={item.name} restaurantRating={item.rating} restaurantShipping={item.free_shipping} restaurantDeliveryTime={item.delivery_time} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                                    )
                                })}
                            </div>       
                        </div>
                        
                        <div className='nearbyRestaurants'> 
                            <h2 className='trendRist'>Ristoranti in zona</h2>
                            {/* tutti */}
                            <div className='restaurantsListContainer'>
                                {this.state.objectRestaurantsForList.map((item, key) => {
                                    return (
                                        <SingleRestaurant key={key} image={item.restaurant_logo} restaurantName={item.name} restaurantRating={item.rating} restaurantShipping={item.free_shipping} restaurantDeliveryTime={item.delivery_time} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}

export default Restaurants;