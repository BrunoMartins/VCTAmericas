import './ListaSuspensa.css'
import { v4 as uuidv4 } from 'uuid';

const ListaSuspensa = (props) => {
    const handleSelect = (event) => {
        const id = event.target.value;
        const foundItem = props.itens.find((item) => item.id === id);
        props.alterado(foundItem);
    };


    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={handleSelect} required={props.obrigatorio} value={props.valor ? props.valor.id : ""}>
                <option value="" disabled hidden>Escolha uma opção</option>
                {props.itens.map(item => {
                    return <option value={item.id} key={item.id}>{item.nome}</option>;
                })}
            </select>
        </div>
    );
}

export default ListaSuspensa;