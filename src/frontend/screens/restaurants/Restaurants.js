import React from "react";
import "./Restaurants.css";
import SingleRestaurant from "../../components/classComponents/singleRestaurant/SingleRestaurant";
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png";
import SidebarRestaurants from "../../components/classComponents/sidebarRestaurants/SidebarRestaurants";
class Restaurants extends React.Component {

    render() {

        return (

            <main className="mainContainerRestaurants">
                <SidebarRestaurants />
                <div className="restaurantsListContainer">
                    {/* mapping che dipende dal risultato della ricerca*/}
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                    <SingleRestaurant image={imagePaniniCaMeusa} classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                </div>
            </main>
        )
    }

}

export default Restaurants;