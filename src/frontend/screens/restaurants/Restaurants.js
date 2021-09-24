import React from "react";
import "./Restaurants.css";
class Restaurants extends React.Component {

    render() {

        return (

            <main className="mainContainerRestaurants">
                <aside className="sideNav">
                    <h3>Tutti i locali</h3>
                    <div className="orderBy">
                        <h4>Ordina</h4>
                        <ul>
                            <li>Ordina</li>
                            <li>Più popolare</li>
                            <li>Valutazione</li>
                            <li>Orario di consegna</li>
                        </ul>
                    </div>
                    <div className="priceOrder">
                        <h4>Fascia di prezzo</h4>
                        <ul>
                            <li>Symbol 1</li>
                            <li>Symbol 2</li>
                            <li>Symbol 3</li>
                            <li>Symbol 4</li>
                        </ul>
                    </div>
                </aside>
                <div className="restaurantsListContainer">
                    <div className="restaurantsList">
                        <ul>
                            <li>Elemento 1</li>
                            <li>Elemento 2</li>
                            <li>Elemento 3</li>
                            <li>Elemento 4</li>
                        </ul>
                    </div>
                </div>
            </main>
        )
    }

}

export default Restaurants;