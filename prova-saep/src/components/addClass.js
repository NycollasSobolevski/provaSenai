import "./styles.css";


export default function AddClassPopup(params) {
    
    const [nome, setNome] = useState();


    const addClass = () => {
        const obj = {
            nome: nome,
            id_professor: params.user.id_professor
        }

        axios.post( "http://localhost:3030/api/turma", obj )
    }


    return (
        <>
            <div className="header"></div>
            <div className="modal">
                <input type="text" placeholder="Nome da turma" onChange={(e) => setNome(e.target.value)}/> 

                <button onClick={() => addClass()}>Cadastrar</button>
            </div>
        </>
    )
}
