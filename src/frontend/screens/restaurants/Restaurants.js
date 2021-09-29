import React from "react";
import "./Restaurants.css";
import SingleRestaurant from "../../components/classComponents/singleRestaurant/SingleRestaurant";
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png";
import SidebarRestaurants from "../../components/classComponents/sidebarRestaurants/SidebarRestaurants";
class Restaurants extends React.Component {
    constructor(props){
        super(props)
        
        this.objectRestaurantsForList= [
            {
                name: "Nino u Ballerino",
                free_shipping: 0, // non è gratuito
                restaurant_logo: imagePaniniCaMeusa,
                rating: 4.5,
                delivery_time: "35-45 min"
            },
            {
                name: "Da Ciro",
                free_shipping: 1, //è gratuito
                restaurant_logo: imagePaniniCaMeusa,
                rating: 5,
                delivery_time: "15-35 min"
            },
            {
                name: "La Polentona",
                free_shipping: 0, // non è gratuito
                restaurant_logo: imagePaniniCaMeusa,
                rating: 3.5,
                delivery_time: "35-45 min"
            },
            {
                name: "Sacro Romano Impero",
                free_shipping: 0, // non è gratuito
                restaurant_logo: imagePaniniCaMeusa,
                rating: 4,
                delivery_time: "20-30 min"
            },
            {
                name: "Profumi di mare",
                free_shipping: 1, // non è gratuito
                restaurant_logo: imagePaniniCaMeusa,
                rating: 5,
                delivery_time: "35-45 min"
            },
        ]
        console.log(this.objectRestaurantsForList)
    }
    render() {

        return (
            <main className="mainContainerRestaurants">
                <SidebarRestaurants />
                <div className="restaurantsListContainer">
                    {/* mapping che dipende dal risultato della ricerca*/}
                    {this.objectRestaurantsForList.map((item, key) => {
                        console.log(item.free_shipping)
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