import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Update = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("food");
    const [img, setImg] = useState("")
    const [isFavorite, setIsFavorite] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3040/menus/${id}`)
            .then(response => response.json())
            .then(data => {
                setTitle(data.title);
                setRating(data.rating);
                setContent(data.content);
                setType(data.type);
                setImg(data.img);
                setIsFavorite(data.isFavorite);
            })
            .catch(error => console.error('Error fetching menu details:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let ratingValue = parseInt(rating);
        if (isNaN(ratingValue)) {
            ratingValue = "Not rated";
        }
        const menu = { title, rating: ratingValue, type, content, img, isFavorite };

        fetch(`http://localhost:3040/menus/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(menu)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update menu');
                }
                console.log("Updated");
                navigate("/menulist");
            })
            .catch(error => {
                console.error('Error updating menu:', error);
            });
    };

    return (
        <div className="create">
            <h2>Update this menu</h2>
            <form onSubmit={handleSubmit}>
                <label>Menu Title</label>
                <input
                    type="text"
                    required
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Menu Rating</label>
                <select
                    defaultValue={rating}
                    onChange={(e) => setRating(e.target.value)}>
                    <option>No rating</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <label>Menu Type</label>
                <select
                    defaultValue={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="food">Food</option>
                    <option value="drink">Drink</option>
                    <option value="sarapan">Sarapan</option>
                </select>
                <label>Menu Status</label>
                <select
                    defaultValue={isFavorite}
                    onChange={(e) => setIsFavorite(e.target.value)}>
                    <option value={true}>Favorite</option>
                    <option value={false}>Not Favorite</option>
                </select>
                <label>Menu Content</label>
                <textarea
                    required
                    defaultValue={content}
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>
                <label>Image URL</label>
                    <input
                        type="link"
                        required
                        defaultValue={img}
                        onChange={(e) => setImg(e.target.value)} />
                <button>Update</button>
            </form>
        </div>
    );
}

export default Update;