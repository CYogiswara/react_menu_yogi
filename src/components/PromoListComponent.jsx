import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/promo.css'

const Promo = () => {

    const [promos, setPromos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3040/promo")
            .then((res) => res.json())
            .then((json) => setPromos(json))
    }, [])

    return (
        <div>
            <h1 className="promo-title">Promo Menarik</h1>
            <div className="promo-grid">
                {promos.map((diskon) => (
                    <div className="promo-container">
                        <div className="promo">
                            <Link to={`/promo/${diskon.id}`}>
                                <img src={diskon.img} alt="#"></img>
                                <h1 className="promo-content">{diskon.title}</h1>
                                <h3 className="promo-content">{diskon.desc}</h3>
                                <p className="promo-content">Berlaku Hingga {diskon.expired}</p>
                            </Link>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Promo