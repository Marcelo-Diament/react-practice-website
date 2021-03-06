# React Practice Website Base

_Prática de ReactJS: criação de site simples_

## Passo a Passo

### 01. Estrutura do Projeto

Para maiores detalhes, acesse a _branch_ `feature/01-project-structure`.
#### 01.01. Criar o App React

Basta acessar a pasta do projeto e executar o comando `npx create-react-app nome-do-app`. No caso nomear como `frontend`. Ou seja, temos a pasta do projeto (`react-practice-website`) e, dentro dela, a pasta responsável pelo nosso app React.js (`frontend`).

#### 01.02. Limpar arquivos desnecessários

Em seguida, vamos apagar alguns arquivos desnecessários para o nosso projeto. São:

- `frontend/src/App.test`

- `frontend/src/reportWebVitals.js`

- `frontend/src/setupTests.js`

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

Cada um destes componente terá sua própria pasta (dentro de `frontend/src/components`) com uma pasta de mesmo nome (ex.: `frontend/src/components/Header`) e, dentro dessa pasta, teremos um arquivo `index.js` (responsável por definir o componente) e `style.css` (responsável pelo estilo específico do componente).

#### 01.04. Páginas

Agora adicionaremos as páginas base de nosso projeto (funcionam iguais aos componentes). São:

- Home (página inicial)

- Sobre (página institucional)

- Categoria (vitrine de produtos - ou serviços, artigos, posts...)

- Produto (detalhe do produto - ou serviço, artigo, post...)

- Contato (página de contato)

Cada uma destas página terá sua própria pasta (dentro de `frontend/src/pages`) com uma pasta de mesmo nome (ex.: `frontend/src/pages/Home`) e, dentro dessa pasta, teremos um arquivo `index.js` (responsável por definir a página) e `style.css` (responsável pelo estilo específico da página).

#### 01.05. Helpers

Criaremos uma pasta chamada `Helpers` dentro de `frontend/src` e um arquivo `index.js` dentro dela. No caso, não precisaremos de arquivo de CSS, pois o intuito dos Helpers é criarmos função de auxílio, para evitarmos duplicidade de código e centralizarmos todas as funções auxiliares em um mesmo local. A ideia é termos arquivos específicos por funções (ou grupo de funções), importarmos esses arquivos no `Helpers/index.js` e acesarmos dentro de nossos componentes ou páginas quando necessário.

#### 01.06. Services

Também criaremos uma pasta `src/services/api` para centralizarmos os controles de requisições a APIs. Dentro da pasta `api` criaremos o arquivo `index.js`, onde faremos as requisições para APIs externas.