import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({accounts}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const findUser = accounts.find((user) => user.username === username && user.password === password)

        if(findUser){
            navigate('/landingpage')
        }else{
            alert("failed")
        }
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
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;