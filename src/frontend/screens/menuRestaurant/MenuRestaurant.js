import React from 'react'
import './MenuRestaurant.css'
import SingleRestaurant from '../../components/classComponents/singleRestaurant/SingleRestaurant'
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png"
import SinglePlate from '../../components/funcComponents/singlePlate/SinglePlate'
export default class MenuRestaurant extends React.Component
{
    constructor ( props )
    {
        super( props )

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

        ]

        this.objectPlate = [

            {
                name: "PaneGrana",
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '10€',
            },
            {
                name: "Tagliere",
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '11€',
            },
            {
                name: "Tagliere",
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Primo pesce",
                category: "primi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Primo carne",
                category: "primi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Primo",
                category: "primi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
           



        ]

        this.state = {
            objectRestaurantsForList: this.objectRestaurantsForListReference,
            objectRestaurantsForTrend: this.objectRestaurantsForListReference,
            objectPlate: this.objectPlate,
            isClick: false
        }
        console.log( this.objectPlate )
    }

    categoryFilter =  (category) => {
        let arrFilter = category ? this.objectPlate.filter((item) => {
            return (
                item.category === category
            ) 
        }) : this.objectPlate
        console.log(arrFilter)
        this.setState({
            objectPlate: arrFilter
        })
    }

    






    render ()
    {
        return <div className='containerMenu'>
            <div className='headerCenter'>




                <div className='headerRestaurant'>


                    <div className='namePrice'>
                        <h2 className='nameRest'>Nome Ristorante</h2>
                        <p className='priceRest'>Costo 1.90€ . 30-40 min  . 4.5 </p>
                    </div>
                </div>
            </div>

            <div className='infoRestaurant'>
                <p style={ { fontWeight: '600', fontSize: '25px' } }>Pizza 🍕</p>
                <p style={ { marginTop: '-20px' } }>Via da Cacacas 22 Milano (MI)</p>
            </div>
            <div className='rowSidebar'>
                <p className='voicePlate'> Antipasti </p>
                <p className='voicePlate'> Pan Bon </p>
                <p className='voicePlate'> Pizze classiche </p>
                <p className='voicePlate'> Pizze speciali </p>
                <p className='voicePlate'> Scelte per te </p>

            </div>
            <div className='menuWrapper'>
                <div className='trendRestaurants'>
                    <h2 className='trendRist'>Antipasti</h2>
                    <div className="restaurantsMenuContainer">
                        {/* mapping che dipende dal risultato della ricerca*/ }
                        {/* tendenza */ }
                        {this.categoryFilter('antipasti')}
                        {this.state.objectPlate.map((item,key)=> {
                            return (
                                <SinglePlate key={ key } image={ item.platePic } plateName={ item.name } platePrice={ item.price } classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                            )
                        })}
                        
                        
                            
                    </div>
                </div>

                <h2 className='trendRist'>Pan Bon</h2>
                {/* tutti */ }
                <div className='restaurantsMenuContainer'>
                    { this.state.objectRestaurantsForList.map( ( item, key ) =>
                    {
                        return (
                            <SingleRestaurant key={ key } image={ item.restaurant_logo } restaurantName={ item.name } restaurantRating={ item.rating } restaurantShipping={ item.free_shipping } restaurantDeliveryTime={ item.delivery_time } classNameWrapper="wrapperImage" classNameImage="imageSinglePlate" />
                        )
                    } ) }
                </div>
            </div>
            <div>
                <h2 className='trendRist'>Pizze classiche</h2>
                {/* tutti */ }
                <div className='restaurantsMenuContainer'>
                    { this.state.objectRestaurantsForList.map( ( item, key ) =>
                    {
                        return (
                            <SingleRestaurant key={ key } image={ item.restaurant_logo } restaurantName={ item.name } restaurantRating={ item.rating } restaurantShipping={ item.free_shipping } restaurantDeliveryTime={ item.delivery_time } classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                        )
                    } ) }
                </div>
            </div>
            <div>
                <h2 className='trendRist'>Pizze speciali</h2>
                {/* tutti */ }
                <div className='restaurantsMenuContainer'>
                    { this.state.objectRestaurantsForList.map( ( item, key ) =>
                    {
                        return (
                            <SingleRestaurant key={ key } image={ item.restaurant_logo } restaurantName={ item.name } restaurantRating={ item.rating } restaurantShipping={ item.free_shipping } restaurantDeliveryTime={ item.delivery_time } classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                        )
                    } ) }
                </div>
            </div>
            <div>
                <h2 className='trendRist'>Scelte per te</h2>
                {/* tutti */ }
                <div className='restaurantsMenuContainer'>
                    { this.state.objectRestaurantsForList.map( ( item, key ) =>
                    {
                        return (
                            <SingleRestaurant key={ key } image={ item.restaurant_logo } restaurantName={ item.name } restaurantRating={ item.rating } restaurantShipping={ item.free_shipping } restaurantDeliveryTime={ item.delivery_time } classNameWrapper="wrapperImage" classNameImage="imageSingleRestaurant" />
                        )
                    } ) }
                </div>
            </div>

        </div>


    }
}