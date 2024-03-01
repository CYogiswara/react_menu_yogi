import MenuList from "./MenuListComponent";
import useFetch from "./UseFetchComponent";
import { useEffect } from "react";
import '../styles/favoritemenu.css'
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'


const FavoriteMenu = () => {
    
    useEffect(() => {
        AOS.init()
    }, [])

    const { data: menus } = useFetch("http://localhost:3040/menus")
    return (
        <div className="favorite-container" data-aos="fade-up">
            {menus && <MenuList isFavorite="true" menus={menus.filter((menu) => menu.isFavorite === true)} title="Menu Favorit" />}
            <Link to="/menulist">
                <button className="view-all-button">View All Menus</button>
            </Link>

        </div>
    );
}

export default FavoriteMenu;