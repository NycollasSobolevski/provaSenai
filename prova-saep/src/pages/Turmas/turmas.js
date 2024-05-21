import "./style.css"


export default function TurmaPage(params) {
    const data = {
        id: 1,
        name:"Desenvolvimento de sistemas SA01"
    }

    const Activities = [
        {
            id:1,
            nome: "logica de programação - condicionais"
        },
        {
            id:2,
            nome: "logica de programação - laços de repetição"
        },
        {
            id:3,
            nome: "Lista de exercicios 01"
        }
    ]

    return(
        <>
            <div className='header'>
                <h2 className='prof-name'>Nome do Professor</h2>
                <a className='exit-btn' href="/">Sair</a>
            </div>
            <div className='table-container'>
                <h4>Turma: </h4>{data.name}

                <table>
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nome</th>
                        </tr>
                        <hr/>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>logica de programação - condicionais</td>
                        </tr>
                        <hr/>
                        <tr>
                            <td>2</td>
                            <td>logica de programação - laços de repetição</td>
                        </tr>
                        <hr/>
                        <tr>
                            <td>3</td>
                            <td>Lista de exercicios 01</td>
                        </tr>
                        <hr/>
                    </tbody>
                </table>

            </div>
        </>
    )
}