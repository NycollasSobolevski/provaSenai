import { useState } from 'react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='container'>
            <div className='content'>
                <h1>Bem-vindo</h1>
                <div className='inputs'>
                    <input type='text' placeholder='E-Mail' onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value) }/>
                </div>
                <button className='btn'>Entrar</button>
            </div>
        </div>
    )
}