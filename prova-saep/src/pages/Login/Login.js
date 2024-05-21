import './Login.css';

export default function Login() {
    return (
        <div className='container'>
            <div className='content'>
                <h1>Bem-vindo</h1>
                <div className='inputs'>
                    <input type='text' placeholder='E-Mail' />
                    <input type='password' placeholder='Senha' />
                </div>
                <button className='btn'>Entrar</button>
            </div>
        </div>
    )
}