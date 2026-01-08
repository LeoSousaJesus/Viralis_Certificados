# Viralis Certificações

A Viralis Certificações é uma plataforma dedicada à avaliação, auditoria e certificação da excelência em gestão pública. Ela oferece uma certificação institucional privada para boas práticas em municípios e câmaras municipais em todo o Brasil, com foco em transparência, eficiência e governança.


## 🚀 Proposta

O principal objetivo deste projeto é elevar o padrão de qualidade e transparência na gestão pública por meio de:
- Consultoria estratégica e auditoria de processos.

- Um protocolo de avaliação rigoroso baseado em dados reais e indicadores de desempenho.

- Emissão de certificados seguros e auditáveis.

- Fornecimento de um sistema público de verificação para cidadãos e instituições.

## ✨ Principais Características

- **Certificação Institucional:** Avaliação e reconhecimento de boas práticas de gestão pública.
- **Verificação de Autenticidade:** Um módulo dedicado para verificar a validade dos certificados emitidos utilizando códigos hash únicos.
- **Metodologia e Protocolo:** Uma abordagem estruturada para análise, incluindo coleta de dados, validação cruzada e indicadores de desempenho.
- **Registro Público:** Um banco de dados seguro que garante a rastreabilidade e a transparência das certificações.
- **Relatórios Detalhados:** Diagnósticos abrangentes com informações práticas para aprimoramento da gestão.

- ## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma pilha de frontend moderna:

- **Núcleo:** [React](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- **Ferramenta de Build:** [Vite](https://vitejs.dev/)
- **Estilização:**
- [Tailwind CSS](https://tailwindcss.com/) (v4)
- [Emotion](https://emotion.sh/)
- [Radix UI](https://www.radix-ui.com/) para componentes acessíveis
- **Roteamento:** [React Router](https://reactrouter.com/)
- **Ícones:** Material Symbols e Lucide React
- **Tipografia:** Public Sans (Google Fonts)
- **Outras Bibliotecas:**
- `react-hook-form`: Formulário Gerenciamento
- `recharts`: Visualização de dados
- `framer-motion` / `motion`: Animações
- `date-fns`: Manipulação de datas
- `sonner`: Notificações Toast

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── components/  # Componentes de UI reutilizáveis
│   └── pages/       # Rotas/visualizações do aplicativo
│       ├── Home.tsx          # Página inicial
│       ├── Certification.tsx # Detalhes da certificação
│       ├── Methodology.tsx   # Explicação do protocolo de avaliação
│       ├── Authenticity.tsx  # Informações sobre a segurança do certificado
│       └── Verify.tsx        # Ferramenta para verificar códigos de certificado
├── styles/          # Estilos globais
└── main.tsx         # Ponto de entrada
```

## 🏃‍♂️ Primeiros passos

### Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- npm or yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone <repository-url>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd viralis-certificacoes
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o servidor de desenvolvimento

Para iniciar o servidor de desenvolvimento com recarregamento automático:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta, se 5173 for a padrão). (está em uso).

### Compilando para Produção

Para compilar o projeto para produção:

```bash
npm run build
```

Isso irá gerar os arquivos otimizados no diretório `dist`.

## 📄 Licença

Este projeto é um software proprietário da Viralis Certificações.
