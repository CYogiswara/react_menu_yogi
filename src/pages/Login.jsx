import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({accounts}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const findUser = accounts.find((user) => user.username === username && user.password === password && user.isAdmin === true)

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
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
                <Link to='/'>
                <button style={{background: 'red', margin: '10px'}}>Cancel</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;