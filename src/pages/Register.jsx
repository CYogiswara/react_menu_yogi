import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState()
    const navigate = useNavigate()


    const handleChecked = (e) => {
        if (e.target.checked) {
          setIsAdmin(true)
        } else {
          setIsAdmin(false)
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        const account = { username, password, isAdmin };

        fetch("http://localhost:3040/user", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(account)
        }).then(() => {
            if(isAdmin === true){
                navigate("/login")
            }else{
                alert("fail")
            }
            navigate( "/login");
        })

    }
    return (
        <div className="create">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <label>Admin</label>
                <input
                    type="checkbox"
                    value ={isAdmin}
                    onChange={handleChecked}
                />
                <button>Create account</button>
            </form>
                <p>Already have an account?</p><Link to="/login">Login</Link>
        </div>);
}

export default Register
