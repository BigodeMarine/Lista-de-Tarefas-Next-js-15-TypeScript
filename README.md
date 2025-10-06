Lista de Tarefas – Next.js 15 + TypeScript

Aplicação simples de listagem e adição de tarefas, construída com Next.js 15 (App Router), TypeScript e testada com Jest + Testing Library.

🚀 Funcionalidades

Exibir lista de tarefas (simulação de API com dados locais).

Adicionar novas tarefas via formulário controlado.

Contar quantidade de tarefas com hook personalizado (useContadorDeTarefas).

Testes unitários dos principais fluxos (componentes, hooks e store).

🛠️ Tecnologias

Next.js 15
 (App Router)

TypeScript

React 19

Jest

React Testing Library  

▶️ Como rodar o projeto

1-Clone o repositório:  

git clone  

2-Instale as dependências:  

npm install --save-dev jest @types/jest ts-jest \
  @testing-library/react @testing-library/jest-dom \
  @testing-library/user-event babel-jest \
  @babel/preset-env @babel/preset-react @babel/preset-typescript  

3-Rode a aplicação em modo dev:  

npm run dev  

🧪 Testes

## ⚙️ Scripts disponíveis

- `npm run dev` → inicia o servidor Next.js em modo desenvolvimento
- `npm run build` → cria a build de produção
- `npm start` → roda a build de produção
- `npm test` → executa todos os testes unitários
- `npm run test:watch` → executa os testes em modo observação (watch mode)
- `npm run coverage` → executa os testes com relatório de cobertura

## 🖥️ Ambiente

- Node.js **>=18**  
- Gerenciador de pacotes: **NPM** (padrão).  
  > Caso prefira PNPM ou Yarn, basta instalar as dependências com o gerenciador correspondente (`pnpm install` ou `yarn install`).  

