import React, { useState, useEffect } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';
import { FaSave } from "react-icons/fa";
import { BiSolidMessageEdit } from "react-icons/bi";


function App() {

  const [jogadores,setJogadores] = useState([
    {
      id:uuidv4(),
      nome:'QCK',
      imagem:'imagens/Jogadores/QCK.jpg'
    },
    {
      id:uuidv4(),
      nome:'TUYZ',
      imagem:'imagens/Jogadores/TUYZ.jpg'
    },
    {
      id:uuidv4(),
      nome:'CAUANZIN',
      imagem:'imagens/Jogadores/CAUANZIN.jpg'
    },
    {
      id:uuidv4(),
      nome:'SAADHAK',
      imagem:'imagens/Jogadores/SAADHAK.jpg'
    },
    {
      id:uuidv4(),
      nome:'LESS',
      imagem:'imagens/Jogadores/LESS.jpg'
    },
    {
      id:uuidv4(),
      nome:'ZELLSIS',
      imagem:'imagens/Jogadores/ZELLSIS.jpg'
    },

    {
      id:uuidv4(),
      nome:'JOHNQT',
      imagem:'imagens/Jogadores/JOHNQT.jpg'
    },
    {
      id:uuidv4(),
      nome:'TENZ',
      imagem:'imagens/Jogadores/TENZ.webp'
    },
    {
      id:uuidv4(),
      nome:'SACY',
      imagem:'imagens/Jogadores/SACY.jpg'
    },
    {
      id:uuidv4(),
      nome:'ZEKKEN',
      imagem:'imagens/Jogadores/ZEKKEN.webp'
    },
    {
      id:uuidv4(),
      nome:'NZR',
      imagem:'imagens/Jogadores/NZR.jpg'
    },
    {
      id:uuidv4(),
      nome:'HAVOC',
      imagem:'imagens/Jogadores/HAVOC.webp'
    },
    {
      id:uuidv4(),
      nome:'KON4N',
      imagem:'imagens/Jogadores/KON4N.jpg'
    },
    {
      id:uuidv4(),
      nome:'MWZERA',
      imagem:'imagens/Jogadores/MWZERA.jpg'
    },
    {
      id:uuidv4(),
      nome:'KHALIL',
      imagem:'imagens/Jogadores/KHALIL.jpg'
    },
    {
      id:uuidv4(),
      nome:'MAZIN',
      imagem:'imagens/Jogadores/MAZIN.jpeg'
    },
    {
      id:uuidv4(),
      nome:'RGLM',
      imagem:'imagens/Jogadores/RGLM.jpg'
    },
    {
      id:uuidv4(),
      nome:'FRZ',
      imagem:'imagens/Jogadores/FRZ.jpg'
    },
    {
      id:uuidv4(),
      nome:'JZZ',
      imagem:'imagens/Jogadores/JZZ.jpg'
    },
    {
      id:uuidv4(),
      nome:'ARTZIN',
      imagem:'imagens/Jogadores/ARTZIN.jpg'
    },
    {
      id:uuidv4(),
      nome:'HEAT',
      imagem:'imagens/Jogadores/HEAT.png'
    },
    {
      id:uuidv4(),
      nome:'SHYY',
      imagem:'imagens/Jogadores/SHYY.jpg'
    },
    {
      id:uuidv4(),
      nome:'KEZNIT',
      imagem:'imagens/Jogadores/KEZNIT.jpg'
    },
    {
      id:uuidv4(),
      nome:'MELSER',
      imagem:'imagens/Jogadores/MELSER.webp'
    },
    {
      id:uuidv4(),
      nome:'KLAUS',
      imagem:'imagens/Jogadores/KLAUS.webp'
    },
    {
      id:uuidv4(),
      nome:'ASPAS',
      imagem:'imagens/Jogadores/ASPAS.jpg'
    },
    {
      id:uuidv4(),
      nome:'MAZINO',
      imagem:'imagens/Jogadores/MAZINO.avif'
    },
    {
      id:uuidv4(),
      nome:'KINGG',
      imagem:'imagens/Jogadores/KINGG.jpg'
    },
    {
      id:uuidv4(),
      nome:'TEX',
      imagem:'imagens/Jogadores/TEX.jpg'
    },
    {
      id:uuidv4(),
      nome:'C0M',
      imagem:'imagens/Jogadores/C0M.jpg'
    },
    {
      id:uuidv4(),
      nome:'MARVED',
      imagem:'imagens/Jogadores/MARVED.webp'
    },
    {
      id:uuidv4(),
      nome:'ETHAN',
      imagem:'imagens/Jogadores/ETHAN.jpg'
    },
    {
      id:uuidv4(),
      nome:'DEMON1',
      imagem:'imagens/Jogadores/DEMON1.jpg'
    },
    {
      id:uuidv4(),
      nome:'VICTOR',
      imagem:'imagens/Jogadores/VICTOR.jpg'
    },
    {
      id:uuidv4(),
      nome:'CRASHIES',
      imagem:'imagens/Jogadores/CRASHIES.jpg'
    },
    {
      id:uuidv4(),
      nome:'VALYN',
      imagem:'imagens/Jogadores/VALYN.jpg'
    },
    {
      id:uuidv4(),
      nome:'ICY',
      imagem:'imagens/Jogadores/ICY.jpg'
    },
    {
      id:uuidv4(),
      nome:'TRENT',
      imagem:'imagens/Jogadores/TRENT.avif'
    },
    {
      id:uuidv4(),
      nome:'JONAHP',
      imagem:'imagens/Jogadores/JONAHP.jpg'
    },
    {
      id:uuidv4(),
      nome:'LEAF',
      imagem:'imagens/Jogadores/LEAF.jpg'
    },



  ])

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'LOUD',
      corPrimaria: '#14c820',
      logo: 'imagens/Logo/LOUD_logo.svg.png',
      fundo:'imagens/Wallpaper/LOUD.jpg_large'
    },
    {
      id: uuidv4(),
      nome: '100 THIEVES',
      corPrimaria: '#5c5959',
      logo: 'imagens/Logo/100_Thieves_logo.svg.png',
      fundo:'imagens/Wallpaper/100THIEVES.webp'

    },
    {
      id: uuidv4(),
      nome: 'CLOUD9',
      corPrimaria: '#1a96e3',
      logo: 'imagens/Logo/Cloud9.png',
      fundo:'imagens/Wallpaper/CLOUD9.jpg'

    },
    {
      id: uuidv4(),
      nome: 'EG',
      corPrimaria: '#706f6ffa',
      logo: 'imagens/Logo/EvilGenuises.webp',
      fundo:'imagens/Wallpaper/EG.jpg'

    },
    {
      id: uuidv4(),
      nome: 'FURIA',
      corPrimaria: '#5c5959',
      logo: 'imagens/Logo/Furia_Esports_logo.png',
      fundo:'imagens/Wallpaper/FURIA.jpg'
    },
    {
      id: uuidv4(),
      nome: 'G2',
      corPrimaria: '#5c5959',
      logo: 'imagens/Logo/G2_Esports_logo.png',
      fundo:'imagens/Wallpaper/G2.jpg'

    },
    {
      id: uuidv4(),
      nome: 'KRÜ',
      corPrimaria: '#e83092',
      logo: 'imagens/Logo/KRÜ_Esports_logo.png',
      fundo:'imagens/Wallpaper/KRU.webp'

    },
    {
      id: uuidv4(),
      nome: 'LEVIATÁN',
      corPrimaria: '#4699dd',
      logo: 'imagens/Logo/Leviatan.png',
      fundo:'imagens/Wallpaper/LEVIATAN.jpeg'

    },
    
    {
      id: uuidv4(),
      nome: 'MIBR',
      corPrimaria: '#001427fe',
      logo: 'imagens/Logo/Made_In_Brazil_logo.png',
      fundo:'imagens/Wallpaper/MIBR.jpg'

    },
    {
      id: uuidv4(),
      nome: 'NRG',
      corPrimaria: '#5c5959',
      logo: 'imagens/Logo/nrg-esports-logo.svg',
      fundo:'imagens/Wallpaper/NRG.jpg'

    },
    {
      id: uuidv4(),
      nome: 'SENTINELS',
      corPrimaria: '#ce2020',
      logo: 'imagens/Logo/Sentinels_logo.svg',
      fundo:'imagens/Wallpaper/SENTINELS.webp'

    }
  ]);

  const [personagens, setPersonagens] = useState([
    {
      id: uuidv4(),
      nome: 'BRIMSTONE',
      funcao:'Controlador',
      imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png'
    },
    {
      id: uuidv4(),
      nome: 'PHOENIX',
      funcao:'Duelista',
      imagem: 'imagens/Personagens/PHOENIX.png'
    },
    {
      id: uuidv4(),
      nome: 'SAGE',
      funcao:'Sentinela',
      imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png'
    },
    {
      id: uuidv4(),
      nome: 'SOVA',
      funcao:'Iniciador',
      imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png'
    },
    {
      id: uuidv4(),
      nome: 'JETT',
      funcao:'Duelista',
      imagem: '/imagens/Personagens/JETT.png'
    }

  ]);

  const [funcoes, setFuncoes] = useState([
    {
      id: uuidv4(),
      nome: 'Duelista',
      icone:'imagens/Funcoes/Duelista.png'

    },
    {
      id: uuidv4(),
      nome: 'Iniciador',
      icone:'imagens/Funcoes/Iniciador.png'
    },
    {
      id: uuidv4(),
      nome: 'Sentinela',
      icone:'imagens/Funcoes/Sentinela.png'
    },
    {
      id: uuidv4(),
      nome: 'Controlador',
      icone:'imagens/Funcoes/Controlador.png'
    }

  ]);



  const [colaboradores, setColaboradores] = useState([])
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('#000000')// Se não definir uma cor inicial ele considera vazio e da erro
  const [modoEdicao, setModoEdicao] = useState(false);


  useEffect(() => {
    // Carregar colaboradores salvos na localStorage ao carregar a página
    const savedColaboradores = localStorage.getItem('colaboradores');
    if (savedColaboradores) {
      setColaboradores(JSON.parse( savedColaboradores));
    }
  }, []);

  const colaboradorAdicionado = (colaborador) => {
    const updatedColaboradores = [...colaboradores, colaborador];
    setColaboradores(updatedColaboradores);
    // Salvar os colaboradores na localStorage
    localStorage.setItem('colaboradores', JSON.stringify(updatedColaboradores));
  };

  function deletarColaborador(id) {
    const savedColaboradores = JSON.parse(localStorage.getItem('colaboradores'));
    const colaboradoresFiltrados = savedColaboradores.filter(colaborador => colaborador.id !== id)
    setColaboradores(colaboradoresFiltrados);
    localStorage.setItem('colaboradores', JSON.stringify(colaboradoresFiltrados));

  }

  function deletarTime(id) {
    const savedTimes = JSON.parse(localStorage.getItem('times'));
    if (savedTimes) {
      const timesFiltrados = savedTimes.filter(savedTime => savedTime.id !== id);
      setTimes(timesFiltrados);
      localStorage.setItem('times', JSON.stringify(timesFiltrados));
    } else {
      const timesFiltrados = times.filter(time => time.id !== id);
      setTimes(timesFiltrados);
      localStorage.setItem('times', JSON.stringify(timesFiltrados));
    }
    const timeParaExcluir = times.find(time => time.id === id).nome;
    const colaboradoresAtualizados = colaboradores.filter(colaborador => colaborador.time !== timeParaExcluir);
    setColaboradores(colaboradoresAtualizados);
    localStorage.setItem('colaboradores', JSON.stringify(colaboradoresAtualizados));

  }

  function limparTime(id) {
    const timeParaLimpar = times.find(time => time.id === id).nome;
    const colaboradoresAtualizados = colaboradores.filter(colaborador => colaborador.time !== timeParaLimpar);
    setColaboradores(colaboradoresAtualizados);
    localStorage.setItem('colaboradores', JSON.stringify(colaboradoresAtualizados));

  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.corPrimaria = cor;
      }
      return time;
    }));
  }

  function salvarAlteracoes() {
    // Salvar os times atualizados na localStorage
    (times.map(time => {

      time.corAnterior = time.corPrimaria;

      return time;
    }));
    setModoEdicao(false);
    localStorage.setItem('times', JSON.stringify(times));
  }

  useEffect(() => {
    // Carregar times salvos na localStorage ao carregar a página
    const savedTimes = localStorage.getItem('times');
    if (savedTimes) {
      setTimes(JSON.parse(savedTimes));
    }
  }, []);

  function cancelarAlteracao(id) {
    const savedTimes = localStorage.getItem('times');
    if (savedTimes) {
      const timesArray = JSON.parse(savedTimes);
      setTimes(timesArray.map(time => {
        if (time.id === id) {
          time.corPrimaria = time.corAnterior;
        }
        return time;
      }));
    }

    setTimes(times.map(time => {
      if (time.id === id) {
        time.corPrimaria = time.corAnterior;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    const updatedTimes = [...times, { id: uuidv4(), ...novoTime, corAnterior: novoTime.corPrimaria }];
    setTimes(updatedTimes);
    // Salvar os times na localStorage
    localStorage.setItem('times', JSON.stringify(updatedTimes));
    setNomeTime('');
    setCorTime('#000000');
  }

  function verificaFavorito(id) {
    const updateFavoritos = colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    })
    setColaboradores(updateFavoritos);
    localStorage.setItem('colaboradores', JSON.stringify(updateFavoritos));

  }

  function alternarModoEdicao() {
    setModoEdicao(!modoEdicao);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        nomeTime={nomeTime}
        setNomeTime={setNomeTime}
        corTime={corTime}
        setCorTime={setCorTime}
        times={times}
        jogadores={jogadores}
        funcoes={funcoes}
        personagens={personagens}
        colaboradorCadastrado={colaborador => colaboradorAdicionado(colaborador)} />
      <section className="times">
        <h1>Meus times</h1>
        {modoEdicao ? (
          <button className='botao-salvar' onClick={salvarAlteracoes}> Salvar alterações
            <FaSave size={25}/>
          </button>

        ) : (
          <button className='botao-edicao' onClick={alternarModoEdicao}>Modo Edição
            <BiSolidMessageEdit size={25} />
          </button>
        )}
        {times.map(time => <Time
          modoEdicao={modoEdicao}
          botaoLimparTime={limparTime}
          botaoApagarTime={deletarTime}
          id={time.id}
          mudarCor={mudarCorDoTime}
          botaoSalvar={salvarAlteracoes}
          botaoCancelar={cancelarAlteracao}
          key={time.id}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          logo={time.logo}
          fundo={time.fundo}
          deletar={deletarColaborador}
          favoritar={verificaFavorito}
          colaboradores={colaboradores.filter(colaborador => {

           

            return colaborador.time.nome === time.nome
          })}//filtrando para que para cada time durante a interação apareça somente o colaborador que esteja nesse time
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
