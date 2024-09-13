import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login/styles-login.css"

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const USERNAME = "usuario";
    const PASSWORD = "gatos";

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;

        if (username == USERNAME && password == PASSWORD) {
            navigate("/cats");
        } else {
            setError("El usuario o contraseña son incorrectos");
        };
    };

    const handleInputChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    return (
        <section>
            <h1 className="login-h1">L o g i n</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>

                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={(e) => handleInputChange(e)}
                    />

                </div>
                <div>
                    <label>Password : </label>

                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                    />

                </div>
                <button type="submit">Login</button>
            </form>
            <p>{error}</p>
        </section>
    )
}

export default Login;