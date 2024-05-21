import './Main.css';
import data from "../../data/class.json"
export default function Main() {

    const vizualisar = () => {

    }

    const data = [
        {
            id: 1,
            name:"Desenvolvimento de sistemas SA01"
        },
        {
            id: 2,
            name:"Redes"
        },
        {
            id: 3,
            name:"Dev de sistemas B402"
        }
    ]

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
                <table>
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Nome</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                        <hr/>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>João</td>
                            <td><button className='table-btn edit'>Editar</button> <a href='turma'> <button className='table-btn vizual'>Visualizar</button></a></td>
                        </tr>
                        <hr/>
                        <tr>
                            <td>2</td>
                            <td>Maria</td>
                            <td><button className='table-btn edit'>Editar</button> <a href='turma'> <button className='table-btn vizual'>Visualizar</button></a></td>
                        </tr>
                        <hr/>
                        <tr>
                            <td>3</td>
                            <td>Carlos</td>
                            <td><button className='table-btn edit'>Editar</button> <a href='turma'> <button className='table-btn vizual'>Visualizar</button></a></td>
                        </tr>
                        <hr/>
                    </tbody>
                </table>

            </div>

        </div>
    )
}