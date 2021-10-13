import React from 'react'
import './MenuRestaurant.css'
import SingleRestaurant from '../../components/classComponents/singleRestaurant/SingleRestaurant'
import imagePaniniCaMeusa from "../../assets/images/imagePaniniCaMeusa.png"
import SinglePlate from '../../components/funcComponents/singlePlate/SinglePlate'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default class MenuRestaurant extends React.Component {
    constructor(props) {

        super(props)


        this.objectPlate = [

            {
                name: "PaneGrana",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '10€',
            },
            {
                name: "Patatine",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '10€',
            },
            {
                name: "Pizza",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '10€',
            },
            {
                name: "Mario",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '11€',
            },
            {
                name: "Tagliere",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "antipasti",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Primo pesce",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "primi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Primo carne",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "primi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Secondo 1",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "secondi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Secondo 2",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "secondi",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Dolce 1",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "dolci",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            },
            {
                name: "Dolce 2",
                description: 'Lorem Ipsum standard dummy text ever since the 1500s.',
                category: "dolci",
                platePic: imagePaniniCaMeusa,
                price: '12€',
            }
        ]

        this.scrollItem = [
            //SCROLL REF
            this.myRefAntipasti = React.createRef(),
            this.myRefDolce = React.createRef(),
            this.myRefScelti = React.createRef(),
            this.myRefPrimi = React.createRef(),
            this.myRefSecondi = React.createRef()]


        this.state = {
            objectPlate: this.objectPlate,
            isClick: false,
            order: []


        }

    }
    // FUNCTION SCROLL

    scrollAntipasti = () => {
        this.myRefAntipasti.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollScelti = () => {
        this.myRefScelti.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollDolce = () => {
        this.myRefDolce.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollPrimi = () => {
        this.myRefPrimi.current.scrollIntoView({ behavior: 'smooth' })
    }
    scrollSecondi = () => {
        this.myRefSecondi.current.scrollIntoView({ behavior: 'smooth' })
    }


    view = () => {
        this.setState({
            isClick: !this.state.isClick
        })
        console.log(this.state.isClick)
    }

    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }

    plateQuantity = (obj) => {
        let arrTemp = this.state.order
        console.log(obj.quantity);
        
    }

    render() {
        return <div className='containerMenu'>

            <div className='headerCenter'>
                {this.state.isClick &&
                    <div className='containerMODAL'></div>
                }



                <div className='headerRestaurant' data-aos="zoom-in">
                    <div className='namePricePlate'>
                        <h2 className='nameRestPlate'>Nome Ristorante</h2>
                        <p className='priceRestPlate'>Costo 1.90€ • 30-40 min  • 4.5 </p>
                    </div>
                    <div className='blurRestaurant'></div>

                </div>

            </div>


            <div className='infoPlate' data-aos="zoom-in">
                <p style={{ fontWeight: '600', fontSize: '25px' }}>Pizza 🍕</p>
                <p style={{ marginTop: '-20px' }} >Via da Cacacas 22 Milano (MI)</p>
            </div>
            <h2 style={{ marginLeft: '1%', fontSize: '30px', zIndex: '5' }} data-aos="fade-right">Scegli il tuo piatto!</h2>
            <div className='rowSidebar' data-aos="zoom-in">
                <button onClick={this.scrollAntipasti} ref={this.myRefAntipasti} className='voicePlate'> Antipasti </button>
                <button className='voicePlate' onClick={this.scrollPrimi} ref={this.myRefPrimi}> Primi </button>
                <button className='voicePlate' onClick={this.scrollSecondi} ref={this.myRefSecondi}> Secondi </button>
                <button className='voicePlate' onClick={this.scrollDolce} ref={this.myRefDolce}> Dolci </button>
                <button className='voicePlate' onClick={this.scrollScelti} ref={this.myRefScelti}> Scelte per te </button>

            </div>

            <div className='menuWrapper'>
                <div className='trendRestaurants'>
                    <h2 className='trendPlate' ref={this.myRefAntipasti} data-aos="fade-right">Antipasti</h2>
                    <div className="plateMenuContainer" data-aos="zoom-in">
                        {/* mapping che dipende dal risultato della ricerca*/}
                        {/* tendenza */}

                        {this.objectPlate.filter((item) => {
                            return (
                                item.category === "antipasti"
                            )
                        }
                        ).map((item, key) => {
                            return (
                                <SinglePlate
                                    key={key}
                                    image={item.platePic}
                                    descriptPlate={item.description}
                                    plateName={item.name}
                                    platePrice={item.price} 
                                    classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate"
                                    callback={this.plateQuantity}
                                />
                            )
                        })}



                    </div>
                </div>

                <h2 className='trendPlate' ref={this.myRefPrimi} data-aos="fade-right">Primi</h2>
                {/* tutti */}
                <div className='plateMenuContainer' data-aos="zoom-in">
                    {this.objectPlate.filter((item) => {
                        return (
                            item.category === "primi"
                        )
                    }
                    ).map((item, key) => {
                        return (
                            <SinglePlate 
                            key={key} 
                            image={item.platePic} 
                            descriptPlate={item.description} 
                            plateName={item.name} 
                            platePrice={item.price} 
                            classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='trendPlate' ref={this.myRefSecondi} data-aos="fade-right">Secondi</h2>
                {/* tutti */}
                <div className='plateMenuContainer' data-aos="zoom-in">
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
                <h2 className='trendPlate' ref={this.myRefDolce} data-aos="fade-right">Dolci</h2>
                {/* tutti */}
                <div className='plateMenuContainer' data-aos="fade-up">
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
                <h2 className='trendPlate' ref={this.myRefScelti} data-aos="fade-right">Scelte per te</h2>
                {/* tutti */}
                <div className='plateMenuContainer' data-aos="fade-up">
                    {this.state.objectPlate.map((item, key) => {
                        return (
                            <SinglePlate key={key} image={item.platePic} descriptPlate={item.description} plateName={item.name} platePrice={item.price} classNameWrapper="wrapperPlate" classNameImage="imageSinglePlate" />
                        )
                    })}
                </div>
            </div>

        </div>


    }
}