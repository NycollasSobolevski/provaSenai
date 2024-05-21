import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import {redirect } from "react-router-dom"
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = () => {
        const body = {
            email: email,
            senha: password
        }
        console.log(body);
        // axios.post( "http://localhost:3030/api/professor", body )
        redirect("/main")
    } 

    return (
        <div className='container'>
            <div className='content'>
                <h1>Bem-vindo</h1>
                <div className='inputs'>
                    <input type='text' placeholder='E-Mail' onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value) }/>
                </div>
                <button className='btn' onClick={() => login()}>Entrar</button>
            </div>
        </div>
    )
}