import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

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

        fetch("http://localhost:3040/accounts", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(account)
        }).then(() => {
            if(isAdmin === true){
                navigate("/menulist")
            }else{
                alert("fail")
            }
        })

    }
    return (
        <div className="create">
            <h2>Login</h2>
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
                <label>Admin</label>
                <input
                    type="checkbox"
                    value ={isAdmin}
                    onChange={handleChecked}
                />
                <button>Create account</button>
            </form>
        </div>);
}

export default Login
