# PocketDB 🎴

Base de dados para cartas de Pokémon TCG usando Prisma e Next.js.

## 📋 Sumário
- [🚀 Como Começar](#-como-começar)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [👥 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** para gerenciamento de pacotes
- **PostgreSQL**

### 🛠️ Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/diogofelizardo/PocketDB.git
   cd PocketDB
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure a variável de ambiente do banco de dados**:
   No arquivo `.env`, adicione a seguinte linha (substitua os valores de acordo com o seu banco de dados):
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/pocketdb?schema=public"
   ```

4. **Configuração do Prisma**:
   - Gere os arquivos do Prisma:
     ```bash
     npx prisma generate
     ```
   - Execute as migrações para criar as tabelas no banco de dados:
     ```bash
     npx prisma db push
     ```

5. **Popule o banco de dados** com dados iniciais:
   ```bash
   npm run seed
   ```

## 📂 Estrutura do Projeto

```plaintext
PocketDB/
├── prisma/
│   ├── schema.prisma       # Esquema do banco de dados
│   ├── migrations/         # Histórico de migrações do banco de dados
│   ├── seed.ts             # Script para popular o banco de dados
│   ├── data/
│   │   └── pokemon-data.ts # Dados de exemplo para popular o banco
│   └── types/
│       └── seed-types.ts   # Definições de tipos para dados de seed
├── app/                    # Diretório principal da aplicação Next.js
│   └── api/                # Rotas da API
├── components/             # Componentes React reutilizáveis
├── lib/                    # Bibliotecas e utilidades
├── public/                 # Arquivos estáticos
│   └── images/             # Imagens do projeto
├── .env                    # Variáveis de ambiente
├── .env.example            # Exemplo de variáveis de ambiente
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configuração do TypeScript
└── README.md               # Documentação do projeto
```

### 📁 Descrição dos Diretórios Principais

- **`prisma/`**: Contém toda a configuração e schemas do Prisma ORM
- **`app/`**: Componentes e lógica principal do Next.js
- **`components/`**: Componentes React reutilizáveis
- **`lib/`**: Funções e configurações compartilhadas
- **`public/`**: Arquivos estáticos acessíveis publicamente

## 👥 Contribuição

1. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
2. Faça commit das suas mudanças:
   ```bash
   git commit -m 'Add: nova feature incrível'
   ```
3. Envie para o repositório remoto:
   ```bash
   git push origin feature/AmazingFeature
   ```
4. Abra um Pull Request na branch principal.

## 📄 Licença

Este projeto está licenciado sob a GNU General Public License v3.0 - veja o arquivo [LICENSE](LICENSE) para detalhes.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
