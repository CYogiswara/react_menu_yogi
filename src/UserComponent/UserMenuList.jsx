import { Link } from "react-router-dom";
import '../styles/menulist.css'
import { useState } from "react";

const UserMenuList = ({ menus, title, isFavorite }) => {

    const [search, setSearch] = useState("")

    return (
        <div className="home">
            <input type="search" onChange={e => setSearch(e.target.value)} className="searchBar" placeholder="Search in this category" style={{border: '1px solid black'}}/>
            <h1 className="menu-title">{title}</h1>
            {menus.filter((menu) => menu.title.toLowerCase().includes(search)).map((menu) => (
                <div className="container">
                    <div className="box">
                        <Link to={`/usermenus/${menu.id}`}>
                            <img src={menu.img} alt="#"></img>
                            <h1 className="box-title">{menu.title}</h1>
                            {isFavorite == "true" ? null : <h3 className="box-content">⭐{menu.rating}</h3>}
                            {isFavorite == "true" ? null : <p className="box-content">{menu.content}</p>}
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default UserMenuList;