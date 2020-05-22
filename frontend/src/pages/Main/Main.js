import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Main.css';
import Api from '../../services/Api'

import logo from "../../assets/logo.svg";
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUser() {
            const response = await Api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            setUsers(response.data);
        }
        loadUser();
    }, [match.params.id]);

    async function handleLike(id) {
        await Api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        })
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id) {
       await Api.post(`/devs/${id}/dislikes`, null, {
            headers: {
               user: match.params.id
            }
       })
       setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            { users ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={Dislike} alt="Dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={Like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    Acabou :(
                </div>
            )}
        </div>
    );
}