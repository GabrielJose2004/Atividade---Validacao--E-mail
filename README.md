# Atividade 001 - Validação de Email

**Aluno:** Gabriel José de Souza  
**Turma:** 04AN  
**Professor:** Claudio Alexandre Gananca  
**Instituição:** USCS - Universidade Municipal de São Caetano do Sul  
**Curso:** ADS - Análise e Desenvolvimento de Sistemas  
**Disciplina:** Padrões de Usabilidade e Desenvolvimento de Interfaces  
**Data de entrega:** 01/05/2026

## Descrição do Projeto

Sistema de validação de email com verificação em duas camadas (front-end e back-end), desenvolvido para demonstrar interatividade, captura de eventos, validação de dados, comunicação assíncrona e atualização dinâmica da interface.

## Demonstração

![Demonstração do Projeto](public/img/demo.gif)

O GIF acima demonstra o funcionamento completo da aplicação, incluindo validação em tempo real, mensagens de erro inline e feedback visual ao usuário.

## Estrutura de Arquivos

### `index.html`
Arquivo principal da interface do usuário. Contém a estrutura HTML do formulário de validação de email, incluindo o campo de input, botão de submissão e área para exibição de mensagens de erro inline. Possui identificação completa do aluno e professor nos comentários e na seção de informações.

### `style.css`
Folha de estilos responsável pela aparência visual da aplicação. Define o layout moderno e responsivo, cores, espaçamentos, animações de feedback tátil no botão, e estados visuais diferentes para inputs válidos e inválidos (bordas coloridas e backgrounds sutis).

### `script.js`
Código JavaScript do front-end responsável por:
- Capturar eventos de input e submit do formulário
- Validar email em tempo real usando expressão regular (regex)
- Exibir mensagens de erro inline sem uso de alert
- Realizar comunicação assíncrona com o servidor via fetch API
- Atualizar dinamicamente a interface com base nas respostas do servidor
- Implementar feedback tátil visual no botão ao clicar

### `server.js`
Servidor Node.js com Express que implementa:
- Endpoint POST `/validate-email` para validação de email
- Validação detalhada no back-end com regras específicas
- Retorno de status HTTP 400 com mensagens descritivas de erro
- Servir arquivos estáticos (HTML, CSS, JS)
- Configuração de CORS para permitir requisições do front-end

### `package.json`
Arquivo de configuração do projeto Node.js contendo:
- Metadados do projeto (nome, versão, autor)
- Dependências necessárias (express, cors)
- Scripts de execução (npm start)
- Informações de identificação do aluno

### `.gitignore`
Define quais arquivos e pastas devem ser ignorados pelo Git:
- `node_modules/` - dependências instaladas localmente
- `package-lock.json` - arquivo de lock de versões
- `.DS_Store` - arquivos de sistema do macOS

## Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
npm start
```

### 3. Acessar a aplicação
Abra o navegador e acesse: `http://localhost:3000`

## Funcionalidades Implementadas

- ✅ Campo de email com validação regex no front-end
- ✅ Mensagens de erro inline (sem alert)
- ✅ Validação em tempo real durante digitação
- ✅ Validação no back-end com regras específicas
- ✅ Retorno de erro HTTP 400 com mensagem descritiva
- ✅ Atualização dinâmica da interface
- ✅ Comunicação assíncrona com o servidor (fetch API)
- ✅ Feedback tátil visual no botão ao clicar
- ✅ Estados visuais para inputs válidos e inválidos

## Regras de Validação (Back-end)

- Antes do @ deve ter no mínimo 2 caracteres
- Depois do @ deve ter no mínimo 2 caracteres
- Depois do @ deve ter um ponto
- Depois do ponto deve ter no mínimo 2 caracteres

## Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e animações
- **JavaScript (ES6+)** - Lógica do front-end
- **Node.js** - Ambiente de execução do servidor
- **Express.js** - Framework web para Node.js
- **CORS** - Middleware para permitir requisições cross-origin
