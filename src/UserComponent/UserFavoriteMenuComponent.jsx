import useFetch from "./UserUseFetchComponent";
import UserUseFetch from "./UserUseFetchComponent";
import { useEffect } from "react";
import '../styles/favoritemenu.css'
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import UserMenuList from "./UserMenuList";


const UserFavoriteMenuComponent = () => {
    
    useEffect(() => {
        AOS.init()
    }, [])

    const { data: menus } = UserUseFetch("http://localhost:3040/menus")
    return (
        <div className="favorite-container" data-aos="fade-up">
            <h1 className="favorite-title">Menu Favorit</h1>
            {menus && <UserMenuList isFavorite="true" menus={menus.filter((menu) => menu.isFavorite === true)}/>}
            <Link to="/usermenulist">
                <button className="view-all-button">View All Menus</button>
            </Link>

        </div>
    );
}

export default UserFavoriteMenuComponent;