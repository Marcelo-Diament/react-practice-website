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

Também instalaremos o [React Router DOM](https://reactrouter.com/web/guides/quick-start), um pacote que nos ajudará a trabalharmos com as rotas - e acessarmos uma série de dados relacionados à navegação - de maneira simples. Para instalar o pacote podemos executar `npm install --save react-router-dom` no terminal (podemos instalar o pacote via [npm](https://www.npmjs.com/package/react-router-dom) ou [yarn](https://yarnpkg.com/package/react-router-dom) - mas lembre-se de usar sempre o mesmo gerenciador de pacotes ao longo do projeto).

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
