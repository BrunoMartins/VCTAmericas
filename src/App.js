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
      nome:'qck',
      imagem:'https://cdn.ome.lt/BbtxLJCsI6XFD5javU_ZIswZff0=/1200x630/smart/extras/conteudos/valorant-loud-anuncia-qck.jpg'
    },
    {
      id:uuidv4(),
      nome:'tuyz',
      imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphQV-qNZQzpkm1iBvLFXaHCwJ7WBZC5Mr-X7Sr5-vbA&s'
    },
    {
      id:uuidv4(),
      nome:'cauanzin ',
      imagem:'https://s2-ge.glbimg.com/MDOXnCMA7e-Dr_DIlEBpf4Z2RBI=/0x0:456x574/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/u/1/DHYrRvRMuDF0h2NCJXEQ/vct-americas-loud-cauanzin.png'
    },
    {
      id:uuidv4(),
      nome:'Saadhak',
      imagem:'https://assets.gamearena.gg/wp-content/uploads/2023/09/29214149/52977935434_388832a865_k.jpg'
    },
    {
      id:uuidv4(),
      nome:'Less',
      imagem:'https://liquipedia.net/commons/images/6/67/Less_at_the_Masters_Reykjav%C3%ADk_2022.jpg'
    },
    {
      id:uuidv4(),
      nome:'Zellsis',
      imagem:'https://assets.gamearena.gg/wp-content/uploads/2023/10/26173634/Snapinsta.app_301806712_1691854301215060_3130442795403565016_n_1080-e1698352668406.jpg'
    },

    {
      id:uuidv4(),
      nome:'johnqt',
      imagem:'https://cloud.papercrowns.com/image/upload/c_fill,g_face,w_768,h_768,q_auto/v1/sentinels/member/johnqt.jpg?v=65af1970ad174'
    },
    {
      id:uuidv4(),
      nome:'TenZ',
      imagem:'https://s2-techtudo.glbimg.com/xLYaRg6ngzz3alf9KoTxqfmDk28=/0x0:2047x1423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/V/M/AhZfvAQO6BjPQAANgsAw/51209431721-486a0ff8e0-k.jpg'
    },
    {
      id:uuidv4(),
      nome:'Sacy',
      imagem:'https://assets.gamearena.gg/wp-content/uploads/2024/03/13134258/52708739914_b4e3ad8d80_k.jpg'
    },
    {
      id:uuidv4(),
      nome:'zekken',
      imagem:'https://external-preview.redd.it/romero-sen-zekken-trying-to-slot-into-tysons-role-was-v0-artJxlZuVROA5uNRawiLHhzA3kGFF7XhtGuhwvBdBrs.jpg?auto=webp&s=795f005adb927b526fff626616a5df6e0cd093fa'
    },
    {
      id:uuidv4(),
      nome:'NZR',
      imagem:'https://egw.news/cache/1/16/750/1666116761633-16x9.jpg'
    },
    {
      id:uuidv4(),
      nome:'havoc',
      imagem:'https://www.prosettings.gg/wp-content/uploads/2024/02/havoc-valorant-player-profile-picture-225x300.webp'
    },
    {
      id:uuidv4(),
      nome:'kon4n',
      imagem:'https://cdn.ome.lt/h5ra3hZfALH0uji3PfHMn-z0wHI=/1200x630/smart/extras/conteudos/valorant-kon4n-furia.jpg'
    },
    {
      id:uuidv4(),
      nome:'mwzera',
      imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQSTYr2NfWdQvy5kntud-3W5T2Y1Lh9WpqUaObOBtQw&s'
    },
    {
      id:uuidv4(),
      nome:'Khalil',
      imagem:'https://liquipedia.net/commons/images/b/b0/FURIA_Khalil_at_the_VALORANT_Champions_2022.jpg'
    },
    {
      id:uuidv4(),
      nome:'mazin',
      imagem:'https://assets.gamearena.gg/wp-content/uploads/2023/10/19190927/F8g8r4cXsAAvSng-scaled-e1697753408339.jpeg'
    },
    {
      id:uuidv4(),
      nome:'RgLM',
      imagem:'https://cdn.ome.lt/siYrEnO8hy5tS2Chl2l60rM7290=/770x0/smart/uploads/conteudo/fotos/53048456136_6570c317b8_k.jpg'
    },
    {
      id:uuidv4(),
      nome:'frz',
      imagem:'https://static.valorantzone.gg/news/2023/03/21180854/frz.jpg'
    },
    {
      id:uuidv4(),
      nome:'jzz',
      imagem:'https://www.prosettings.gg/wp-content/uploads/2023/03/jzz-valorant-player-profile-picture.webp'
    },
    {
      id:uuidv4(),
      nome:'artzin',
      imagem:'https://www.prosettings.gg/wp-content/uploads/2024/02/artzin-valorant-player-profile-picture.webp'
    },
    {
      id:uuidv4(),
      nome:'heat',
      imagem:'https://cdn.ome.lt/auyx3tDuMrDlK7AYcWcdUBdczv8=/670x0/smart/uploads/conteudo/fotos/Heat_sorrindo.png'
    },
    {
      id:uuidv4(),
      nome:'Shyy',
      imagem:'https://a.espncdn.com/photo/2023/1014/r1238428_2_1005x566_16-9.jpg'
    },
    {
      id:uuidv4(),
      nome:'keznit',
      imagem:'https://assets.gamearena.gg/wp-content/uploads/2023/03/30005328/KEZNIT.jpg'
    },
    {
      id:uuidv4(),
      nome:'Melser',
      imagem:'https://www.prosettings.gg/wp-content/uploads/2022/11/Melser-valorant-player-profile-picture-new.webp'
    },
    {
      id:uuidv4(),
      nome:'Klaus',
      imagem:'https://www.prosettings.gg/wp-content/uploads/2022/11/Klaus-valorant-player-profile-picture-new.webp'
    },
    {
      id:uuidv4(),
      nome:'aspas',
      imagem:'https://assets.gamearena.gg/wp-content/uploads/2023/10/14092146/aspas.jpg'
    },
    {
      id:uuidv4(),
      nome:'Mazino',
      imagem:'https://staticg.sportskeeda.com/editor/2022/09/b2ce0-16637718762849-1920.jpg'
    },
    {
      id:uuidv4(),
      nome:'kiNgg',
      imagem:'https://pbs.twimg.com/media/Fl93BM9acAABsBm.jpg'
    },
    {
      id:uuidv4(),
      nome:'tex',
      imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlnfW6n6DR3nEdzbiCXrrmZcPqZ2Dn_t2w8T0cpSXKQ&s'
    },
    {
      id:uuidv4(),
      nome:'C0M',
      imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSmMwqEJIxiaPsX2_0QKxEugIlM0YX5XCxhtZk7ruTw&s'
    },
    {
      id:uuidv4(),
      nome:'Marved',
      imagem:'https://www.prosettings.gg/wp-content/uploads/2023/06/Marved-valorant-player-profile-picture-nrg.webp'
    },
    {
      id:uuidv4(),
      nome:'Ethan',
      imagem:'https://editors.dexerto.com/wp-content/uploads/2023/06/12/52965514274_5d4e4fef27_k_1600x900.jpg'
    },
    {
      id:uuidv4(),
      nome:'Demon1',
      imagem:'https://i.ytimg.com/vi/zA0_1NNgCR4/maxresdefault.jpg'
    },
    {
      id:uuidv4(),
      nome:'Victor',
      imagem:'https://pbs.twimg.com/profile_images/1663800147464327168/ezChBUw1_400x400.jpg'
    },
    {
      id:uuidv4(),
      nome:'Crashies',
      imagem:'https://liquipedia.net/commons/images/thumb/1/11/NRG_crashies_at_VCT_LOCK_IN_Sao_Paolo.jpg/600px-NRG_crashies_at_VCT_LOCK_IN_Sao_Paolo.jpg'
    },
    



  ])

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'LOUD',
      corPrimaria: '#14c820',
      logo: '/logo/LOUD_logo.svg.png'
    },
    {
      id: uuidv4(),
      nome: '100 THIEVES',
      corPrimaria: '#353333',
      logo: '/logo/100_Thieves_logo.svg.png'

    },
    {
      id: uuidv4(),
      nome: 'CLOUD9',
      corPrimaria: '#1a96e3',
      logo: '/logo/Cloud9.png'

    },
    {
      id: uuidv4(),
      nome: 'EG',
      corPrimaria: '#949191',
      logo: '/logo/EvilGenuises.webp'

    },
    {
      id: uuidv4(),
      nome: 'FURIA',
      corPrimaria: '#353333',
      logo: '/logo/Furia_Esports_logo.png'

    },
    {
      id: uuidv4(),
      nome: 'G2',
      corPrimaria: '#5c5959',
      planoDeFundo: 'https://g2esports.com/cdn/shop/files/G2_Esports_Preview.jpg?v=1682085995'

    },
    {
      id: uuidv4(),
      nome: 'KRÜ',
      corPrimaria: '#e310df',
      planoDeFundo: 'https://fraglider.com.br/wp-content/uploads/2022/05/kru_wall.png'

    },
    {
      id: uuidv4(),
      nome: 'LEVIATÁN',
      corPrimaria: '#4699dd',
      planoDeFundo: 'https://files.bo3.gg/uploads/news/19007/title_image/960x480-e9c897cbdf903f3a6488a01b6cc147b1.webp'

    },
    {
      id: uuidv4(),
      nome: 'MIBR',
      corPrimaria: '#cabc3d',
      planoDeFundo: 'https://static.mibr.gg/uploads/2021/08/28132525/Wallpaper-Institucional-16x9-1-scaled.jpg'

    },
    {
      id: uuidv4(),
      nome: 'NRG',
      corPrimaria: '#252525',
      planoDeFundo: 'https://wallpapercave.com/wp/wp6479069.png'

    },
    {
      id: uuidv4(),
      nome: 'SENTINELS',
      corPrimaria: '#ce2020',
      planoDeFundo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d5d02488-fb0c-4739-887f-3b4ad8c5b85f-channel_offline_image-1920x1080.png'

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
      setColaboradores(JSON.parse(savedColaboradores));
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
        times={times.map(time => time.nome)}
        colaboradorCadastrado={colaborador => colaboradorAdicionado(colaborador)} />
      <section className="times">
        <h1>Minha organização</h1>
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
          deletar={deletarColaborador}
          favoritar={verificaFavorito}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}//filtrando para que para cada time durante a interação apareça somente o colaborador que esteja nesse time
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
