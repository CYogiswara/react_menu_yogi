import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../components/UseFetchComponent";
import '../styles/menudetail.css'

const PromoDetail = () => {

    const { id } = useParams()
    const { data: diskon, error } = useFetch("http://localhost:3040/promo/" + id)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch("http://localhost:3040/promo/" + diskon.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/menulist")
        })
    }
    
    return (
        <div>
            {error && <div>{error}</div>}
            {diskon && (
                <div className="detail-container">
                    <div className="menu-detail">
                        <img src={diskon.img} />
                        <h1>{diskon.title}</h1>
                        <h2>⭐{diskon.rating}</h2>
                        <p>{diskon.content}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PromoDetail;