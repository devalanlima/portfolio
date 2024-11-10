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
      `26/02/2023 - Foi a primeira vez que criei algo do zero. Um amigo meu, que é desenvolvedor, estava trabalhando em um projeto e precisava recriar um bingo, mas estava com dificuldade para encontrar um design adequado. Então, fiz este projeto e mostrei para ele. Utilizei sombras e movimento para dar a impressão de elementos 3D, embora tudo seja em 2D. Ele gostou tanto que acabou replicando o design no projeto dele.`,
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
      `15/06/2023 - Encontrei um design que achei muito bonito, então resolvi criar uma página o replicando. O maior desafio foi que eu tinha apenas uma imagem como referência, então precisei criar os componentes apenas com base no visual. Além disso, havia um mapa interativo, que me deu um certo trabalho para funcionar da maneira que eu queria.`,
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
      `18/08/2023 - Estava procurando projetos para aprender a usar APIs, mas só encontrava exemplos de Pokédex. Resolvi variar um pouco e encontrei essa API do jogo de cartas, então criei um "marketplace" de cartas NFT e adicionei esse efeito de movimentação 3D, que apesar de existirem inumeros parecidos na internet, me desafiei a criar sozinho e me orgulho muito de ter conseguido.`,
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
      "12/12/2023 - Adoro filmes e séries, tenho mais de 900 filmes assistidos no letterboxd, então resolvi unir a minha paixão pelo cinema com a minha paixão pelo desenvolvimento. Enquanto aprendia Nuxt.js, criei esta página que utiliza a API do TMDB para acessar o banco de dados de filmes e séries e a API do JustWatch para localizar os serviços de streaming que disponibilizam essas mídias. Foi um desafio, principalmente porque eu ainda estava aprendendo a usar APIs e criando todos os componentes do zero, sem utilizar frameworks com componentes prontos.Minha intenção era adicionar mais funcionalidades à aplicação, como autenticação, criação de listas de filmes, avaliações e comentários. No entanto, percebi que estava tentando fazer muitas coisas para as quais ainda não tinha o conhecimento necessário, especialmente em back-end. Então, decidi deixar essas funcionalidades para um futuro aprimoramento do projeto. Mesmo assim, fiquei muito satisfeito com o resultado.",
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
      '25/04/2024 - Na época, minha fonte de renda eram jogos NFT que demandavam muita organização. Para isso, criei esta To-Do list simples, mas bem funcional. Implementei um sistema de timer que, ao chegar a zero, emite um alerta sonoro até ser desligado.',
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
      '13/06/2024 - Meu primeiro projeto freelance, desenvolvido para uma streamer de variedades na plataforma Twitch.TV. Nesse projeto, eu deveria reinventar a tradicional brincadeira de festa junina conhecida como pescaria, mas de forma digital. O objetivo era criar uma página onde a influenciadora convidaria os participantes a escolherem um peixe virtual durante a transmissão ao vivo, com a chance de ganhar prêmios, dependendo da sorte. Gostaria de ter desenvolvido esse projeto com o framework Electron, porém eu não tinha conhecimento em Node.js para o back-end, e o tempo para aprender não seria suficiente. Por isso, optei por persistir os dados necessários utilizando o localStorage do navegador.',
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
      '03/10/2024 - Iniciei meu aprendizado em React, e a melhor maneira de aprender uma tecnologia nova, na minha opinião, é criando algo sozinho. Então procurei na comunidade do Figma algo que fosse simples, bonito e que me permitisse aplicar os conceitos que aprendi. Foi aí que encontrei este kit de botões com vários estados, e achei perfeito para treinar tanto minhas habilidades em React quanto em Figma. Os devidos créditos ao autor do design estão atribuídos na documentação do projeto no GitHub.',
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
      '08/11/2024 - Portfólio criado com o objetivo de demonstrar minhas habilidades nas tecnologias nas quais estou me aprofundando. Este foi meu primeiro projeto completo em React, pois eu estava mais acostumado a utilizar Vue. Meu maior desafio foi a sintaxe, que é um pouco diferente da do Vue, mas nada muito complexo. A principal diferença que notei é que minhas variáveis não são diretamente mutáveis e, para torná-las reativas, preciso sempre chamar uma função para modificar o valor original. No Vue, eu poderia simplesmente alterar o valor atribuindo um novo.',
  },
];

export default projects.reverse();
