import MenuList from "../components/MenuListComponent";
import useFetch from "../components/UseFetchComponent";
import headerImage from "../assets/header.png";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import data from "../data/db.json"
import Navbar from "../components/NavbarComponent";

const MenuPage = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    const { data: menus, error, isPending } = useFetch("http://localhost:3040/menus")
    const [showAll, setShowAll] = useState(true)
    const [showSarapan, setShowSarapan] = useState(false);
    const [showFood, setShowFood] = useState(false)
    const [showDrink, setShowDrink] = useState(false)
    // const [searchTerm, setSearchTerm] = useState("")
    // const [filteredData, setFilteredData] = useState(menus)
    // const [isSearching, setIsSearching] = useState()

    // const handleInputChange = (event) => {
    //     const {value} = event.target
    //     setSearchTerm(value)
    //     filterData(value)
    //     console.log(value)
    // }

    // const filterData = (searchTerm) => {
    //     const filteredData = menus.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    //     setFilteredData(filteredData)
    // }

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
            <Navbar/>
            <div className="header">
                <h1 className="header-title">Nikmati menu pilihan terbaik</h1>
                <img src={headerImage} />
            </div>

            {error && <div>{error}</div>}

            <div style={{display: 'flex', flexDirection: "row", margin: '40px'}}>

                <button onClick={handleShowAll} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border:'none'}} >All</button>

                <button onClick={handleShowSarapan} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border: 'none'}}>Sarapan</button>

                <button onClick={handleShowFood} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border:'none'}}>Food</button>

                <button onClick={handleShowDrink} style={{ backgroundColor: "#D50000", color: 'white', width: "70px", height: "30px", margin: '3px', cursor: "pointer", border: 'none'}}>Drink</button>

            </div>

            {/* <input type="text" placeholder="Search..." value={searchTerm} onChange={setIsSearching(true)}/> */}

            {/* {console.log(filteredData)} */}

            {isPending && <div>Getting the data</div>}

            {menus && showSarapan && (
                <MenuList menus={menus.filter((menu) => menu.type === "sarapan")} title="Sarapan" data-aos="flip-left"/>
            )}
            {menus && showFood && (
                <MenuList menus={menus.filter((menu) => menu.type === "food")} title="Food" data-aos="flip-left"/>
            )}
            {menus && showDrink && (
                <MenuList menus={menus.filter((menu) => menu.type === "drink")} title="Drink" data-aos="flip-left"/>
            )}
        </div>
    );
}

export default MenuPage;
