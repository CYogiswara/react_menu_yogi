import { Link } from "react-router-dom";
import Promo from "../components/PromoListComponent";

const PromoPage = () => {
    return ( <div>
        <Promo/>
        <Link to="/promolist">
            <button>VIew ALl</button>
        </Link>
    </div> );
}
 
export default PromoPage;