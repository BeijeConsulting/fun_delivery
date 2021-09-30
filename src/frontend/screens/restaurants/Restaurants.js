import React from "react";
import "./Restaurants.css";
import SingleRestaurant from "../../components/classComponents/singleRestaurant/SingleRestaurant";
import SidebarRestaurants from "../../components/classComponents/sidebarRestaurants/SidebarRestaurants";
import IconCategories from "../../components/funcComponents/iconCategories/IconCategories";
import orderBy from "lodash/orderBy";
import filter from "lodash/filter";
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png";
import Burger from '../../assets/images/burger.png'
import Chinese from '../../assets/images/chinese.png'
import Dessert from '../../assets/images/dessert.png'
import Pizza from '../../assets/images/pizza.png'
import Poke from '../../assets/images/poke.png'
import Sushi from '../../assets/images/sushi.png'

class Restaurants extends React.Component {
    constructor(props){
        super(props)
        
        this.objectRestaurantsForListReference = [
            {
                name: "Nino u Ballerino",
                category: "fast_food",
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
                category: "chinese",
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

        this.state={
            objectRestaurantsForList: this.objectRestaurantsForListReference,
        }
    }

    orderByRestaurants = (e) => {
        let orderedRestaurants = []
        e.target.value==="delivery_time" ? orderedRestaurants = orderBy(this.state.objectRestaurantsForList, [e.target.value], ['asc']) 
        : orderedRestaurants = orderBy(this.state.objectRestaurantsForList, [e.target.value], ['desc'])
        this.setState({
            objectRestaurantsForList: orderedRestaurants
        })
    }

    filterByRestaurants = (e) => {
        console.log(e.target.value)
        console.log(isNaN(e.target.value))
        let filteredRestaurants = []
        isNaN(e.target.value) ? filteredRestaurants = filter(this.objectRestaurantsForListReference, {'category': e.target.value}) 
        : filteredRestaurants = filter(this.objectRestaurantsForListReference, {'price_range': parseInt(e.target.value)})
        this.setState({
            objectRestaurantsForList: filteredRestaurants
        }) 
    }

    render() {
        return (
            <main className="mainContainerRestaurants">
                <div className="categoriesListContainer">
                    <header className='headerSombrero'></header>
                    <div className='orientedLeft'>
                        <h2 className='categoriesTitle'>Categories</h2>
                    </div>
                    <section className='categoriesIcon'>
                        <IconCategories value={"fast_food"} icon={Burger} callback={this.filterByRestaurants}/>
                        <IconCategories value={"chinese"} icon={Chinese} callback={this.filterByRestaurants}/>
                        <IconCategories value={"dessert"} icon={Dessert} callback={this.filterByRestaurants}/>
                        <IconCategories value={"pizza"} icon={Pizza} callback={this.filterByRestaurants}/>
                        <IconCategories value={"poke"} icon={Poke} callback={this.filterByRestaurants}/>
                        <IconCategories value={"sushi"} icon={Sushi} callback={this.filterByRestaurants}/>
                    </section>
                </div>
                <div className='row'> 
                <SidebarRestaurants callbackElementRadio={this.orderByRestaurants} callbackButton={this.filterByRestaurants}/>
                <div className="restaurantsListContainer">
                    {/* mapping che dipende dal risultato della ricerca*/}
                    {this.state.objectRestaurantsForList.map((item, key) => {
                        return(
                          <SingleRestaurant key={key} image={item.restaurant_logo} restaurantName={item.name} restaurantRating={item.rating} restaurantShipping={item.free_shipping} restaurantDeliveryTime={item.delivery_time} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                        )
                    })}
                </div>
                </div>
            </main>
        )
    }

}

export default Restaurants;