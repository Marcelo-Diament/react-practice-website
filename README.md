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
