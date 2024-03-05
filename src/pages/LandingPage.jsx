import headerAD from '../assets/landingPageHeader.webp'
import Carousel from '../components/CarouselComponent.jsx';
import FavoriteMenu from '../components/FavoriteMenuComponent.jsx';
import '../styles/landingpage.css'
import MomenBahagia from '../components/MomenBahagiaComponent.jsx';
import Navbar from '../components/NavbarComponent.jsx';
import Promo from '../components/MainPromoComponent.jsx'
import Locations from '../components/Locations.jsx';

const LandingPage = () => {


    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Promo/>
            <FavoriteMenu/>
            <MomenBahagia/>
            <Locations/>
        </div>

    );
}

export default LandingPage;