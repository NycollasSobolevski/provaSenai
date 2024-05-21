import "./style.css"

export default function CadastrarTurma(params) {
    

    return(
        <>
            <div className='header'>
                <h2 className='prof-name'>Nome do Professor</h2>
                <a className='exit-btn' href="/">Sair</a>
            </div>
            
            <div>
                <h2>Cadastrar turma</h2>
                <h4>Nome:</h4>
                <input type="text" placeholder="nome" />
                <a href="/main" ><button className="btn">Cadastrar</button></a>
            </div>
        </>
    )
}