import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../components/UseFetchComponent";
import '../styles/menudetail.css'

const MenuDetail = () => {

    const { id } = useParams()
    const { data: menu, error } = useFetch("http://localhost:3040/menus/" + id)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch("http://localhost:3040/menus/" + menu.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/menulist")
        })
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {menu && (
                <div className="detail-container">
                    <div className="menu-detail">
                        <img src={menu.img} />
                        <h1>{menu.title}</h1>
                        <h2>⭐{menu.rating}</h2>
                        <p>{menu.content}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuDetail;