import React, { useState } from 'react';

import "./Login.css";
import logo from "../../assets/logo.svg";

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push('/main')
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo Tindev" />
                <input 
                    placeholder="Digite seu usuário do Github" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
