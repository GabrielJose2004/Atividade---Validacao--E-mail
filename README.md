# Atividade 001 - Validação de Email

**Aluno:** Gabriel José de Souza  
**Turma:** 04AN  
**Instituição:** USCS - Universidade Municipal de São Caetano do Sul  
**Curso:** ADS - Análise e Desenvolvimento de Sistemas  
**Data de entrega:** 01/05/2026

## Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
npm start
```

### 3. Abrir o arquivo HTML
Abra o arquivo `index.html` no navegador

## Funcionalidades

- ✅ Validação de email com regex no front-end
- ✅ Mensagens de erro inline (sem alert)
- ✅ Validação no back-end com regras específicas
- ✅ Retorno de erro 400 com mensagem
- ✅ Atualização dinâmica da interface
- ✅ Comunicação assíncrona com o servidor

## Regras de validação (back-end)

- Antes do @ deve ter no mínimo 2 caracteres
- Depois do @ deve ter no mínimo 2 caracteres
- Depois do @ deve ter um ponto
- Depois do ponto deve ter no mínimo 2 caracteres
