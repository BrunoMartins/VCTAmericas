import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

import { AiFillCloseCircle } from 'react-icons/ai';
import { MdDelete } from "react-icons/md";


const Time = (props) => {
    return (
        //operador ternário para veriricar caso o time esteja vazio, não renderiza, caso tenha algum colaborador, renderiza
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: hexToRgba(props.corPrimaria, '0.4')}}>
            {props.modoEdicao && (
            <div className='botoes'><input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.corPrimaria} type='color' className='input-cor' />
                <AiFillCloseCircle size={25} className='botao-cancelar' onClick={() => props.botaoCancelar(props.id)} />
                <MdDelete size={25} onClick={() => props.botaoApagarTime(props.id)} />
            </div>
            )}
            <div className='cabecalho-time'>
                <h3 style={{ color:props.corPrimaria }}>{props.nome}</h3>
                <img className='logo' src={props.logo} alt="Logo"/>
            </div>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.id} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} id={colaborador.id} deletar={props.deletar} favorito={colaborador.favorito} verificaFavorito={props.favoritar} modoEdicao={props.modoEdicao} />
                })}
            </div>
            {props.modoEdicao && (
            <button style={{ backgroundColor: props.corPrimaria }} className='limpar-time' onClick={() => props.botaoLimparTime(props.id)}>
                Limpar time
            </button>
            )}
        </section>
            : ''
    )

}

export default Time