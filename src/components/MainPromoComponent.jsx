import { Link } from "react-router-dom";
import Promo from "./PromoListComponent";
import '../styles/mainpromo.css'

const PromoPage = () => {
    return (<div>
        <Promo />
        <div  className="btn-container-promo">
            <Link to="/promolist">
                <button className="view-all-promo">View All Promo</button>
            </Link>
        </div>
    </div>);
}

export default PromoPage;