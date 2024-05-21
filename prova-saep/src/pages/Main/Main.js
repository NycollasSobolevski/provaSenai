import './Main.css';

export default function Main() {
    return (
        <div className="main-container">
            <div className='header'>
                <h2 className='prof-name'>Nome do Professor</h2>
                <a className='exit-btn'>Sair</a>
            </div>
            <div className='btn-container'>
                <button className='btn'>Cadastrar turma</button>
            </div>
            <div className='table-container'>
                <h3>Turmas</h3>
            </div>
        </div>
    )
}