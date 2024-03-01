import headerAD from '../assets/landingPageHeader.webp'
import Carousel from '../components/CarouselComponent.jsx';
import FavoriteMenu from '../components/FavoriteMenuComponent.jsx';
import '../styles/landingpage.css'
import MomenBahagia from '../components/MomenBahagiaComponent.jsx';
import Navbar from '../components/NavbarComponent.jsx';
import Promo from './PromoPage.jsx'

const LandingPage = () => {


    return (
        <div>
            <Carousel/>
            <Promo/>
            <FavoriteMenu/>
            <MomenBahagia/>
        </div>

    );
}

export default LandingPage;