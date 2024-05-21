import "./styles.css";
import axios from "axios"
import {useState} from "react"

export default function AddAtividadePopup(params) {
    const [descricao, setDescricao] = useState();


    const addClass = () => {
        const obj = {
            descricao : descricao,
            data: new Date(),
            id_turma: params.class.id_turma
        }

        axios.post( "http://localhost:3030/api/atividade", obj )
    }

    return (
        <>
            <div className="header"></div>

            <div class="modal">
                <input type="text" placeholder="Nome da turma" onChange={(e) => setDescricao(e.target.value)}/> 

                <button onClick={() => addClass()}>Cadastrar</button>
            </div>
        </>
    )
}
