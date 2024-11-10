import { Project } from "../types/project";

const projects: Array<Project> = [
  {
    name: 'Bingo!',
    url: 'https://bingotestefront.netlify.app/',
    image: '/portfolio/assets/bingo.png',
    skills: [
      'javascript',
      'html',
      'css'
    ],
    description:
      `26/02/2023 - Primeira vez que criei algo do zero. Um amigo meu que é desenvolvedor estava desenvolvendo um projeto e precisava recriar um bingo, mas estava com dificuldade para encontrar o design, então eu fiz esse projeto e mostrei pra ele, utilizei sombras e movimento pra parecer que existem elementos 3D mas é tudo 2D, ele gostou tanto que replicou o design no projeto dele.`,
  },
  {
    name: 'Modern House',
    url: 'https://modernrlshouse.netlify.app/',
    image: '/portfolio/assets/modernhouse.png',
    skills: [
      'javascript',
      'html',
      'css'
    ],
    description:
      `10/04/2023 - Minha primeira landing page, foi a primeira vez que tive contato com responsividade e componentização. Foi utilizado apenas HTML, CSS e Javascript puro nesta página web.`,
  },
  {
    name: 'Travel Equator',
    url: 'https://equatortravelwebsite.netlify.app/',
    image: '/portfolio/assets/equator.png',
    skills: [
      'vue',
      'javascript',
      'tailwindcss',
      'css',
      'html',
      'git',
      'github',
    ],
    description:
      `15/06/2023 - Encontrei um design e achei muito bonito, então resolvi criar essa página replicando ele, o maior desafio foi que era apenas uma imagem, então tive que criar os componentes apenas no visual, também continha um mapa interativo que lembro ter me dado um certo trabalho para funcionar da maneira que eu queria.`,
  },
  {
    name: 'PokePlace',
    url: 'https://pokeplace.netlify.app/',
    image: '/portfolio/assets/pokeplace.png',
    skills: [
      'vue',
      'javascript',
      'tailwindcss',
      'css',
      'html',
      'git',
      'github',
      'photoshop'
    ],
    description:
      `18/08/2023 - Estava procurando projetos para aprender a utilizar API's e só apareciam pokedex, resolvi dar uma variada e encontrei essa API de cartas, então criei um "marketplace" de cartas NFT e adicionei esse efeito de movimentação 3D, que apesar de existirem inumeros parecidos na internet, eu me desafiei a criar sozinho e me orgulho muito de ter conseguido.`,
  },
  {
    name: 'Seriatonando',
    url: 'https://seriatonando.netlify.app/pt-BR/trending',
    image: '/portfolio/assets/seriatonando.png',
    skills: [
      'vue',
      'typescript',
      'tailwindcss',
      'html',
      'git',
      'github',
      'figma',
    ],
    description:
      "12/12/2023 - Adoro filmes e séries, tenho mais de 900 filmes assistidos no letterboxd, então resolvi unir a minha paixão pelo cinema com a minha paixão pelo desenvolvimento. Enquanto aprendia Nuxt.Js, criei essa página que utiliza a API do TMDB para ter acesso ao banco de dados que contém os filmes e séries, e a API do JustWatch para poder localizar os serviços de streaming que disponibilizam essas midias. Deu bastante trabalho principalmente porque eu ainda estava aprendendo como funcionavam as API's e também pelo fato de criar todos os componentes do zero sem utilizar nenhum framework com componentes pré-feitos. Deveria ter mais funcionalidades nesta aplicação como autenticação, criação de listas de filmes, avaliações, comentários... Mas percebi que eu estava indo rápido demais e querendo criar muita coisa que eu ainda não estava pronto nem tinha conhecimento necessário, principalmente do back-end, então resolvi deixar esse projeto para o futuro. Mas fiquei muito feliz com o resultado, inclusive a página 'Trending' eu utilizo até hoje quando quero encontrar algo novo para assistir.",
  },
  {
    name: 'To-Do Timer',
    url: 'https://todowithcountdown.netlify.app/',
    image: '/portfolio/assets/todotimer.png',
    skills: [
      'vue',
      'typescript',
      'tailwindcss',
      'html',
      'git',
      'github',
    ],
    description:
      '25/04/2024 - Na época minha fonte de renda eram jogos NFT que demandavam muita organização. Para isso eu criei esse To-Do bem simples porém bem funcional, implementei um sistema de timer que quando o tempo chega a zero um alerta sonoro é emitido até ser desligado.',
  },
  {
    name: 'Pescaria Digital',
    url: 'https://choke7pescaria.netlify.app/',
    image: '/portfolio/assets/pescariaDigital.png',
    skills: [
      'vue',
      'typescript',
      'tailwindcss',
      'html',
      'git',
      'github',
      'photoshop'
    ],
    description:
      '13/06/2024 - Meu primeiro projeto freelance, desenvolvido para uma streamer de variedades na plataforma Twitch.TV. Neste projeto eu deveria reinventar a típica brincadeira de festa junina conhecida como pescaria, mas desta vez de maneira digital. O objetivo era desenvolver uma página onde a influenciadora convidaria os participantes a escolherem um peixe virtual durante a transmissão ao vivo, com a chance de ganhar prêmios, dependendo da sorte. Eu gostaria de ter desenvolvido esse projeto com o framework Electron, porém eu não conhecia nada de Node.Js para o back-end e o tempo para aprender não seria suificente, então a minha maneira de persistir os dados necessários foi utilizando o localStorage do navegador.',
  },
  {
    name: 'Button Ui Kit',
    url: 'https://free-responsive-button-ui-kit-react.netlify.app/',
    image: '/portfolio/assets/buttonUI.png',
    skills: [
      'react',
      'typescript',
      'tailwindcss',
      'html',
      'git',
      'github',
      'figma'
    ],
    description:
      '03/10/2024 - Iniciei meu aprendizado em React e a melhor maneira de aprender uma tecnologia nova, na minha opinião, é criando algo sozinho, mas como minha habilidade em design não é das mais incríveis, procurei na comunidade do figma algo que fosse simples, bonito e que eu pudesse utilizar os conceitos que aprendi. Então encontrei esse kit de botões com vários estados e achei perfeito para treinar tanto minhas habilidades em React quanto em Figma. Os devidos créditos ao autor do design estão atribuidos na documentação do projeto no GitHub.',
  },
  {
    name: 'Portfolio React',
    url: 'https://devalanlima.github.io/portfolio/',
    image: '/portfolio/assets/portfolioMockup.png',
    skills: [
      'react',
      'typescript',
      'tailwindcss',
      'html',
      'git',
      'github',
      'figma',
      'photoshop'
    ],
    description:
      '08/11/2024 - Porfólio criado com o intuito de demonstrar as minhas habilidades nas tecnologias que estou me aprofundando. Este foi meu primeiro projeto completo em React, já que estava acostumado a utilizar Vue. Meu maior desafio foi a sintaxe, já que é levemente diferente do Vue, mas nada muito complexo, a maior diferença que notei foi que minhas variáveis não são diretamente mutaveis e que para tornalas reativas eu preciso sempre chamar uma função para modificar o valor original, diferente do Vue que eu posso simplesmente alterar o valor atribuindo um novo.',
  },
];

export default projects.reverse();
