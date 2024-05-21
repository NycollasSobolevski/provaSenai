import "./style.css"


export default function TurmaPage(params) {
    const data = {
        id: 1,
        name:"Desenvolvimento de sistemas SA01"
    }

    return(
        <>
            <div className='header'>
                <h2 className='prof-name'>Nome do Professor</h2>
                <a className='exit-btn'>Sair</a>
            </div>
        </>
    )
}