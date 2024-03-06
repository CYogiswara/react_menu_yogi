import MenuList from "../components/MenuListComponent";
import UserMenuList from '../UserComponent/UserMenuList';
import useFetch from "../components/UseFetchComponent";
import headerImage from "../assets/header.png";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import data from "../data/db.json"
import Navbar from "../components/NavbarComponent";
import { Link } from "react-router-dom";
import UserNavbar from "../UserComponent/UserNavbar";

const UserMenuPage = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    const { data: menus, error, isPending } = useFetch("http://localhost:3040/menus")
    const [showSarapan, setShowSarapan] = useState(false);
    const [showFood, setShowFood] = useState(false)
    const [showDrink, setShowDrink] = useState(false)

    useEffect(() => {
        setShowSarapan(true)
        setShowFood(true)
        setShowDrink(true)
    }, [])

    const handleShowAll = () => {
        setShowSarapan(true)
        setShowFood(true)
        setShowDrink(true)
    }

    const handleShowSarapan = () => {
        setShowSarapan(true)
        setShowFood(false)
        setShowDrink(false)
    }
    const handleShowFood = () => {
        setShowSarapan(false)
        setShowFood(true)
        setShowDrink(false)
    }
    const handleShowDrink = () => {
        setShowSarapan(false)
        setShowFood(false)
        setShowDrink(true)
    }
    return (
        <div className="home">
            <UserNavbar/>
            <div className="header">



                <h1 className="header-title">Nikmati menu pilihan terbaik</h1>
                <img src={headerImage} />
            </div>

            {error && <div>{error}</div>}

            <div style={{ display: 'flex', flexDirection: "row", margin: '40px' }}>

                <button onClick={handleShowAll} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border: 'none' }} >All</button>

                <button onClick={handleShowSarapan} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border: 'none' }}>Sarapan</button>

                <button onClick={handleShowFood} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border: 'none' }}>Food</button>

                <button onClick={handleShowDrink} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border: 'none' }}>Drink</button>

            </div>

            {isPending && <div>Getting the data</div>}

            {menus && showSarapan && (
                <UserMenuList menus={menus.filter((menu) => menu.type === "sarapan")} title="Sarapan" data-aos="flip-left" />
            )}
            {menus && showFood && (
                <UserMenuList menus={menus.filter((menu) => menu.type === "food")} title="Food" data-aos="flip-left" />
            )}
            {menus && showDrink && (
                <UserMenuList menus={menus.filter((menu) => menu.type === "drink")} title="Drink" data-aos="flip-left" />
            )}
        </div>
    );
}

export default UserMenuPage;
