import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Promo = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [expired, setExpired] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // let ratingValue = parseInt(rating)
        // if (isNaN(ratingValue)) {
        //     ratingValue = "Not rated"
        // }
        const promo = { title, desc, img, expired }

        fetch("http://localhost:3040/promo", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(promo)
        }).then(() => {
            console.log(promo)
            console.log("Added")
            navigate("/landingpage")
        })
    }

    return (
        <div className="create">
            <h2>Add a new promo</h2>
            <form onSubmit={handleSubmit}>
                <label>Promo Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Promo Desc</label>
                <textarea
                    type="text"
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label>Expiration Date</label>
                <input
                    type="text"
                    required
                    value={expired}
                    onChange={(e) => setExpired(e.target.value)} />
                <label>Image URL</label>
                    <input
                        type="link"
                        required
                        value={img}
                        onChange={(e) => setImg(e.target.value)} />
                <button>Create Promo</button>
            </form>
        </div>
    );
}

export default Promo;