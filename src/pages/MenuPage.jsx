import MenuList from "../components/MenuListComponent";
import useFetch from "../components/UseFetchComponent";
import headerImage from "../assets/header.png"

const MenuPage = () => {
    const {data: menus, error} = useFetch("http://localhost:3040/menus")
    return (
        <div className="home">
            <div className="header">
                <h1 className="header-title">Nikmati menu pilihan terbaik</h1>
                <img src={headerImage}/>
            </div>
            {error && <div>{error}</div>}
            {menus && <MenuList menus={menus.filter((menu) => menu.type === "sarapan")} title="Sarapan (07:00 - 10:00)" />}
            {menus && <MenuList menus={menus.filter((menu) => menu.type === "food")} title="Foods" />}
            {menus && <MenuList menus={menus.filter((menu) => menu.type === "drink")} 
            title="Drinks" />}
        </div>
    );
}

    

    






export default MenuPage;
