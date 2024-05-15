import Colaborador from '../Colaborador'
import './Time.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdDelete } from "react-icons/md";


const Time = (props) => {
    return (
        //operador ternário para veriricar caso o time esteja vazio, não renderiza, caso tenha algum colaborador, renderiza
        (props.colaboradores.length > 0) ? 
        <section className='time' style={{ backgroundImage: `url('${props.fundo}')`,
        backgroundSize: 'cover', // para cobrir todo o elemento
        backgroundPosition: 'center', // posição central da imagem
        backgroundRepeat: 'no-repeat' // não repetir a imagem
      }}>
            {props.modoEdicao && (
            <div className='botoes'><input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.corPrimaria} type='color' className='input-cor' />
                <AiFillCloseCircle size={25} style={{color:props.corPrimaria}} className='botao-cancelar' onClick={() => props.botaoCancelar(props.id)} />
                <MdDelete size={25} style={{color:props.corPrimaria}} onClick={() => props.botaoApagarTime(props.id)} />
            </div>
            )}
            <div className='cabecalho-time'>
                <h3 style={{ color:props.corPrimaria }}>{props.nome}</h3>
                <img className='logo' src={props.logo} alt="Logo"/>
            </div>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {

                    
                    return <Colaborador corDeFundo={colaborador.time.corPrimaria} key={colaborador.id} nome={colaborador.jogador.nome} personagem={colaborador.personagem}  imagem={colaborador.jogador.imagem} id={colaborador.id} deletar={props.deletar} favorito={props.favorito} verificaFavorito={props.favoritar} modoEdicao={props.modoEdicao} nomePersonagem={colaborador.personagem.nome} funcaoPersonagem={colaborador.funcao.icone} funcaoPersonagemDescricao={colaborador.funcao.nome} fotoPersonagem={colaborador.personagem.imagem} />
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