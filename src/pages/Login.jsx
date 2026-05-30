import {useNavigate} from "react-router-dom";

function Login()
{
    const navigate=useNavigate();

    function handleLogin()
    {
        navigate("/dashboard");
    }

    return(

        <div className="login-container">

            <div className="login-box">

                <h2>Vendor Management System</h2>

                <input 
                type="text"
                placeholder="Enter Username"
                />

                <input 
                type="password"
                placeholder="Enter Password"
                />

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>

        </div>

    )
}

export default Login;