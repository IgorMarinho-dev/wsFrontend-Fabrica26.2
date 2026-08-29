# 🦸 Overwatch Heroes

Aplicação frontend que consome a OverFast API para exibir os heróis do Overwatch 2, com busca por nome, filtro por role e paginação.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Funcionalidades

- 🖼️ **Exibição de heróis** com imagem, nome e role (Tank, Damage, Support)
- 🔍 **Busca por nome**, disparada ao confirmar (Enter ou clique no botão)
- 🎯 **Filtro por role** com checkboxes, combinável com a busca por nome
- 📄 **Paginação numérica** com navegação direta por página
- ⚡ **Estados de loading, erro e vazio** tratados individualmente

## 🛠️ Tecnologias Utilizadas

- **React** — biblioteca de interface
- **Vite** — build tool e servidor de desenvolvimento
- **Tailwind CSS 3** — estilização utilitária
- **JavaScript (ES6+)**
- **HTML5** + **CSS3**
- **OverFast API** — fonte de dados dos heróis

## 📋 Pré-requisitos

- Node.js 18+
- npm

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/IgorMarinho-dev/wsFrontend-Fabrica26.2.git
cd wsFrontend-Fabrica26.2
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto, usando o `.env.example` como base:

```env
VITE_API_URL=https://overfast-api.tekrop.fr
```

### 4. Rode o projeto

```bash
npm run dev
```

## 🌐 Acesso

- **Local:** http://localhost:5173

## 📁 Estrutura do Projeto

```
wsFrontend-Fabrica26.2/
├── src/
│   ├── components/
│   │   ├── HeroCard/
│   │   ├── SearchBar/
│   │   ├── RoleFilter/
│   │   └── Pagination/
│   ├── hooks/
│   │   ├── useHeroes.js
│   │   └── usePagination.js
│   ├── services/
│   │   └── overfastApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .env.example
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎯 Como Usar

1. **Buscar um herói:** digite o nome no campo de busca e pressione Enter ou clique em "Buscar"
2. **Filtrar por role:** marque uma ou mais opções (Tank, Damage, Support) para refinar a lista — funciona junto com a busca por nome
3. **Navegar entre páginas:** clique diretamente no número da página desejada

## 🚀 Deploy

- **Frontend:** Vercel

## 🎨 Paleta de Cores

O projeto segue o padrão 60/30/10, com cores baseadas na identidade visual do Overwatch:

| Uso | Cor | Hex |
|---|---|---|
| 60% — Dominante (fundo) | Navy escuro | `#1A1A2E` |
| 30% — Secundária (cards, seções) | Cinza-azulado | `#2E3238` |
| 10% — Destaque (botões, estados ativos) | Laranja | `#F99E1A` |

## 📡 Créditos da API

Este projeto consome dados da [OverFast API](https://overfast-api.tekrop.fr/), uma API pública e não-oficial que fornece dados do Overwatch 2. Todos os dados de heróis (nomes, roles e imagens) são de propriedade da Blizzard Entertainment.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 👨‍💻 Autor

Igor Marinho - [GitHub](https://github.com/IgorMarinho-dev)

---

⭐ Se este projeto te ajudou, deixe uma estrela!