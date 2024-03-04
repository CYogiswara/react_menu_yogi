import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState()
    const [content, setContent] = useState("")
    const [type, setType] = useState("food")
    const [img, setImg] = useState("")
    const [isFavorite, setIsFavorite] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let ratingValue = parseInt(rating)
        if (isNaN(ratingValue)) {
            ratingValue = "Not rated"
        }
        const menu = { title, rating: ratingValue, type, content, img, isFavorite }

        fetch("http://localhost:3040/menus", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(menu)
        }).then(() => {
            console.log(menu)
            console.log("Added")
            navigate("/menulist")
        })
    }

    return (
        <div className="create">
            <h2>Add a new menu</h2>
            <form onSubmit={handleSubmit}>
                <label>Menu Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Menu Rating</label>
                <select
                    value={rating}
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
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="food">Food</option>
                    <option value="drink">Drink</option>
                    <option value="sarapan">Sarapan</option>
                </select>
                <label>Menu Status</label>
                <select
                    value={isFavorite}
                    onChange={(e) => setIsFavorite(e.target.value)}>
                    <option value={true}>Favorite</option>
                    <option value={false}>Not Favorite</option>
                </select>
                <label>Menu Content</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>
                <label>Image URL</label>
                    <input
                        type="link"
                        required
                        value={img}
                        onChange={(e) => setImg(e.target.value)} />
                <button>Create</button>
            </form>
        </div>
    );
}

export default Create;