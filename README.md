# Watch Notion - Gerenciador de Tarefas

Sistema de gerenciamento de tarefas desenvolvido com Vue 3, TypeScript e Vuetify.

## 🚀 Tecnologias Utilizadas

- Vue 3
- TypeScript
- Vuetify
- Tailwind CSS
- Vue Router
- Material Design Icons

## 📋 Funcionalidades

- Autenticação de usuários
- Criação, edição e exclusão de tarefas
- Compartilhamento de tarefas com outros usuários
- Sistema de permissões (Proprietário/Usuário)
- Interface responsiva e moderna
- Dashboard com cards de progresso
- Filtros e busca de tarefas

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/harduim300/Frontend-Project-Watch
```

2. Instale as dependências:
```bash
npm install
```


## 🚀 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

### Build para Produção

```bash
npm run build
```


## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── HeaderVue.vue
│   │   └── FooterVue.vue
│   ├── ui/
│   │   ├── AuthForm.vue
│   │   ├── ButtonAct.vue
│   │   ├── CardsTaks.vue
│   │   ├── CreateTaskDialog.vue
│   │   ├── DialogConfirm.vue
│   │   ├── EditTaskDialog.vue
│   │   └── ProgressCard.vue
│   └── icons/
│       └── IconLogo.vue
├── services/
│   ├── auth.ts
│   └── tasks.ts
├── views/
│   ├── HomeView.vue
│   ├── RegisterView.vue
│   └── TaksView.vue
└── router/
    └── index.ts
```

## 🔒 Autenticação

O sistema utiliza um sistema de autenticação baseado em tokens JWT, com as seguintes funcionalidades:

- Login
- Registro de usuários
- Proteção de rotas
- Persistência de sessão

## 📝 Gerenciamento de Tarefas

### Funcionalidades

- Criação de tarefas com título, categoria, status e descrição
- Edição de tarefas existentes
- Exclusão de tarefas (apenas para proprietários)
- Compartilhamento de tarefas com outros usuários
- Sistema de status (Não Iniciado, Em Progresso, Concluído)

### Permissões

- **Proprietário**: Acesso total à tarefa
- **Usuário**: Acesso limitado à visualização e edição

## 🎨 Interface do Usuário

### Componentes Principais

- **HeaderVue**: Cabeçalho com logo e menu de usuário
- **CardsTaks**: Cards para exibição de tarefas
- **ProgressCard**: Cards para exibição de métricas
- **DialogConfirm**: Diálogos de confirmação
- **AuthForm**: Formulário de autenticação

### Estilização

- Utilização do Vuetify para componentes base
- Tailwind CSS para estilos customizados
- Design responsivo e moderno

## 🔄 Rotas

- `/`: Página inicial (login)
- `/register`: Registro de usuários
- `/tasks/dashboard`: Dashboard de tarefas


## 👥 Autores

- **Matheus Harduim** - [GitHub](https://github.com/harduim300)
