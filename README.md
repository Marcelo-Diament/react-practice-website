# React Practice Website Base

_Prática de ReactJS: criação de site simples_

## Passo a Passo

### 01. Estrutura do Projeto

Para maiores detalhes, acesse a _branch_ `feature/01-project-structure`.
#### 01.01. Criar o App React

Basta acessar a pasta do projeto e executar o comando `npx create-react-app nome-do-app`. No caso nomear como `frontend`. Ou seja, temos a pasta do projeto (`react-practice-website`) e, dentro dela, a pasta responsável pelo nosso app React.js (`./frontend`). Saiba mais sobre o [Create React App](https://github.com/facebook/create-react-app) clicando [aqui](https://pt-br.reactjs.org/docs/create-a-new-react-app.html) - confira também o pacote no [npm](https://www.npmjs.com/package/create-react-app) ou no [yarn](https://yarnpkg.com/package/create-react-app).

#### 01.02. Limpar arquivos desnecessários

Em seguida, vamos apagar alguns arquivos desnecessários para o nosso projeto. São:

- `./frontend/src/App.test`

- `./frontend/src/reportWebVitals.js`

- `./frontend/src/setupTests.js`

Também apagaremos os seguintes trechos do arquivo `index.js`:

```js
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

#### 01.03. Componentes

Então adicionamos os componentes base de nosso projeto. São:

- Header (cabeçalho)

- Main (container do conteúdo principal)

- MainBanner (banner de destaque)

- Shelf (vitrine ou prateleira - container de cards)

- Card (card de um artigo, produto ou serviço - um preview contido em uma Shelf)

- Form (formulário)

- Footer (rodapé)

Cada um destes componente terá sua própria pasta (dentro de `./frontend/src/components`) com uma pasta de mesmo nome (ex.: `./frontend/src/components/Header`) e, dentro dessa pasta, teremos um arquivo `index.js` (responsável por definir o componente) e `style.css` (responsável pelo estilo específico do componente).

#### 01.04. Páginas

Agora adicionaremos as páginas base de nosso projeto (funcionam iguais aos componentes). São:

- Home (página inicial)

- Sobre (página institucional)

- Categoria (vitrine de produtos - ou serviços, artigos, posts...)

- Produto (detalhe do produto - ou serviço, artigo, post...)

- Contato (página de contato)

Cada uma destas página terá sua própria pasta (dentro de `./frontend/src/pages`) com uma pasta de mesmo nome (ex.: `./frontend/src/pages/Home`) e, dentro dessa pasta, teremos um arquivo `index.js` (responsável por definir a página) e `style.css` (responsável pelo estilo específico da página).

#### 01.05. Helpers

Criaremos uma pasta chamada `Helpers` dentro de `./frontend/src` e um arquivo `index.js` dentro dela. No caso, não precisaremos de arquivo de CSS, pois o intuito dos Helpers é criarmos função de auxílio, para evitarmos duplicidade de código e centralizarmos todas as funções auxiliares em um mesmo local. A ideia é termos arquivos específicos por funções (ou grupo de funções), importarmos esses arquivos no `./frontend/src/Helpers/index.js` e acesarmos dentro de nossos componentes ou páginas quando necessário.

#### 01.06. Services

Também criaremos uma pasta `./frontend/src/services/api` para centralizarmos os controles de requisições a APIs. Dentro da pasta `api` criaremos o arquivo `index.js`, onde faremos as requisições para APIs externas.

#### 01.07. Rotas

Por fim, criaremos uma pasta chamada `routes` dentro de `./frontend/src` e, dentro dessa pasta, o arquivo `index.js`. Será responsável pelo roteamento, ou seja, qual componente ou página renderizar de acordo com a URL acessada.

Também instalaremos o [React Router DOM](https://reactrouter.com/web/guides/quick-start), um pacote que nos ajudará a trabalharmos com as rotas - e acessarmos uma série de dados relacionados à navegação - de maneira simples. Para instalar o pacote podemos executar `npm install --save react-router-dom` no terminal (podemos instalar o pacote via [npm](https://www.npmjs.com/package/react-router-dom) ou [yarn](https://yarnpkg.com/package/react-router-dom) - mas lembre-se de usar sempre o mesmo gerenciador de pacotes ao longo do projeto).

### 02. Conteúdo Inicial de Marcação

Para maiores detalhes, acesse a _branch_ `feature/02-initial-sample-content`.

#### 02.01. Componente Card

Basicamente importamos o estilo no componente e definimos que esse componente - funcional - deve retornar um `article` com um `h1` e um parágrafo dentro dele. Depois exportamos o componente como _default_.

No arquivo de estilo, simplesmente definimos algumas propriedades para as 3 tags - através das classes (`className` no React) `card`, `card__title` e `card__description`.

> Perceba que estamos usando um padráo para a nomenclatura de classes de CSS. Esse padrão se chama [BEM](http://getbem.com/). De forma simplificada, definimos maneiras de nomear as classes de acordo com o tipo de tag: **B**loco, **E**lemento ou **M**odificador. Isso facilita a leitura, escrita e manutenção de nosso estilo.

_No caso, o nosso Bloco é o `article.card` e os elementos são o `h1.card__title` e o `p.card__description`. Mas só poderemos ver os resultados após o final dessa etapa._

#### 02.02. Componente Footer

Faremos o mesmo que fizemos com o Card, mas ao invés de um `article`, usaremos uma `section`. E, claro, a classe referente ao bloco passa a ser `footer`.

#### 02.03. Componente Header

Faremos quase a mesma coisa. Porém, dessa vez utilizaremos outras tags (como `nav` e `a`). Outro ponto diferente é que deixaremos um dos links desativado. Para trabalharmos o estilo dessa tag `a` modificada, utilizaremos o conceito de _modifier_ do [BEM](http://getbem.com/). Então aplicaremos a classe `header__nav__item--disabled`.

#### 02.04. Componente MainBanner

Novamente criaremos o corpo do componente e o respectivo estilo.
