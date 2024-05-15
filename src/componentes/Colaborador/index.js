import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = ({ nome, imagem, funcaoPersonagem,funcaoPersonagemDescricao, corDeFundo, fotoPersonagem, nomePersonagem, deletar, id, favorito, verificaFavorito, modoEdicao }) => {//alternativa para não utilizar props
    return (
        <div className='colaborador'>
            {modoEdicao && (
                <AiFillCloseCircle size={25} style={{ color: corDeFundo }} className="deletar" onClick={() => deletar(id)} />
            )}
            <div className='cabecalho'>
                <img className='jogador-foto' src={imagem} alt={nome} />
                <h4>{nome}</h4>
            </div>
            <div className='personagem-info'>
                <img className='jogador-funcao' src={funcaoPersonagem} alt={funcaoPersonagemDescricao} />
                <h5>{nomePersonagem}</h5>
            </div>
            <img className='personagem-foto' src={fotoPersonagem} alt={nome} />
            {modoEdicao && (
                <div className='favoritar'>
                    {favorito ? <AiFillHeart color='#ff0000' size={25} onClick={() => verificaFavorito(id)} /> : <AiOutlineHeart size={25} color='#ff0000' onClick={() => verificaFavorito(id)} />}
                </div>
            )}
        </div>
    );
}

export default Colaborador