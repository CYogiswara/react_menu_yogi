import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logoMCD.png';

const Login = ({ accounts }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [agreed, setAgreed] = useState(false)
    const navigate = useNavigate()

    const handleChecked = (e) => {
        if (e.target.checked) {
            setAgreed(true)
        } else {
            setAgreed(false)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const findUser = accounts.find((user) => user.username === username && user.password === password)
        const findAdmin = accounts.find((user) => user.username === username && user.password === password && user.isAdmin === true)


        if(findUser){
            navigate('/userlanding')
        }
        if(findAdmin) {
            navigate('/landingpage')
        }

    }


    return (
        <div className="create">
            <img src={Logo} style={{ width: '40px', marginBottom: '15px' }} alt="" />
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
                <div>I agree with the terms and condition</div>
                <input
                    type="checkbox"
                    required
                    value={agreed}
                    onChange={handleChecked}
                    style={{float: 'left'}}
                />
                <button>Login</button>
                <div style={{margin: '20px'}}>
                <p>Don't have an account?</p><Link to="/" style={{color: 'blue'}}>Register</Link>
            </div>
            </form>
        </div>
    );
}
export default Login;