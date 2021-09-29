import React from "react";
import "./Restaurants.css";
import SingleRestaurant from "../../components/classComponents/singleRestaurant/SingleRestaurant";
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png";
import SidebarRestaurants from "../../components/classComponents/sidebarRestaurants/SidebarRestaurants";
import orderBy from "lodash/orderBy";

class Restaurants extends React.Component {
    constructor(props){
        super(props)
        
        this.state={
            objectRestaurantsForList: 
            [
                {
                    name: "Nino u Ballerino",
                    free_shipping: 0, // non è gratuito
                    restaurant_logo: imagePaniniCaMeusa,
                    rating: 4.5,
                    delivery_time: "35-45 min",
                    number_orders: 200,
                    price_range: 1
                },
                {
                    name: "Da Ciro",
                    free_shipping: 1, //è gratuito
                    restaurant_logo: imagePaniniCaMeusa,
                    rating: 5,
                    delivery_time: "15-35 min",
                    number_orders: 150,
                    price_range: 1
                },
                {
                    name: "La Polentona",
                    free_shipping: 0, // non è gratuito
                    restaurant_logo: imagePaniniCaMeusa,
                    rating: 3.5,
                    delivery_time: "35-45 min",
                    number_orders: 20,
                    price_range: 2
                },
                {
                    name: "Sacro Romano Impero",
                    free_shipping: 0, // non è gratuito
                    restaurant_logo: imagePaniniCaMeusa,
                    rating: 4,
                    delivery_time: "20-30 min",
                    number_orders: 50,
                    price_range: 2
                },
                {
                    name: "Profumi di mare",
                    free_shipping: 1, // non è gratuito
                    restaurant_logo: imagePaniniCaMeusa,
                    rating: 5,
                    delivery_time: "35-45 min",
                    number_orders: 300,
                    price_range: 4
                },
            ]
        }
    }

    orderByRestaurants = (e) => {
        let orderedRestaurants = []
        console.log(e.target.value)
        e.target.value==="delivery_time" ? orderedRestaurants = orderBy(this.state.objectRestaurantsForList, [e.target.value], ['asc']) : orderedRestaurants = orderBy(this.state.objectRestaurantsForList, [e.target.value], ['desc'])
        console.log( e.target.value==="delivery_time" ? orderBy(this.state.objectRestaurantsForList, [e.target.value], ['asc']) : orderBy(this.state.objectRestaurantsForList, [e.target.value], ['desc']))
        this.setState({
            objectRestaurantsForList: orderedRestaurants
        })
    }

    render() {
        return (
            <main className="mainContainerRestaurants">
                <SidebarRestaurants callbackElementRadio={this.orderByRestaurants}/>
                <div className="restaurantsListContainer">
                    {/* mapping che dipende dal risultato della ricerca*/}
                    {this.state.objectRestaurantsForList.map((item, key) => {
                        return(
                          <SingleRestaurant key={key} image={item.restaurant_logo} restaurantName={item.name} restaurantRating={item.rating} restaurantShipping={item.free_shipping} restaurantDeliveryTime={item.delivery_time} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                        )
                    })}
                </div>
            </main>
        )
    }

}

export default Restaurants;