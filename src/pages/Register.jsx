import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const account = { username,  password};

        fetch("http://localhost:3040/accounts", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(account)
        }).then(() => {
            navigate("/")
        })
    }
    return ( 
    <div className="create">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input 
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button>Create account</button>
        </form>
    </div> );
}
 
export default Register
