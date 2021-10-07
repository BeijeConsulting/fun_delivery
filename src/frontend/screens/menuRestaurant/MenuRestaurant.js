import React from 'react'
import './MenuRestaurant.css'
import SingleRestaurant from '../../components/classComponents/singleRestaurant/SingleRestaurant'
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png"
import SinglePlate from '../../components/funcComponents/singlePlate/SinglePlate'
export default class MenuRestaurant extends React.Component {
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

        ]

        this.objectPlate = [

            {
                name: "PaneGrana",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '10€',
            },
            {
                name: "PaneGrana",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '10€',
            },
            {
                name: "PaneGrana",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '10€',
            },
            {
                name: "Tagliere",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '11€',
            },
            {
                name: "Tagliere",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Primo pesce",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "primi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Primo carne",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "primi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Secondo 1",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "secondi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Secondo 2",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "secondi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Dolce 1",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "dolci",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Dolce 2",
                description: 'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s.',
                category: "dolci",
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

    // categoryFilter =  (category) => {
    //     let arrFilter = category ? this.objectPlate.filter((item) => {
    //         return (
    //             item.category === category
    //         ) 
    //     }) : this.objectPlate
    //     console.log(arrFilter)
    //     this.setState({
    //         objectPlate: arrFilter
    //     })
    // }


    render() {
        return <div className='containerMenu'>
            <div className='headerCenter'>




                <div className='headerRestaurant'>


                    <div className='namePricePlate'>
                        <h2 className='nameRestPlate'>Nome Ristorante</h2>
                        <p className='priceRestPlate'>Costo 1.90€ . 30-40 min  . 4.5 </p>
                    </div>
                </div>
            </div>

            <div className='infoPlate'>
                <p style={{ fontWeight: '600', fontSize: '25px' }}>Pizza 🍕</p>
                <p style={{ marginTop: '-20px' }}>Via da Cacacas 22 Milano (MI)</p>
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
                    <h2 className='trendPlate'>Antipasti</h2>
                    <div className="plateMenuContainer">
                        {/* mapping che dipende dal risultato della ricerca*/}
                        {/* tendenza */}

                        {this.objectPlate.filter((item) => {
                            return (
                                item.category === "antipasti"
                            )
                        }
                        ).map((item, key) => {
                            return (
                                <SinglePlate key={key} image={item.platePic} descriptPlate={item.description} plateName={item.name} platePrice={item.price} classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                            )
                        })}



                    </div>
                </div>

                <h2 className='trendPlate'>Primi</h2>
                {/* tutti */}
                <div className='plateMenuContainer'>
                    {this.objectPlate.filter((item) => {
                        return (
                            item.category === "primi"
                        )
                    }
                    ).map((item, key) => {
                        return (
                            <SinglePlate key={key} image={item.platePic} descriptPlate={item.description} plateName={item.name} platePrice={item.price} classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='trendPlate'>Secondi</h2>
                {/* tutti */}
                <div className='plateMenuContainer'>
                    {this.objectPlate.filter((item) => {
                        return (
                            item.category === "secondi"
                        )
                    }
                    ).map((item, key) => {
                        return (
                            <SinglePlate key={key} image={item.platePic} descriptPlate={item.description} plateName={item.name} platePrice={item.price} classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='trendPlate'>Dolci</h2>
                {/* tutti */}
                <div className='plateMenuContainer'>
                    {this.objectPlate.filter((item) => {
                        return (
                            item.category === "dolci"
                        )
                    }
                    ).map((item, key) => {
                        return (
                            <SinglePlate key={key} image={item.platePic} descriptPlate={item.description} plateName={item.name} platePrice={item.price} classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='trendPlate'>Scelte per te</h2>
                {/* tutti */}
                <div className='plateMenuContainer'>
                    {this.state.objectRestaurantsForList.map((item, key) => {
                        return (
                            <SinglePlate key={key} image={item.platePic} descriptPlate={item.description} plateName={item.name} platePrice={item.price} classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                        )
                    })}
                </div>
            </div>

        </div>


    }
}