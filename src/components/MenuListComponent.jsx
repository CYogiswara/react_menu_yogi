import { Link } from "react-router-dom";
import '../styles/menulist.css'

const MenuList = ({ menus, title, isFavorite }) => {

    return (
        <div className="home">
            <h1 className="menu-title">{title}</h1>
            {menus.map((menu) => (
                
                <div className="container">
                    <div className="box">
                        <Link to={`/menus/${menu.id}` }>
                            <img src={menu.img} alt="#"></img>
                            <h1 className="box-content">{menu.title}</h1>
                            {isFavorite == "true" ? null : <h3 className="box-content">⭐{menu.rating}</h3>}
                            {isFavorite == "true" ? null : <p className="box-content">{menu.content}</p>}
                        </Link>
                        <Link to={`/update/${menu.id}`}>
                            {isFavorite == "true" ? null : <button className="update-btn">Update</button>}   
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default MenuList;