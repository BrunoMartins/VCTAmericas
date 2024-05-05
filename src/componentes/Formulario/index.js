import React, { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {


 
    const [time, setTime] = useState('')
    const [jogador,setJogador]=useState('')
    const [funcao,setFuncao]=useState('')
    const [personagem,setPersonagem]=useState('')
    
    const salvar = (evento) => {
        evento.preventDefault()
        props.colaboradorCadastrado({
            id: uuidv4(),
            favorito:false,
            time,
            jogador,
            funcao,
            personagem
        })
        //limpando o formulário
        setTime('')
        setJogador('')
        setFuncao('')
        setPersonagem('')
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={salvar}>
                <h2>Selecione as opções para criar seu time</h2>
               
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time }
                    alterado={valor => setTime(valor)}
                />
                 <ListaSuspensa
                    obrigatorio={true}
                    label="Jogador"
                    itens={props.jogadores}
                    valor={jogador}
                    alterado={valor => setJogador(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Função"
                    itens={props.funcoes}
                    valor={funcao}
                    alterado={valor => setFuncao(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Personagem"
                    itens={props.personagens.filter(personagem => personagem.funcao === funcao.nome)}
                    valor={personagem}
                    alterado={valor => setPersonagem(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form className="formulario" onSubmit={(evento) => {
                 evento.preventDefault();
                 props.cadastrarTime({nome: props.nomeTime, corPrimaria: props.corTime});
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={props.nomeTime}
                    alterado={valor => props.setNomeTime(valor)}
                />
                <Campo
                    obrigatorio={true}
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={props.corTime}
                    alterado={valor => props.setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )

}

export default Formulario