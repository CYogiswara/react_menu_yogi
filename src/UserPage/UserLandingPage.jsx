import headerAD from '../assets/landingPageHeader.webp'
import Carousel from '../components/CarouselComponent.jsx';
import FavoriteMenu from '../components/FavoriteMenuComponent.jsx';
import '../styles/landingpage.css'
import MomenBahagia from '../components/MomenBahagiaComponent.jsx';
import Navbar from '../components/NavbarComponent.jsx';
import Promo from '../components/MainPromoComponent.jsx'
import Locations from '../components/Locations.jsx';
import UserNavbar from '../UserComponent/UserNavbar.jsx';
import UserFavoriteMenuComponent from '../UserComponent/UserFavoriteMenuComponent.jsx';

const UserLandingPage = () => {


    return (
        <div>
            <UserNavbar/>
            <Carousel/>
            <Promo/>
            <UserFavoriteMenuComponent/>
            <MomenBahagia/>
            <Locations/>
        </div>

    );
}

export default UserLandingPage;