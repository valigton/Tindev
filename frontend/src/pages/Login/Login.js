import React, { useState } from 'react';

import Api from '../../services/Api';

import "./Login.css";
import logo from "../../assets/logo.svg";

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await Api.post('/devs', {
            username
        })
        const { _id } = response.data;
        history.push(`/dev/${_id}`);
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
