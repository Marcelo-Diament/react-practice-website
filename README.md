# React Practice Website Base

_Prática de ReactJS: criação de site simples_

## Passo a Passo

### 01. Estrutura do Projeto

Para maiores detalhes, acesse a _branch_ `feature/01-project-structure` .

#### 01.01. Criar o App React

Basta acessar a pasta do projeto e executar o comando `npx create-react-app nome-do-app` . No caso nomear como `frontend` . Ou seja, temos a pasta do projeto ( `react-practice-website` ) e, dentro dela, a pasta responsável pelo nosso app React.js ( `./frontend` ). Saiba mais sobre o [Create React App](https://github.com/facebook/create-react-app) clicando [aqui](https://pt-br.reactjs.org/docs/create-a-new-react-app.html) - confira também o pacote no [npm](https://www.npmjs.com/package/create-react-app) ou no [yarn](https://yarnpkg.com/package/create-react-app).

#### 01.02. Limpar arquivos desnecessários

Em seguida, vamos apagar alguns arquivos desnecessários para o nosso projeto. São:

* `./frontend/src/App.test`

* `./frontend/src/reportWebVitals.js`

* `./frontend/src/setupTests.js`

Também apagaremos os seguintes trechos do arquivo `index.js` :

``` js
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

#### 01.03. Componentes

Então adicionamos os componentes base de nosso projeto. São:

* Header (cabeçalho)

* Main (container do conteúdo principal)

* MainBanner (banner de destaque)

* Shelf (vitrine ou prateleira - container de _cards_)

* Card (_card_ de um artigo, produto ou serviço - um _preview_ contido em uma _shelf_, ou prateleira)

* Form (formulário)

* Footer (rodapé)

Cada um destes componente terá sua própria pasta (dentro de `./frontend/src/components` ) com uma pasta de mesmo nome (ex.: `./frontend/src/components/Header` ) e, dentro dessa pasta, teremos um arquivo `index.js` (responsável por definir o componente) e `style.css` (responsável pelo estilo específico do componente).

#### 01.04. Páginas

Agora adicionaremos as páginas base de nosso projeto (funcionam iguais aos componentes). São:

* Home (página inicial)

* Sobre (página institucional)

* Categoria (vitrine de produtos - ou serviços, artigos, posts...)

* Produto (detalhe do produto - ou serviço, artigo, post...)

* Contato (página de contato)

Cada uma destas página terá sua própria pasta (dentro de `./frontend/src/pages` ) com uma pasta de mesmo nome (ex.: `./frontend/src/pages/Home` ) e, dentro dessa pasta, teremos um arquivo `index.js` (responsável por definir a página) e `style.css` (responsável pelo estilo específico da página).

#### 01.05. Helpers

Criaremos uma pasta chamada `Helpers` dentro de `./frontend/src` e um arquivo `index.js` dentro dela. No caso, não precisaremos de arquivo de CSS, pois o intuito dos `Helpers` é criarmos função de auxílio, para evitarmos duplicidade de código e centralizarmos todas as funções auxiliares em um mesmo local. A ideia é termos arquivos específicos por funções (ou grupo de funções), importarmos esses arquivos no `./frontend/src/Helpers/index.js` e acesarmos dentro de nossos componentes ou páginas quando necessário.

#### 01.06. Services

Também criaremos uma pasta `./frontend/src/services/api` para centralizarmos os controles de requisições a APIs. Dentro da pasta `api` criaremos o arquivo `index.js` , onde faremos as requisições para APIs externas.

#### 01.07. Rotas

Por fim, criaremos uma pasta chamada `routes` dentro de `./frontend/src` e, dentro dessa pasta, o arquivo `index.js` . Será responsável pelo roteamento, ou seja, qual componente ou página renderizar de acordo com a URL acessada.

Também instalaremos o [React Router DOM](https://reactrouter.com/web/guides/quick-start), um pacote que nos ajudará a trabalharmos com as rotas - e acessarmos uma série de dados relacionados à navegação - de maneira simples. Para instalar o pacote podemos acessar a pasta `./frontend` e executar `npm install --save react-router-dom` no terminal (podemos instalar o pacote via [npm](https://www.npmjs.com/package/react-router-dom) ou [yarn](https://yarnpkg.com/package/react-router-dom) - mas lembre-se de usar sempre o mesmo gerenciador de pacotes ao longo do projeto).

### 02. Conteúdo Inicial de Marcação

Para maiores detalhes, acesse a _branch_ `feature/02-initial-sample-content` .

#### 02.01. Componente Card

Basicamente importamos o estilo no componente e definimos que esse componente - funcional - deve retornar um `article` com um `h1` e um parágrafo dentro dele. Depois exportamos o componente como _default_.

No arquivo de estilo, simplesmente definimos algumas propriedades para as 3 _tags_ - através das classes ( `className` no React) `card` , `card__title` e `card__description` .

> Perceba que estamos usando um padráo para a nomenclatura de classes de CSS. Esse padrão se chama [BEM](http://getbem.com/). De forma simplificada, definimos maneiras de nomear as classes de acordo com o tipo de tag: **B**loco, **E**lemento ou **M**odificador. Isso facilita a leitura, escrita e manutenção de nosso estilo.

_No caso, o nosso Bloco é o `article.card` e os elementos são o `h1.card__title` e o `p.card__description` . Mas só poderemos ver os resultados após o final dessa etapa._

#### 02.02. Componente Footer

Faremos o mesmo que fizemos com o `Card` , mas ao invés de um `article` , usaremos uma `section` . E, claro, a classe referente ao bloco passa a ser `footer` .

#### 02.03. Componente Header

Faremos quase a mesma coisa. Porém, dessa vez utilizaremos outras _tags_ (como `nav` e `a` ). Outro ponto diferente é que deixaremos um dos links desativado. Para trabalharmos o estilo dessa _tag_ `a` modificada, utilizaremos o conceito de _modifier_ do [BEM](http://getbem.com/). Então aplicaremos a classe `header__nav__item--disabled` .

#### 02.04. Componente MainBanner

Novamente criaremos o corpo do componente e o respectivo estilo.

#### 02.05. Componente Form

Vamos aproveitar a prática para conhecermos/revisitarmos a _tag_ `fieldset` . Ela nada mais é do que um agrupador de `input` / `label` por temas (no caso, Dados Pessoais e Dados Profissionais). O `fieldset` trabalha em conjunto com a _tag_ `legend` (que se torna o título desse grupo). Uma das maiores vantagens de utilizarmos o `fieldset` está atrelada à acessibilidade - isso torna a leitura pelo leitor de telas (ou _screen readers_) mais intuitiva para pessoas que precisam escutar nosso site.

Outro ponto de atenção é quanto ao atributo `for` . No React, seu equivalente é o `htmlFor` (evitando conflitos entre o que é JSX e o que é HTML puro).

Mais uma curiosidade: mesmo aplicando o padrão [BEM](http://getbem.com/), não precisamos - necessariamente - utilizar sempre o rastro todo de _tags_ containers. Perceba que não mencionamos o `fieldset` nas classes `form__content__label` nem na classe `form__content__input` . Esse tipo de decisão vai de acordo com convenções entre o time (não queremos classes extremamente extensas, pois perderíamos justamente a legibilidade do nosso estilo - vale sempre ponderar até que ponto devemos 'detalhar' essas classes). Usando SASS/SCSS as vantagens do [BEM](http://getbem.com/) ficam ainda mais claras - podemos aninhar facilmente as classes para facilitar a escrita do nosso código.

#### 02.06. Componente Shelf

O componente `Shelf` se difere dos demais por importar e utilizar outro componente dentro de si mesmo. Posteriormente vamos refatorar esse e os outros componentes. Mas, por enquanto, vamos simplesmente importar o componente `Card` - `import Card from '../Card'` (repare que não é necessário passar o nome do arquivo `index.js` , passamos apenas o caminho, subindo a pasta com `..` e acessando a pasta do componente). No caso estamos importando 6 vezes o mesmo _card_ (ainda todos iguais).

#### 02.07. Componente Main

Enfim, o último componente: `Main` . Ele basicamente é uma _tag_ `main` que contém os demais componentes. Repare que - atualmente - nosso componente `Main` sempre será o mesmo. Posteriormente deixaremos isso de maneira mais dinâmica, utilizando o conceito de _children_ (filhos, em inglês).

#### 02.08. Páginas

Agora chegou a hora de configurarmos nossas páginas. Simplesmente vamos importar o componente `Main` para cada uma delas (sim, ficarão todas iguais - mas isso só por enquanto).

#### 02.09 App.js

Por fim, vamos atualizar nosso `App.js` , trazendo os componentes e páginas `Header` , `Home` e `Footer` . E vamos limpar nosso `App.css` , deixando apenas o seguinte _reset_:

``` css

* {

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    max-width: 100%;
}
```

> Vamos executar `npm start` (ou `yarn start` ) para vermos como ficou nosso projeto inicial.

_Observação: também faremos pequenos ajustes no estilo para melhorar nosso layout inicial._

### 03. Inserindo _backgroundImage_ no MainBanner via Unsplash

Nesse passo iremos incluir uma imagem de fundo no componente `MainBanner` através de um `fetch` num _endpoint_ do site [Unsplash](https://source.unsplash.com/). Não se trata da API oficial (que nos daria mais possibilidades), mas de uma API simples (_Source Unsplash_), na qual podemos passar alguns parâmetros como tamanhos (_width_ e _height_) e termos de busca. O _endpoint_ que utilizaremos será:

``` sh
https://source.unsplash.com/{WIDTH}x{HEIGHT}/?{TERMO1},{TERMO2},{TERMOS...}
```

Para nossa prática, manteremos as dimensões como 1600 x 600.

Para maiores detalhes, acesse a _branch_ `feature/03-main-banner-unsplash-img` . Recomendo que acesse também a documentação dessa API simples - [Source Unsplash](https://source.unsplash.com/) - e, fica de **desafio**, fazer a integração com a [API Oficial](https://unsplash.com/developers).

#### 03.01. Unsplash Fetch API

Dentro da pasta `./frontend/src/services/api` vamos criar um arquivo chamado `Unsplash.js` . Vamos criar uma função que recebe (como _response_) uma imagem randômica de acordo com os termos passados (no _endpoint_ mencionado). Mas, pensando em escalabilidade, faremos isso de forma que possamos incluir outras funções futuramente sem termos de refatorar o código:

``` js
const getRandomImgByTerm = async (term, callback) => {
    const response = await fetch(`https://source.unsplash.com/1600x600/?${term}`)
    const url = response.url
    callback(url)
}

const Unsplash = {
    getRandomImgByTerm
}

export default Unsplash
```

Basicamente criamos uma função assíncrona que recebe dois argumentos - o termo de busca ( `term` ) e uma função de _callback_ (responsável por definir como a response será utilizada dentro do componente). Então o _fetch_ será realizado e passaremos a URL da imagem (recebido como `response.url` ) para essa função de _callback_ (argumento 2 da função `getRandomImgByTerm` ).

Ao invés de exportarmos a função diretamente, vamos definir um objeto chamado `Unsplash` , que terá uma propriedade chamada `getRandomImgByTerm` que tem como valor, a função de mesmo nome (por isso podemos declarar o nome apenas uma vez, pois nome e valor são iguais). E aí sim exportamos o objeto `Unsplash` .

#### 03.02. services/api

Ainda na pasta `./frontend/src/services/api` , vamos importar o arquivo `Unsplash.js` no arquivo `index.js` . Isso nos permitirá agruparmos todas as chamadas de APIs em um único arquivo. A estrutura é bem semelhante à anterior:

``` js
import Unsplash from './Unsplash'

const api = {
    Unsplash
}

export default api
```

#### 03.03. Realizando a chamada à API no MainBanner

Para que nossa requisição ao _endpoint_ do [Source Unsplash](https://source.unsplash.com/) ocorra corretamente, precisaremos utilizar 2 dos principais _hooks_ do React: o `useState` e o `useEffect` . Além de importar o método que realiza o `fetch` do nosso arquivo `./frontend/src/services/api/index.js` . Vamos por partes:

**1. Importando os _hooks_**

Precisamos importar o `React` e seus _hooks_ com o seguinte trecho de código:

``` js
import React, {
    useState,
    useEffect
} from 'react'
```

**2. Importando o arquivo de APIs**

Também importaremos nosso arquivo responsável por requisições à APIs:

``` js
import api from '../../services/api'
```

E definiremos nossa função que retorna a imagem randômica a partir de um termo (usando desestruturação):

``` js
const {
    getRandomImgByTerm
} = api.Unsplash
```

**3. Estados do componente com useState**

Para carregarmos nosso componente `MainBanner` com _states_ iniciais - e para podermos modificá-los com os métodos _setter_ - vamos usar o _hook_ `useState` , onde definimos o nome do _state_, o nome da função _setter_ e o _state_ inicial. A sintaxe é assim: `const [ stateX, setStateX ] = useState('stateInicial')` . Faremos isso com o termo de busca (para permitirmos que o usuário troque o termo de busca da imagem), o _state_ `isLoading` (para controlarmos se a imagem está sendo carregada ou se já foi carregada) e o _state_ `img` (que contém a URL da imagem recebida da API). Esse trecho ficará assim:

``` js
const [isLoading, setIsLoading] = useState(true)
const [img, setImg] = useState('https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif')
const [term, setTerm] = useState('nature')
```

Perceba que, assim que a página é carregada, temos o estado `isLoading` com o valor `false` , o estado `img` com o valor do GIF e o `term` com o valor `nature` . Em breve veremos como alterar esses estados iniciais (com o método _setter_). Para melhorarmos nosso arquivo, vamos definir os valores iniciais de `img` e `term` como variáveis. Juntando todas as variáveis, ficará assim:

``` js
const {
    getRandomImgByTerm
} = api.Unsplash,
    defaultImg = 'https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif',
    defaultTerm = 'nature',
    [isLoading, setIsLoading] = useState(true),
    [img, setImg] = useState(defaultImg),
    [term, setTerm] = useState(defaultTerm)
```

**4. Callback da função que traz a imagem**

Lembra que precisamos passar um segundo argumento à função que requisita uma imagem na API? É o tal do _callback_, nada mais que uma função que é chamada quando 'chega a hora certa' (quando recebemos um retorno da API). Vamos defini-lo agora!

Como _callback_ da requisição à API, definiremos a seguinte função:

``` js
const imgCallback = url => {
    setImg(url)
    setTimeout(
        setIsLoading(false),
        1500
    )
}
```

Bom, essa função recebe uma URL (da imagem, definimos isso dentro do arquivo `./frontend/src/services/api/Unsplash.js` , no trecho `callback(url)` ).

Essa URL representa o endereço da imagem. Logo, vamos atualizar o _state_ `img` passando o valor recebido no argumento `url` (_response_ da API) através do método _setter_ `setImg` .

Em seguida, trocamos o estado `isLoading` para `false` . Mas, como a imagem pode ser um pouco pesada e demorar a carregar, vamos incluir esse _setter_ ( `setIsLoading` ) dentro de um `setTimeout` de 1.5 segundo. Vale pontuar que não é uma prática a ser adotada normalmente, mas nesse caso, faz sentido (visando uma melhor experiência do usuário).

**5. Controlando efeitos colaterais com useEffect**

O _hook_ `useEffect` serve para atualizarmos somente aquilo que realmente precisa ser atualizado. Então definimos como primeiro argumento a ação que deve ocorrer (uma função _callback_) e, como segundo argumento, passamos um _array_ de dependências - ou seja, elementos que serão observados e que caso sofram alterações dispararão a função de _callback_.

> Podemos passar esse array de dependências vazio, para que o `useEffect` só execute nosso callback quando a página for carregada na primeira vez - mas o React.js disparará um alerta nesse caso. Devemos ainda tomar cuidado para não cairmos num loop infinito, onde o callback modifica o próprio elemento declarado como dependência.

O `useEffect` ainda permite passarmos um terceiro argumento, que seria uma função que 'limparia' o contexto após a execução do _callback_, mas não usaremos esse recurso nessa prática.

Bom, nosso trecho de código (ou _snippet_) ficará assim:

``` js
useEffect(() => {
    getRandomImgByTerm(term, imgCallback)
}, [getRandomImgByTerm, term])
```

Então sempre que o `term` (ou a função `getRandomImgByTerm` ) sofrer alterações, dispararemos a função passando o estado `term` e a função `imgCallback` (que definimos anteriormente).

**6. Troca de imagem no evento de clique**

Agora que temos os estados iniciais prontos e a função que altera a imagem atrelada à mudança do estado `term` , vamos criar uma função para quando clicarmos no botão do `MainBanner` , o usuário poder definir um novo tema (novo `term` ) e trocar a imagem do banner. Trata-se de uma função (que será chamada quando o evento de clique for disparado a partir do botão) que evitará a troca de página ( `preventDefault` ), exibirá um `prompt` para que o usuário digite o(s) novo(s) termo(s) e passará esse(s) termo(s) para a função _setter_ responsável pelo estado `term` - a `setTerm` . Para evitarmos espaços entre os termos, trataremos a _string_ com um `replace` também.

``` js
const changeTheme = event => {
    event.preventDefault()
    setTerm(prompt('Qual tema deseja?\nVocê pode definir mais de um tema, separando-os por vírgula.\nO termo deve ser escrito em inglês.').replace(/ /gi, ''))
}
```

**7. Retornando o componente**

Agora só resta retornarmos o componente em si. Em relação ao componente original, vamos incluir:

* Uma condição para adicionarmos a classe _loading_ caso o _state_ `isLoading` seja `true`:

``` jsx
className={`main-banner ${isLoading ? 'loading' : ''}`}
```

* Um estilo '_inline_' em forma de objeto para adicionarmos o _background-image_ de maneira dinâmica. Vale pontuar que o _state_ inicial de `img` é o GIF de 'carregamento', caso contrário, a imagem é passada para o _state_ `img`, por isso não precisamos de um _if_.

``` jsx
style={{ backgroundImage: `url(${img}` }}
```

* Um evento de clique para exibirmos o `prompt` e então redefinirmos o valor do _state_ `term`:

``` jsx
onClick={changeTheme}
```

O resultado final será o seguinte:

``` jsx
return (
    <section className={`main-banner ${isLoading ? 'loading' : ''}`} style={{ backgroundImage: `url(${img}` }}>
      <h1 className="main-banner__title">MAIN BANNER</h1>
      <a href="/produto" className="main-banner__btn" onClick={changeTheme}>Trocar tema</a>
    </section>
  )
```

**Observação:** repare que no estilo, estamos usando a propriedade `background-blend-mode` com o valor `multiply` para escurecermos a imagem com a cor de fundo previamente definida, o que melhorará a legibilidade do texto do banner e fortalecerá a percepção da identidade do site. Também diferimos os valores de algumas propriedades quando há a classe `loading` (quando o _state_ `isLoading` tem valor `true` ):

``` css
.main-banner {
    align-items: center;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-color: #00dbf8;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 600px;
    margin: 0 0 16px 0;
    max-height: 100vh;
    padding: 16px;
    width: 100vw;
}

.main-banner.loading {
    background-attachment: inherit;
    background-blend-mode: normal;
    background-position: 50% 85%;
    background-size: 240px;
}
```

**8. Tratando erros**

Pode ser que a API retorne uma imagem genérica de 'erro' (quando não encontra imagens para o termo). Nesse caso, a URL retornada contém a seguinte _string_: `source-404` . Então vamos rever nosso código e tratar dessa questão:

* Nossa função `imageCallback` agora será definida assim:

``` js
const imgCallback = url => {
    if (!url.includes('source-404')) {
        setImg(url)
        setTimeout(
            setIsLoading(false),
            1500
        )
    } else {
        setImg(defaultImg)
        setIsLoading(true)
        changeTheme()
    }
}
```

E como utilizamos o `imgCallback` dentro do `useEffects` , o React.js sugere que a gente declare a função dentro do próprio _hook_.

* Agora que chamamos o `changeTheme` dentro do `imgCallback`, também precisamos tratar o `event.preventDefault`, pois pode ser que a gente não receba um evento. Portanto, ficará assim:

``` js
const changeTheme = (event = undefined) => {
    if (event !== undefined) {
        event.preventDefault()
    }
    const newTerm = prompt('Qual tema deseja?\nVocê pode definir mais de um tema, separando-os por vírgula.\nO termo deve ser escrito em inglês.')
    if (newTerm && newTerm !== undefined) {
        setTerm(newTerm.replace(/ /gi, ''))
        setImg(defaultImg)
        setIsLoading(true)
    } else {
        return
    }
}
```

Veja que além de tratarmos a ausência de evento, estamos tratando casos em que o usuário cancele o `prompt` ou confirme sem digitar nada (ou mesmo digitando apenas espaços). Por isso mesmo isolamos o resultado do `prompt` numa variável (afinal, não podemos dar um `replace` em `undefined` ).

Agora sim cobrimos todos os cenários:

* Caso o usuário clique em Cancelar ao visualizar o `prompt`

* Caso o usuário digite apenas espaços no `prompt`

* Caso a API não encontre imagens para o termo digitado no `prompt`

* Caso a API encontre imagens para o termo digitado no `prompt`

Com isso, encerramos mais esse passo! =)

### 04. Toggle Theme

Nessa _branch_ vamos fazer o famoso botão que troca o tema do site todo (de _light_ para _dark_ e vice-versa). Mas temos um problema: a captura do clique ocorre no componente do botão, e a classe que irá definir a troca de estilo deve ficar no componente `App.js` .

Para resolvermos esse problema, precisaremos tratar o _state_ no `App` e manipular esse _state_ no `ToggleButton` - isso pode ser feito via _props_.

Para maiores detalhes, acesse a _branch_ `feature/04-toggle-theme` . Vamos começar!

#### 04.01 Componente ToggleButton

Vamos construir nosso componente `ToggleButton` dentro de uma nova pasta: `./frontend/src/components/Button/ToggleButton/index.js` . Como mencionado, a troca do _state_ ocorre no `App.js` - o método _setter_ se encontra lá. E é justamente o método _setter_ ( `setIsLight` ) que vamos transferir através das _props_ até o nosso novo componente. Além do _setter_, vamos passar a `className` por _props_ também.

``` jsx
import './style.css'
const ToggleButton = ({ ...props }) => {
  const { className, themeClick } = props
  return (
    <button
      className={`${className} toggle-theme-btn`}
      onClick={themeClick}
    >
    </button>
  )
}

export default ToggleButton
```

Repare que o componente irá receber _props_ com o _spread operator_ (capturamos todas as propriedades que vierem como argumentos/atributos do componente).

Por isso, a maneira mais legível e enxuta de capturarmos os 2 argumentos é pela desestruturação. Se futuramente quisermos passar mais propriedades, bastará acrescentar mais um objeto na desestruturação.

E então retornamos um `button` com `className` de acordo com o que for recebido e evento `onClick` também. Até poderíamos setar a classe diretamente no componente, mas se quisermos reaproveitá-lo, da forma que fizemos não teremos problemas em mudar a classe, isso será passado de dentro do componente que instancia nosso `ToggleButton` .

Observando o estilo desse componente, fica claro que seu layout depende de uma classe `dark` a ser acrescida e removida do `App` , de acordo com o clique do usuário.

Para que o botão fique bem apresentável e remeta aos botões de _toggle_ (ON/OFF), vamos usar o pseudo-elemento `::after` . Em alguns momentos utilizamos o seletor `:not(.dark)` para garantirmos que não receberemos os elementos selecionados errados, mas poderia ser dispensado o seu uso.

#### 04.02. Componente Button

Apesar de termos nosso componente pronto, vamos importá-lo num componente que fará a ponte entre o `ToggleButton` e os componentes que vierem a usá-lo. Isso para mantermos nosso código organizado, garantirmos uma manutenção mais fácil e para agruparmos nossos diversos `button` em um componente pai/mãe - o componente `Button` .

Dessa vez é algo bem simples: vamos importar e exportar o `ToggleButton` - mas sem ser como _default_, pois só podemos exportar um único elemento como _default_, e a ideia é justamente podermos exportar vários tipos de `button` , de acordo com a nossa necessidade.

``` jsx
import ToggleButton from './ToggleButton'

export {ToggleButton}
```

Sim, é só isso mesmo! =)

#### 04.03. Importando o Button no Header

Como não exportamos o `ToggleButton` como _default_ (no componente `Button` ), para importá-lo no `Header` precisamos declarar seu nome entre chaves:

``` jsx
import { ToggleButton } from '../Button'
```

E na sequência vamos incluí-lo no retorno do componente, após o último link:

``` jsx
<ToggleButton className="header__nav__item" themeClick={themeClick} />
```

No trecho acima, estamos passando a _prop_ `className` como _string_ e a _prop_ `themeClick` como variável. Por isso, nosso `Header` vai precisar receber essa _prop_ (que indica o evento disparado no clique) do `App` :

``` jsx
const Header = ({ ...props }) => {
  const { themeClick } = props
  // ...
}
```

Veja que estamos desestruturando as _props_ para capturarmos a função `themeClick` . Para capturarmos outras _props_ é só declararmos após a `themeClick` (justamente por conta do _spread operator_, que 'pega' tudo).

Então nosso `Header` atualizado ficou assim:

``` jsx
import { ToggleButton } from '../Button'
import './style.css'

const Header = ({ ...props }) => {
  const { themeClick } = props
  return (
    <section className="header">
      <h1 className="header__title">HEADER</h1>
      <nav className="header__nav">
        <a href="/" className="header__nav__item">Início</a>
        <a href="/sobre" className="header__nav__item">Sobre</a>
        <a href="/produtos" className="header__nav__item">Produtos</a>
        <a href="/contato" disabled className="header__nav__item--disabled">Contato</a>
        <ToggleButton className="header__nav__item" themeClick={themeClick} />
      </nav>
    </section>
  )
}

export default Header
```

#### 04.04. Manipulando o estado no App

Chegou a hora de manipularmos o _state_ do tema no `App.js` . Mãos à obra!

Antes de mais nada, vamos importar o _hook_ `useState` : `import React, { useState } from 'react'` .

> Um bônus: para definirmos o state inicial, vamos ver se o horário do acesso está entre 08 e 18 horas. Se estiver, vamos definir como state inicial o tema claro. Senão, definimos o tema escuro.

E aí prosseguimos normalmente, definindo nosso _state_ `isLight` e seu _setter_, `setIsLight` :

``` jsx
const lightAsDefault = new Date().getHours() > 8 && new Date().getHours() < 18
  const [isLight, setIsLight] = useState(lightAsDefault)
```

E para atrelarmos o clique no `ToggleButton` à função `setIsLight` , vamos criar uma função que servirá de _callback_ para o evento do clique (e será transmitida para o `Header` > `Button` > `ToggleButton` ):

``` jsx
const toggleTheme = () => setIsLight(!isLight)
```

Como o _state_ é _booleano_, basta setarmos o oposto do _state_ atual (com o símbolo de negação - `!` ) como valor passado para o _setter_.

E, finalmente, vamos criar uma classe dinâmica para o `App` , de acordo com o _state_ `isLight` e, também, passar o _setter_ como _prop_ do `Header` . Nosso `App` ficará assim:

``` jsx
import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css';

function App() {
  const lightAsDefault = new Date().getHours() > 8 && new Date().getHours() < 18
  const [isLight, setIsLight] = useState(lightAsDefault)
  const toggleTheme = () => setIsLight(!isLight)
  return (
    <div className={`App${!isLight ? ' dark' : ''}`}>
      <Header themeClick={toggleTheme} />
      <Home />
      <Footer />
    </div>
  )
}

export default App
```

#### 04.05. Estilo dark mode

Agora só falta atualizarmos o estilo para aplicarmos o _dark mode_ baseado na classe `dark` , que será inserida ou removida do `App` conforme horário de acesso e cliques do usuário.

Podemos começar pelo próprio estilo do `App` :

``` css
.App.dark {
    background-color: #303030;
}

.App.dark .header+small {
    color: #fff;
}
```

Também podemos atualizar o título do componente `Shelf` :

``` css
.App.dark .shelf__title {
    color: #fff;
}
```

E o `background-color` do `Form` (e a cor da fonte do botão enviar):

``` css
.App.dark .form {
    background-color: #87bcc3;
}

.App.dark .form__content__btn {
    color: #87bcc3;
}
```

### 05. Rotas

Vamos manipular as rotas de nosso projeto - em outras palavras, definir o que deve ser carregado/renderizado de acordo com a URL acessada. Para maiores detalhes, acesse a _branch_ `feature/05-routes` .

#### 05.01. react-router-dom

Caso ainda não tenha instalado o pacote [React Router DOM](https://reactrouter.com/web/guides/quick-start), acesse a pasta `./frontend` e execute o seguinte comando no terminal: `npm install --save react-router-dom` . Nosso arquivo `package.json` receberá a nova dependência, graças à opção `--save` .

#### 05.02. Routes

No arquivo `./frontend/src/routes/index.js` vamos importar o pacote [React Router DOM](https://reactrouter.com/web/guides/quick-start) e os seguintes métodos: `BrowserRouter` , `Switch` e `Route` . E apelidaremos o `BrowserRouter` de `Router` com um _alias_:

``` jsx
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
```

**Router, Route e Switch**

O `Router` é quem nos permite trabalhar com as rotas. E o `Route` é o que define um rota propriamente dita. Por fim, o `Switch` funciona como um _switch_ mesmo: ele verifica - de cima para baixo - se alguma condição é atendida. Caso encontre um caso verdadeiro, acessa a rota e interrompe a leitura (não continua lendo as rotas abaixo).

**Correspondência**

Vale pontuar que ao ler as rotas, não há, por _default_, uma verificação de correespondência exata. Ou seja, a rota `/` sempre será considerada como _true_, pois todas as rotas começam com `/` . Por isso, é uma boa prática declararmos as rotas mais específicas acima e as mais genéricas abaixo (para que as genéricas sejam as últimas opções, só sejam acessadas caso nenhuma outra rota mais específica coincida com a rota acessada pelo usuário).

Outro recurso que nos ajuda a trabalhar com esse _match_ é o atributo `exact` . Ele permite a verificação da correspondência exata (no caso, `/categorias` não seria considerada igual a `/categorias/:categoria` ).

**Params**

Talvez você esteja se perguntando - _O que são esses dois pontos em `:categoria` ?_. Nós podemos definir variáveis (_params_) nas rotas, que poderão ser capturadas dentro do componente, através do _request_. Nomeamos essas variáveis justamente nesse momento. Veremos mais adiante como capturarmos essas variáveis. Podemos, também, declarar variáveis opcionais com uma interrogação ao final da variável - `/categorias/:categoria?` .

Tendo tudo isso em mente, importaremos os componentes a serem utilizados e definiremos nosso componente `Routes` . Atenção: não incluiremos os componentes `Header` nem `Footer` pois já serão declarados no `App` . Nosso componente responsável pelas rotas ficará assim:

``` jsx
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Categoria from '../pages/Categoria'
import Produto from '../pages/Produto'
import Contato from '../pages/Contato'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
        <Route exact path="/categorias" component={Categoria} />
        <Route exact path="/categorias/:categoria" component={Categoria} />
        <Route exact path="/categorias/:categoria/:produto" component={Produto} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes
```

### 05.03. Routes no App

Agora é necessário importarmos o componente `Routes` no `App` . Importamos o componente e depois declaramos no retorno do `App` (no caso, os trechos `import Routes from './routes'` e `<Routes />` ):

``` jsx
import React, { useState } from 'react'
import Header from './components/Header'
import Routes from './routes'
import Footer from './components/Footer'
import './App.css';

function App() {
  const lightAsDefault = new Date().getHours() > 8 && new Date().getHours() < 18
  const [isLight, setIsLight] = useState(lightAsDefault)
  const toggleTheme = () => setIsLight(!isLight)
  return (
    <div className={`App${!isLight ? ' dark' : ''}`}>
      <Header themeClick={toggleTheme} />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
```

### 05.04. Ajustes no Menu

Vamos ajustar nosso componente `Header` , para casar com nossas rotas. Também vamos 'liberar' a página de Contato e criar outra para mantermos o exemplo do uso do _modifier_ do [BEM](http://getbem.com/).

``` jsx
<nav className="header__nav">
  <a href="/" className="header__nav__item">Início</a>
  <a href="/sobre" className="header__nav__item">Sobre</a>
  <a href="/categorias" className="header__nav__item">Categorias</a>
  <a href="/promocoes" disabled className="header__nav__item--disabled">Promoções</a>
  <a href="/contato" className="header__nav__item">Contato</a>
  <ToggleButton className="header__nav__item" themeClick={themeClick} />
</nav>
```

E vamos aproveitar para fazer uma pequena correção no estilo do `Header` (justamente no item desabilitado):

``` css
.header__nav__item--disabled {
    color: rgb(211, 211, 211);
    font-weight: normal;
    margin: 0 0 0 24px;
    pointer-events: none;
}
```

### 05.05. Link para links

O [React Router DOM](https://reactrouter.com/web/guides/quick-start) nos permite implantarmos o conceito de **SPA** (_Single Page Application_). De forma resumida, trata-se de recarregarmos, atualizarmos e alterarmos os elementos renderizados na página - e a própria URL - sem recarregarmos de fato a página ou o DOM. Daí o nome - renderizamos diferentes conteúdos sem mudar de página. Por um lado, isso aumenta muito a performance. Por outro, não conseguimos indexar o conteúdo que será futuramente renderizado, o que é prejudicial para o SEO.

Para termos esse conceito aplicado, uma das ferramentas é o `Link` . O `Link` substituirá a tag `a` do HTML e tem alguns atributos específicos (ao invés do `href` , por exemplo, utilizamos o atributo `to` ). Há diversas maneiras de utilizarmos o `Link` . Nessa prática passaremos uma _string_ como valor do atributo `to` . Para que isso dê certo, o `Link` precisa estar dentro do `Router` ( `BrowserRouter` ). Então o primeiro passo será movermos o `Router` para o `App.js` , de forma a abranger o `Header` (onde utilizaremos o `Link` ). Então nosso arquivo `App.js` ficará assim:

``` jsx
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Routes from './routes'
import Footer from './components/Footer'
import './App.css';

function App() {
  const lightAsDefault = new Date().getHours() > 8 && new Date().getHours() < 18
  const [isLight, setIsLight] = useState(lightAsDefault)
  const toggleTheme = () => setIsLight(!isLight)
  return (
    <div className={`App${!isLight ? ' dark' : ''}`}>
      <Router>
        <Header themeClick={toggleTheme} />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
```

Simplesmente importamos o `Router` e incluímos a tag do componente ao redor do `Header` , `Routers` e `Footer` .

E, como já estamos declarando no `App` , agora devemos remover do arquivo `routes/index.js` :

``` jsx
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Categoria from '../pages/Categoria'
import Produto from '../pages/Produto'
import Contato from '../pages/Contato'

const Routes = () => {
  return (    
      <Switch>
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
        <Route exact path="/categorias" component={Categoria} />
        <Route exact path="/categorias/:categoria" component={Categoria} />
        <Route exact path="/categorias/:categoria/:produto" component={Produto} />
        <Route path="/" component={Home} />
      </Switch>
  )
}

export default Routes
```

E então importaremos o `Link` no `Header` :

``` jsx
import { Link } from 'react-router-dom'
```

E substituiremos as tags `a` pelo `Link` :

``` jsx
<Link to="/" className="header__nav__item">Início</Link>
<Link to="/sobre" className="header__nav__item">Sobre</Link>
<Link to="/categorias" className="header__nav__item">Categorias</Link>
<Link to="/promocoes" disabled className="header__nav__item--disabled">Promoções</Link>
<Link to="/contato" className="header__nav__item">Contato</Link>
```

Dica: poderíamos passar a rota de destino dessa maneira também (passando uma função que representa uma _string_ ao invés da _string_):

``` jsx
<Link
  to={location => ({ ...location, pathname: "/sobre" })}
  className="header__nav__item"
>
  Sobre
</Link>
```

E ainda poderíamos passar como objeto (no exemplo há algumas outras propriedades, apenas como exemplo):

``` jsx
<Link
  to={{
    pathname: "/sobre",
    search: "?key=value",
    hash: "#hash-example",
    "state": {isLoading: true}
  }}
  className="header__nav__item"
>
  Sobre
</Link>
```

Uma vantagem de passar como objeto é a facilidade de leitura e de passar um _state_ que persiste ao longo da navegação.

Podemos, ainda, passar um atributo `replace` , que substitui a posição atual do histórico de navegação ao invés de acrescentar um novo item. Esse parâmetro é _booleano_, então simplesmente ao declarar `replace` já o configuramos como `true` (seria o mesmo que passarmos `replace={true}` ).

### 05.06. Substituindo Link por NavLink

> Há também o recurso [NavLink](https://reactrouter.com/web/api/NavLink), que facilita o destaque do link quado sua rota coincide com a localização atual do usuário.

Vamos trocar o `Link` que acabamos de inserir no `Header` por `NavLink` (também precisamos alterar a importação).

Mas simplesmente trocá-los não surtirá efeito. Então vamos adicionar a propriedade `activeClassName` , passando o valor `selected` (classe que será adicionada quando o link estiver 'ativo'). Exemplo:

``` jsx
<NavLink to="/" activeClassName="selected" className="header__nav__item">Início</NavLink>
```

Agora podemos definir um estilo específico para os `header__nav__item` que também possuírem a classe `selected` . Seria possível passarmos o estilo como objeto, através do atributo `activeStyle` , mas o arquivo fica mais organizado se mantivermos o estilo no `style.css` e a função no `index.js` .

Se você testar verá um problema: o link da `Home` ( `/` ) sempre fica ativo. Para resolvermos isso basta passarmos o atributo _booleano_ `exact` .

### 06. Conteúdo Dinâmico

Chegou uma das partes mais interessantes do React.js - vamos criar conteúdo dinâmico e sentir na pele a economia de código ao reaproveitarmos os componentes.

Posteriormente poderemos incrementar vários pontos do projeto, mas esse é um dos principais passos. Para maiores detalhes, acesse a _branch_ `feature/06-placeholder-content` .

#### 06.01. Fake Content

Vamos começar criando um JSON com conteúdo falso, apenas de marcação (_placeholder_). Então vamos criar um arquivo chamado `fakeContent.json` dentro da pasta `./frontend/src/Helpers` . Você pode criar seu próprio conteúdo também. No mundo real, consumiríamos essas informações do nosso _back end_, do nosso banco de dados ou de uma API externa (similarmente ao fizemos com as imagens do `MainBanner` ).

Nesse JSON vamos definir apenas 3 categorias e 18 _posts_ (6 por categoria). Ficará assim:

``` json
{
  "categories": [
    {
      "id": 1,
      "title": "Categoria 01"
    },
    {
      "id": 2,
      "title": "Categoria 02"
    },
    {
      "id": 3,
      "title": "Categoria 03"
    }
  ],
  "posts": [
    {
      "id": 1,
      "cat_id": 1,
      "title": "Post 01",
      "description": "Conteúdo de exemplo do post 01, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 2,
      "cat_id": 1,
      "title": "Post 02",
      "description": "Conteúdo de exemplo do post 02, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 3,
      "cat_id": 1,
      "title": "Post 03",
      "description": "Conteúdo de exemplo do post 03, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 4,
      "cat_id": 1,
      "title": "Post 04",
      "description": "Conteúdo de exemplo do post 04, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 5,
      "cat_id": 1,
      "title": "Post 05",
      "description": "Conteúdo de exemplo do post 05, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 6,
      "cat_id": 1,
      "title": "Post 06",
      "description": "Conteúdo de exemplo do post 06, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 7,
      "cat_id": 2,
      "title": "Post 07",
      "description": "Conteúdo de exemplo do post 07, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 8,
      "cat_id": 2,
      "title": "Post 08",
      "description": "Conteúdo de exemplo do post 08, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 9,
      "cat_id": 2,
      "title": "Post 09",
      "description": "Conteúdo de exemplo do post 09, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 10,
      "cat_id": 2,
      "title": "Post 10",
      "description": "Conteúdo de exemplo do post 10, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 11,
      "cat_id": 2,
      "title": "Post 11",
      "description": "Conteúdo de exemplo do post 11, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 12,
      "cat_id": 2,
      "title": "Post 12",
      "description": "Conteúdo de exemplo do post 12, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 13,
      "cat_id": 3,
      "title": "Post 13",
      "description": "Conteúdo de exemplo do post 13, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 14,
      "cat_id": 3,
      "title": "Post 14",
      "description": "Conteúdo de exemplo do post 14, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 15,
      "cat_id": 3,
      "title": "Post 15",
      "description": "Conteúdo de exemplo do post 15, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 16,
      "cat_id": 3,
      "title": "Post 16",
      "description": "Conteúdo de exemplo do post 16, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 17,
      "cat_id": 3,
      "title": "Post 17",
      "description": "Conteúdo de exemplo do post 17, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    },
    {
      "id": 18,
      "cat_id": 3,
      "title": "Post 18",
      "description": "Conteúdo de exemplo do post 18, apenas de marcação... Não perca seu tempo tentando ler esse texto pois é totalmente irrelevante. Poderia ser um lorem ipsum, mas, para diferenciar cada post, tem um textinho \"customizado\"... Mas agora vou apelas para o lorem ipsum - só que do Mussum! Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis."
    }
  ]
}
```

Também importaremos esse JSON dentro do nosso arquivo `./frontend/src/Helpers/index.js` :

``` jsx
import content from './fakeContent.json'

export { content }
```

Bem tranquilo, né? Mas calma que o bicho vai pegar! hehehe

#### 06.02. Componentes Filhos

Antes de consumirmos esse JSON, vamos conhecer o conceito de componentes filhos - ou _children_. Eles permitem com que possamos abrir e fechar as _tags_ dos nossos componentes que contêm os componentes filhos.

Isso nos dá maior liberdade para definirmos o que cada componente receberá como _props_ e em que contexto. Por exemplo, até o momento nosso componente `Main` é sempre o mesmo. Mas precisamos definir qual o conteúdo do `Main` na página `Home` , `Sobre` , `Categoria` , etc.. Para fazermos isso, seguiremos alguns passos, começando pelo componente `Main` .

**Main - o componente container**

Já sabemos que estamos utilizando componentes funcionais. E que esses componentes podem receber argumentos - as _props_. Com a ajuda do _spread operator_, vamos definir que o componente `Main` receberá algumas _props_ e, no 'miolo' dele, receberá esses componentes filhos - identificados no nosso código como `props.children` :

``` jsx
import './style.css'

const Main = ({...props}) => {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}

export default Main
```

**Passando componentes children para Main**

Agora precisamos identificar em que arquivos instanciamos o componente `Main` e passar os componentes que desejamos para dentro de suas _tags_. No caso, são todos os componentes que correspondem a páginas (dentro da pasta `./frontend/src/pages` ).

Para cada um deles, importaremos os componentes a serem utilizados e então declararemos esses componentes dentro da _tag_ `Main` . Vejamos um exemplo com a página `Contato` :

``` jsx
import Main from '../../components/Main'
import MainBanner from '../../components/MainBanner'
import Form from '../../components/Form'

const Contato = () => {
  return (
    <>
      <small>Você está na página Contato</small>
      <Main>
        <MainBanner />
        <Form />
      </Main>
    </>
  )
}

export default Contato
```

Agora é só replicarmos nas demais páginas, da forma que quisermos. Nessa prática teremos os seguintes componentes por página:

| page      | components              |
| --------- | ----------------------- |
| Categoria | MainBanner, Shelf       |
| Contato   | MainBanner, Form        |
| Home      | MainBanner, Shelf       |
| Produto   | MainBanner              |
| Sobre     | MainBanner, Form, Shelf |

_Posteriormente poderemos alterar esses componentes e toda a estrutura como um todo._

#### 06.03. Passando props entre componentes

Agora que podemos controlar os componentes de dentro de cada página (através dos _children_ de `Main` ), vamos passar um título para o componente `MainBanner` , de modo que se adeque a cada página onde é exibido o componente.

No componente `MainBanner` , vamos indicar que ele deve receber _props_ (com o _spread operator_) e trocar a _string_ 'MAIN BANNER' (que até então está fixa no componente, _hard coded_, como chamamos) pela _prop_ `title` , que passaremos onde instanciamos o componente.

De forma resumida (excluindo os demais trechos de código), ficará assim:

``` jsx
const MainBanner = ({ ...props }) => {
  // ...
  const { title } = props
  return (
      <h1 className="main-banner__title">{title ? title : 'MAIN BANNER'}</h1>
  )
}
```

Perceba que estamos nos 'garantindo' - caso `title` não exista, aí usaremos aquela mesma _string_.

Agora basta passarmos uma _prop_ (com o mesmo nome - `title` - em cada componente onde instanciamos o `MainBanner` ), dessa forma:

``` jsx
<MainBanner title="Título a ser exibido no MainBanner" />
```

#### 06.04. Consumindo o JSON

Finalmente iremos consumir nosso JSON! O primeiro passo, é importar o conteúdo nas páginas que passarão o conteúdo para os componentes pertencentes a elas.

No final da linha, quem consumirá o conteúdo serão os componentes `Shelf` e `Card` . Mas começaremos 'de fora para dentro', então vamos alterar os componentes/páginas `Home` , `Sobre` e `Categoria` . Abaixo, vamos entender como funcionará com o componente `Sobre` :

**Importando o conteúdo**

Primeiro, importaremos o conteúdo definido no `Helpers` :

``` jsx
import { content } from '../../Helpers'
```

_Como o `content` não foi exportado como default, devemos declará-lo entre chaves. A vantagem é que poderíamos ter outros conteúdos importados através do `Helpers` ao mesmo tempo (como fizemos com o `react-router-dom` e o `Switch` , `Route` , por exemplo)._

**Passando o conteúdo para Shelf**

Agora que temos acesso ao JSON, vamos capturar as propriedades `categories` e `posts` (ambas têm como valor um _array_ de objetos).

``` jsx
const { categories, posts } = content
```

Dessa forma podemos acessar `categories` e `posts` para acessar esses _arrays_.

Nosso intuito é renderizar um componente `Shelf` por categoria. Por isso faremos um _loop_ do tipo `map` nas categorias. Para cada 'rodada' do _loop_, instanciaremos um componente `Shelf` passando o título da categoria e os respectivos _posts_. E, para filtrarmos apenas os _posts_ da categoria, usaremos uma propriedade que faz esse _link_ entre _post_ e categoria, que é o `cat_id` :

``` jsx
const renderCategories = () => categories.map((category) => {
  const { id, title } = category
  const catPosts = posts.filter(post => post.cat_id === id)
  return (
    <Shelf title={title} posts={catPosts} key={id} />
  )
})
```

**Importante!** Há dois pontos a serem esclarecidos:

* Sempre que realizamos um _loop_, precisamos definir um atributo chamado `key` - ele que diferenciará cada um dos itens a serem retornados.

* Veja que todo atributo que estamos criando possui uma chave (nome à esquerda) e um valor (nome à direita). A **chave é o nome pelo qual acessaremos a _prop_** no componente que a recebe. O nome à direita, o **valor, é o nome da variável que detém o valor e que é definida dentro do atual componente**. Por exemplo, os _posts_ da categoria são passados através da variável `catPosts`. Mas são recebidos como `posts`.

Toda a lógica demonstrada acima está contida numa função, chamada `renderCategories` . Então executaremos essa função dentro do retorno do componente (entre chaves, por se tratar de JS):

``` jsx
return (
  <>
    <small>Você está na página Sobre</small>
    <Main>
      <MainBanner title="SOBRE" />
      <Form />
      {renderCategories()}
    </Main>
  </>
)
```

**Lendo o conteúdo na Shelf**

Agora que o componente `Shelf` recebe o conteúdo passado a ele (uma categoria específica e os posts a ela relacionados), precisamos ler esses dados, renderizar o que for pertinente e passar para o `Card` o conteúdo de cada `Post` .

``` jsx
const Shelf = ({ ...props }) => {
  const { title, posts } = props
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description } = post
      return (
        <Card title={title} description={description} key={index} />
      )
    })
  }
  return (
    <section className="shelf">
      <h1 className="shelf__title">{title}</h1>
      {renderPosts()}
    </section>
  )
}
```

* Ao declarar a `Shelf`, passamos as _props_  (com o _spread operator_) como argumento.

* Em seguida, desestruturamos as _props_ para capturarmos o `title` e os `posts`.

* Depois, criamos uma função chamada `renderPosts`, que será executada dentro do retorno da `Shelf`.

* A função `renderPosts` aplica o _loop_ `map` aos `posts` (passando o segundo parâmetro do `map`, o `index`, como `key` - para termos um identificador único).

* Para cada `post` mapeado, desestruturamos o `post` para capturarmos o `title` e a `description` e instanciamos o `Card`.

**Lendo o conteúdo no Card**

Simplesmente recebemos as _props_, desestruturamos para capturarmos o `title` e a `description` e renderizamos dentro do componente:

``` jsx
import './style.css'

const Card = (props) => {
  const { title, description } = props
  return (
    <article className="card">
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
    </article>
  )
}

export default Card
```

**Bônus! Line-clamp**

É um problema muito comum termos textos muito longos nos _cards_. A boa notícia, é que conseguimos limitar o número de linhas a serem exibidos com CSS puro. Podemos fazer isso com a propriedade `line-clamp` somada a mais algumas. Veja:

``` css
.card__description {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #fff;
    display: -webkit-box;
    margin: 8px auto 0;
    overflow: hidden;
}
```

_Apenas a propriedade `color` e `margin` não compõem essa estratégia. No caso, limitamos o conteúdo exibido a 3 linhas._

### 07. Categorias dinâmicas

Nessa etapa vamos criar um submenu para as categorias e fazer algumas customizações para deixar o projeto um pouco mais dinâmico. Vamos:

- Criar funções auxiliares para manipulação de _strings_

- Carregar imagens  do `MainBanner` que sejam relacionadas às subcategorias (para isso vamos ter de deixar o nome das categorias em inglês)

- Atualizar a _tag_ `small` que indica em que página estamos, de acordo com a categoria

- Conhecer o _hook_ `useParams` e `useLocation` do `react-router-dom`

- Configurar a página `Categoria` para se adequar às rotas que passam o parâmetro `:categoria`

Acesse a _branch_ `feature/07-categories-submenu` para ver maiores detalhes.
