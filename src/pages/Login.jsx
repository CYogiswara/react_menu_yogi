import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetch from "../components/UseFetchComponent"

const Login = () => {

    const { data: accounts } = useFetch("http://localhost:3040/accounts")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        // if(username === accounts.username && password === accounts.password){
        //     alert("success")
        // }else{
        //     <h1>Error</h1>
        // }
        const account = { username,  password};
        fetch("http://localhost:3040/accounts", {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(account)
        }).then(() => {
            if(username === account.username && password === account.password){
                alert("success")
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
            <button>Login</button>
        </form>
    </div> 
    )
}
 
export default Login;