(function(doc, win) {
  'use strict'

  const database = [
    {
      color: '#f74d5f',
      iconSymbol: '🎉',
      iconCode: '&#127881',
      commit: 'feat',
      code: ':tada:',
      aWord: 'base',
      descriptionSubtitled: 'Begin a project',
      descriptionDubbed: 'Iniciar um projeto'
    },
    {
      color: '#ffe55f',
      iconSymbol: '✨',
      iconCode: '&#10024',
      commit: 'feat',
      code: ':sparkles:',
      aWord: 'criação',
      descriptionSubtitled: 'Introduce new feature',
      descriptionDubbed: 'Introduzir novo recurso'
    },
    {
      color: '#00a9f0',
      iconSymbol: '🚀',
      iconCode: '&#128640',
      commit: 'feat',
      code: ':rocket:',
      aWord: 'implementação',
      descriptionSubtitled: 'Deploy stuff',
      descriptionDubbed: 'Implantar coisas'
    },
    {
      color: '#ff7281',
      iconSymbol: '🎨',
      iconCode: '&#127912',
      commit: 'git',
      code: ':art:',
      aWord: 'estrutura',
      descriptionSubtitled: 'Improve structure/format of the code',
      descriptionDubbed: 'Melhorar a estrutura/formato do código'
    },
    {
      color: '#40c4ff',
      iconSymbol: '⚡️',
      iconCode: '&#9889',
      commit: 'git',
      code: ':zap:',
      aWord: 'desempenho',
      descriptionSubtitled: 'Improve performance',
      descriptionDubbed: 'Melhorar o desempenho'
    },
    {
      color: '#80deea',
      iconSymbol: '💄',
      iconCode: '&#128132',
      commit: 'style',
      code: ':lipstick:',
      aWord: 'estilo',
      descriptionSubtitled: 'Add or update the UI and style file',
      descriptionDubbed: 'Adicionar ou atualizar a interface do usuário e o arquivo de estilo'
    },
    {
      color: '#ffb74d',
      iconSymbol: '🚧',
      iconCode: '&#128679',
      commit: 'git',
      code: ':construction:',
      aWord: 'andamento',
      descriptionSubtitled: 'Work in progress',
      descriptionDubbed: 'Trabalho em progresso'
    },
    {
      color: '#77e856',
      iconSymbol: '♻️',
      iconCode: '&#',
      commit: 'git',
      code: ':recycle:',
      aWord: 'refatorar',
      descriptionSubtitled: 'Refactor code',
      descriptionDubbed: 'Refatorar código'
    },
    {
      color: '#a78674',
      iconSymbol: '💩',
      iconCode: '&#128169',
      commit: 'git',
      code: ':poop:',
      aWord: 'melhorar',
      descriptionSubtitled: 'Write bad code that needs to be improved',
      descriptionDubbed: 'Escrever código ruim que precisa ser melhorado'
    },
    {
      color: '#ffce49',
      iconSymbol: '✏️',
      iconCode: '&#9999',
      commit: 'git',
      code: ':pencil2:',
      aWord: 'ortografia',
      descriptionSubtitled: 'Fix typo',
      descriptionDubbed: 'Corrigir erro de digitação'
    },
    {
      color: '#7f39fb',
      iconSymbol: '⚗️',
      iconCode: '&#',
      commit: 'git',
      code: ':alembic:',
      aWord: 'experimento',
      descriptionSubtitled: 'Perform experiment',
      descriptionDubbed: 'Realizar experimento'
    },
    {
      color: '#77e856',
      iconSymbol: '✅',
      iconCode: '&#9989',
      commit: 'test',
      code: ':white_check_mark:',
      aWord: 'teste',
      descriptionSubtitled: 'Add, update, or pass test',
      descriptionDubbed: 'Adicionar, atualizar ou passar no teste'
    },
    {
      color: '#fb584a',
      iconSymbol: '🧪',
      iconCode: '&#',
      commit: 'git',
      code: ':test_tube:',
      aWord: 'falha',
      descriptionSubtitled: 'Add a failing test',
      descriptionDubbed: 'Adicionar um teste com falha'
    },
    {
      color: '#e88849',
      iconSymbol: '💥',
      iconCode: '&#128165',
      commit: 'git',
      code: ':boom:',
      aWord: 'quebra',
      descriptionSubtitled: 'Introduce breaking change',
      descriptionDubbed: 'Introduzir mudança de quebra'
    },
    {
      color: '#ffce49',
      iconSymbol: '🔒️',
      iconCode: '&#128274',
      commit: 'git',
      code: ':lock:',
      aWord: 'segurança',
      descriptionSubtitled: 'Fix security issue',
      descriptionDubbed: 'Corrigir problema de segurança'
    },
    {
      color: '#4dc6dc',
      iconSymbol: '🛂',
      iconCode: '&#128706',
      commit: 'git',
      code: ':passport_control:',
      aWord: 'autorização',
      descriptionSubtitled: 'Work on code related to authorization, role and permission',
      descriptionDubbed: 'Trabalhar no código relacionado à autorização'
    },
    {
      color: '#83beec',
      iconSymbol: '🔐',
      iconCode: '&#128272',
      commit: 'git',
      code: ':closed_lock_with_key:',
      aWord: 'segredo',
      descriptionSubtitled: 'Add or update secret',
      descriptionDubbed: 'Adicionar ou atualizar segredo'
    },
    {
      color: '#ba8049',
      iconSymbol: '🗃️',
      iconCode: '&#128451',
      commit: 'git',
      code: ':card_file_box:',
      aWord: 'database',
      descriptionSubtitled: 'Perform database related change',
      descriptionDubbed: 'Realizar alteração relacionada ao banco de dados'
    },
    {
      color: '#c5e763',
      iconSymbol: '🌱',
      iconCode: '&#127793',
      commit: 'git',
      code: ':seedling:',
      aWord: 'seeder',
      descriptionSubtitled: 'Add or update seed file',
      descriptionDubbed: 'Adicionar ou atualizar o arquivo de semente'
    },
    {
      color: '#e25631',
      iconSymbol: '🍱',
      iconCode: '&#127857',
      commit: 'git',
      code: ':bento:',
      aWord: 'ativo',
      descriptionSubtitled: 'Add or update assets',
      descriptionDubbed: 'Adicionar ou atualizar ativo'
    },
    {
      color: '#8bdfe7',
      iconSymbol: '🙈',
      iconCode: '&#128584',
      commit: 'git',
      code: ':see_no_evil:',
      aWord: 'git',
      descriptionSubtitled: 'Add or update a gitignore file',
      descriptionDubbed: 'Adicionar ou atualizar um arquivo gitignore'
    },
    {
      color: '#cb63e6',
      iconSymbol: '🏷️',
      iconCode: '&#127991',
      commit: 'git',
      code: ':label:',
      aWord: 'tipagem',
      descriptionSubtitled: 'Add or update type',
      descriptionDubbed: 'Adicionar ou atualizar tipo'
    },
    {
      color: '#00e676',
      iconSymbol: '📝',
      iconCode: '&#128221',
      commit: 'doc',
      code: ':memo:',
      aWord: 'documentação',
      descriptionSubtitled: 'Add or update documentation',
      descriptionDubbed: 'Adicionar ou atualizar a documentação'
    },
    {
      color: '#c35f76',
      iconSymbol: '📄',
      iconCode: '&#128196',
      commit: 'git',
      code: ':page_facing_up:',
      aWord: 'licença',
      descriptionSubtitled: 'Add or update license',
      descriptionDubbed: 'Adicionar ou atualizar licença'
    },
    {
      color: '#80deea',
      iconSymbol: '🔖',
      iconCode: '&#128278',
      commit: 'git',
      code: ':bookmark:',
      aWord: 'versão',
      descriptionSubtitled: 'Release/version tag',
      descriptionDubbed: 'Tag de lançamento/versão'
    },
    {
      color: '#ffce49',
      iconSymbol: '🚩',
      iconCode: '&#128681',
      commit: 'git',
      code: ':triangular_flag_on_post:',
      aWord: 'flag',
      descriptionSubtitled: 'Add, update, or remove feature flag',
      descriptionDubbed: 'Adicionar, atualizar ou remover sinalizador de recurso'
    },
    {
      color: '#ff9d44',
      iconSymbol: '🔥',
      iconCode: '&#128293',
      commit: 'git',
      code: ':fire:',
      aWord: 'remover',
      descriptionSubtitled: 'Remove code or file',
      descriptionDubbed: 'Remover código ou arquivo'
    },
    {
      color: '#b0bcc2',
      iconSymbol: '⚰️',
      iconCode: '&#',
      commit: 'git',
      code: ':coffin:',
      aWord: 'obsoleto',
      descriptionSubtitled: 'Remove dead code',
      descriptionDubbed: 'Remover código morto'
    },
    {
      color: '#7a6c57',
      iconSymbol: '🗑️',
      iconCode: '&#128465',
      commit: 'git',
      code: ':wastebasket:',
      aWord: 'limpo',
      descriptionSubtitled: 'Deprecate code that needs to be cleaned up',
      descriptionDubbed: 'Descontinuar código que precisa ser limpo'
    },
    {
      color: '#8cd842',
      iconSymbol: '🐛',
      iconCode: '&#128027',
      commit: 'git',
      code: ':bug:',
      aWord: 'erro',
      descriptionSubtitled: 'Fix a bug',
      descriptionDubbed: 'Corrigir um erro'
    },
    {
      color: '#fbcfb7',
      iconSymbol: '🩹',
      iconCode: '&#',
      commit: 'git',
      code: ':adhesive_bandage:',
      aWord: 'simples',
      descriptionSubtitled: 'Simple fix for a non-critical issue',
      descriptionDubbed: 'Correção simples para um problema não crítico'
    },
    {
      color: '#fb584a',
      iconSymbol: '🚑️',
      iconCode: '&#128657',
      commit: 'git',
      code: ':ambulance:',
      aWord: 'grave',
      descriptionSubtitled: 'Critical hotfix',
      descriptionDubbed: 'Correção crítica'
    },
    {
      color: '#c7cb12',
      iconSymbol: '🥅',
      iconCode: '&#129349',
      commit: 'git',
      code: ':goal_net:',
      aWord: 'catch',
      descriptionSubtitled: 'Catch error',
      descriptionDubbed: 'Erro de captura'
    },
    {
      color: '#ffe55f',
      iconSymbol: '🧐',
      iconCode: '&#129488',
      commit: 'git',
      code: ':monocle_face:',
      aWord: 'inspeção',
      descriptionSubtitled: 'Data exploration/inspection',
      descriptionDubbed: 'Exploração/inspeção de dados'
    },
    {
      color: '#ef5350',
      iconSymbol: '⬇️',
      iconCode: '&#11015',
      commit: 'git',
      code: ':arrow_down:',
      aWord: 'desatualizar',
      descriptionSubtitled: 'Downgrade dependency',
      descriptionDubbed: 'Desatualizar dependência'
    },
    {
      color: '#00e676',
      iconSymbol: '⬆️',
      iconCode: '&#10133',
      commit: 'git',
      code: ':arrow_up:',
      aWord: 'atualizar',
      descriptionSubtitled: 'Upgrade dependency',
      descriptionDubbed: 'Atualizar dependência'
    },
    {
      color: '#39c2f1',
      iconSymbol: '📌',
      iconCode: '&#128204',
      commit: 'git',
      code: ':pushpin:',
      aWord: 'fixar',
      descriptionSubtitled: 'Pin dependency to specific version',
      descriptionDubbed: 'Fixar versão da dependência'
    },
    {
      color: '#00e676',
      iconSymbol: '➕',
      iconCode: '&#11014',
      commit: 'git',
      code: ':heavy_plus_sign:',
      aWord: 'adicionar',
      descriptionSubtitled: 'Add dependency',
      descriptionDubbed: 'Adicionar dependência'
    },
    {
      color: '#ef5350',
      iconSymbol: '➖',
      iconCode: '&#11015',
      commit: 'git',
      code: ':heavy_minus_sign:',
      aWord: 'remover',
      descriptionSubtitled: 'Remove dependency',
      descriptionDubbed: 'Remove dependência'
    },
    {
      color: '#d8568c',
      iconSymbol: '⏪️',
      iconCode: '&#9194',
      commit: 'git',
      code: ':rewind:',
      aWord: 'reverter',
      descriptionSubtitled: 'Revert change',
      descriptionDubbed: 'Reverter alteração'
    },
    {
      color: '#dfc011',
      iconSymbol: '🔀',
      iconCode: '&#128256',
      commit: 'git',
      code: ':twisted_rightwards_arrows:',
      aWord: 'mesclar',
      descriptionSubtitled: 'Merge branch',
      descriptionDubbed: 'Mesclar ramificação'
    },
    {
      color: '#e6a97a',
      iconSymbol: '📦️',
      iconCode: '&#128230',
      commit: 'git',
      code: ':package:',
      aWord: 'pacote',
      descriptionSubtitled: 'Add or update compiled file or package',
      descriptionDubbed: 'Adicionar ou atualizar arquivo ou pacote compilado'
    },
    {
      color: '#23b4d2',
      iconSymbol: '🔊',
      iconCode: '&#128266',
      commit: 'git',
      code: ':loud_sound:',
      aWord: 'log',
      descriptionSubtitled: 'Add or update log',
      descriptionDubbed: 'Adicionar ou atualizar registro'
    },
    {
      color: '#ffc400',
      iconSymbol: '🔇',
      iconCode: '&#128263',
      commit: 'git',
      code: ':mute:',
      aWord: 'log',
      descriptionSubtitled: 'Remove log',
      descriptionDubbed: 'Remover registro'
    },
    {
      color: '#c661df',
      iconSymbol: '💡',
      iconCode: '&#128161',
      commit: 'git',
      code: ':bulb:',
      aWord: 'comentário',
      descriptionSubtitled: 'Add or update comment in source code',
      descriptionDubbed: 'Adicionar ou atualizar comentário no código fonte'
    },
    {
      color: '#43a182',
      iconSymbol: '🔧',
      iconCode: '&#128295',
      commit: 'git',
      code: ':wrench:',
      aWord: 'configuração',
      descriptionSubtitled: 'Add or update configuration file',
      descriptionDubbed: 'Adicionar ou atualizar arquivo de configuração'
    },
    {
      color: '#8cb7da',
      iconSymbol: '🔨',
      iconCode: '&#128296',
      commit: 'git',
      code: ':hammer:',
      aWord: 'script',
      descriptionSubtitled: 'Add or update development script',
      descriptionDubbed: 'Adicionar ou atualizar script de desenvolvimento'
    },
    {
      color: '#ee5353',
      iconSymbol: '📈',
      iconCode: '&#128172',
      commit: 'git',
      code: ':chart_with_upwards_trend:',
      aWord: 'análise',
      descriptionSubtitled: 'Add or update analytics or track code',
      descriptionDubbed: 'Adicione ou atualize análises ou código de rastreamento'
    },
    {
      color: '#b38188',
      iconSymbol: '🌐',
      iconCode: '&#127760',
      commit: 'git',
      code: ':globe_with_meridians:',
      aWord: 'localização',
      descriptionSubtitled: 'Internationalization and localization',
      descriptionDubbed: 'Internacionalização e localização'
    },
    {
      color: '#c5e763',
      iconSymbol: '👽️',
      iconCode: '&#128125',
      commit: 'git',
      code: ':alien:',
      aWord: 'api',
      descriptionSubtitled: 'Update code due to external API change',
      descriptionDubbed: 'Atualizar código devido a alteração de API externa'
    },
    {
      color: '#ef584a',
      iconSymbol: '🚚',
      iconCode: '&#128666',
      commit: 'git',
      code: ':truck:',
      aWord: 'caminho',
      descriptionSubtitled: 'Move or rename resource (File, path, route)',
      descriptionDubbed: 'Mover ou renomear recurso (Arquivo, caminho, rota)'
    },
    {
      color: '#00b1fb',
      iconSymbol: '♿️',
      iconCode: '&#9855',
      commit: 'git',
      code: ':wheelchair:',
      aWord: 'acessibilidade',
      descriptionSubtitled: 'Improve accessibility',
      descriptionDubbed: 'Melhorar a acessibilidade'
    },
    {
      color: '#ffce49',
      iconSymbol: '🚸',
      iconCode: '&#128696',
      commit: 'git',
      code: ':children_crossing:',
      aWord: 'usabilidade',
      descriptionSubtitled: 'Improve user experience/usability',
      descriptionDubbed: 'Melhore a experiência/usabilidade do usuário'
    },
    {
      color: '#f15df7',
      iconSymbol: '📱',
      iconCode: '&#128241',
      commit: 'git',
      code: ':iphone:',
      aWord: 'responsividade',
      descriptionSubtitled: 'Work on responsive design',
      descriptionDubbed: 'Trabalhe em design responsivo'
    },
    {
      color: '#89e79d',
      iconSymbol: '💫',
      iconCode: '&#128171',
      commit: 'git',
      code: ':dizzy:',
      aWord: 'animação',
      descriptionSubtitled: 'Add or update animation and transition',
      descriptionDubbed: 'Adicionar ou atualizar animação e transição'
    },
    {
      color: '#83beec',
      iconSymbol: '👔',
      iconCode: '&#128084',
      commit: 'git',
      code: ':necktie:',
      aWord: 'logo',
      descriptionSubtitled: 'Add or update business logi',
      descriptionDubbed: 'Adicionar ou atualizar o logo comercial'
    },
    {
      color: '#b589e7',
      iconSymbol: '📸',
      iconCode: '&#128248',
      commit: 'git',
      code: ':camera_flash:',
      aWord: 'instantâneo',
      descriptionSubtitled: 'Add or update snapshot',
      descriptionDubbed: 'Adicionar ou atualizar instantâneo'
    },
    {
      color: '#ffe55f',
      iconSymbol: '🔍️',
      iconCode: '&#128269',
      commit: 'git',
      code: ':mag:',
      aWord: 'busca',
      descriptionSubtitled: 'Improve SEO',
      descriptionDubbed: 'Melhore a otimização para motores de busca'
    },
    {
      color: '#cedae6',
      iconSymbol: '💬',
      iconCode: '&#128172',
      commit: 'git',
      code: ':speech_balloon:',
      aWord: 'literal',
      descriptionSubtitled: 'Add or update text and literal',
      descriptionDubbed: 'Adicionar ou atualizar texto e literal'
    },
    {
      color: '#f5b11f',
      iconSymbol: '👥',
      iconCode: '&#128101',
      commit: 'git',
      code: ':busts_in_silhouette:',
      aWord: 'colaborador',
      descriptionSubtitled: 'Add or update contributor',
      descriptionDubbed: 'Adicionar ou atualizar colaborador'
    },
    {
      color: '#a3f1eb',
      iconSymbol: '🏗️',
      iconCode: '&#127959',
      commit: 'git',
      code: ':building_construction:',
      aWord: 'arquitetura',
      descriptionSubtitled: 'Make architectural change',
      descriptionDubbed: 'Faça uma mudança arquitetônica'
    },
    {
      color: '#8cf56c',
      iconSymbol: '🩺',
      iconCode: '&#',
      commit: 'git',
      code: ':stethoscope:',
      aWord: 'integridade',
      descriptionSubtitled: 'Add or update healthcheck',
      descriptionDubbed: 'Adicionar ou atualizar verificação de integridade'
    },
    {
      color: '#fd7f45',
      iconSymbol: '🧱',
      iconCode: '&#',
      commit: 'git',
      code: ':bricks:',
      aWord: 'infraestrutura',
      descriptionSubtitled: 'Infrastructure related change',
      descriptionDubbed: 'Mudança relacionada à infraestrutura'
    },
    {
      color: '#b66a6a',
      iconSymbol: '🥚',
      iconCode: '&#129370',
      commit: 'git',
      code: ':egg:',
      aWord: 'surpresa',
      descriptionSubtitled: 'Add or update an easter egg',
      descriptionDubbed: 'Adicionar ou atualizar um ovo de páscoa'
    },
    {
      color: '#86B837',
      iconSymbol: '🧑‍💻',
      iconCode: '&#129489 &#128187',
      commit: 'git',
      code: ':technologist:',
      aWord: 'dev',
      descriptionSubtitled: 'Improve developer experienc',
      descriptionDubbed: 'Melhore a experiência do desenvolvedor'
    },
    {
      color: '#b3c0b1',
      iconSymbol: '💸',
      iconCode: '&#128184',
      commit: 'git',
      code: ':money_with_wings:',
      aWord: 'dinheiro',
      descriptionSubtitled: 'Add sponsorships or money related infrastructure',
      descriptionDubbed: 'Adicione patrocínios ou infraestrutura relacionada a dinheiro'
    },
    {
      color: '#536dfe',
      iconSymbol: '🚨',
      iconCode: '&#128680',
      commit: 'git',
      code: ':rotating_light:',
      aWord: 'compilador',
      descriptionSubtitled: 'Fix compiler/linter warning',
      descriptionDubbed: 'Corrigir aviso do compilador/linter'
    },
    {
      color: '#c5e763',
      iconSymbol: '💚',
      iconCode: '&#128154',
      commit: '1F49A',
      code: ':green_heart:',
      aWord: 'CI',
      descriptionSubtitled: 'Fix CI build',
      descriptionDubbed: 'Corrigir compilação de CI'
    },
    {
      color: '#64b5f6',
      iconSymbol: '👷',
      iconCode: '&#128119',
      commit: 'git',
      code: ':construction_worker:',
      aWord: 'CI',
      descriptionSubtitled: 'Add or update CI build system',
      descriptionDubbed: 'Adicionar ou atualizar o sistema de compilação de CI'
    },
    {
      color: '#fbb64b',
      iconSymbol: '🍻',
      iconCode: '&#127867',
      commit: 'git',
      code: ':beers:',
      aWord: 'bêbado',
      descriptionSubtitled: 'Write code drunkenly',
      descriptionDubbed: 'Escrever código embriagado'
    },
    {
      color: '#ff7281',
      iconSymbol: '🤡',
      iconCode: '&#129313',
      commit: 'git',
      code: ':clown_face:',
      aWord: 'zombar',
      descriptionSubtitled: 'Mock thing',
      descriptionDubbed: 'Coisa simulada'
    },
  ]


  for(let index = 0; index < database.length; index++) {
    doc.querySelector(`body`).innerHTML += `
      <article id='${index}'>
        <header style='background-color: ${database[index].color};'>
          <a>${database[index].iconSymbol}</a>

          <div hidden>
            <p>${database[index].iconSymbol} <strong>Commit:</strong> ${database[index].commit}</p>
            <p>${database[index].descriptionDubbed}</p>
          </div>
        </header>

        <main
          title="Descrição não traduzida: ${database[index].descriptionSubtitled}"
        >
          <p>${database[index].aWord}</p>
        </main>
      </article>
    `

    doc.querySelectorAll("article").forEach((article) => {
      article.addEventListener("click", () => {
        article.querySelectorAll("a").forEach((a) => {
          article.querySelectorAll("div").forEach((div) => {
            if (div.hasAttribute("hidden")) {
              a.setAttribute("hidden", "")
              div.removeAttribute("hidden")
            } else {
              a.removeAttribute("hidden")
              div.setAttribute("hidden", "")
            }
          })
        })

      })
    })
  }
})(document, window)
