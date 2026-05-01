/*
    Atividade 001 - Desafio em dupla: Validação
    Aluno: Gabriel José de Souza
    Turma: 04AN - USCS - ADS
    Data de entrega: 01/05/2026
*/

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Validação de email no back-end
function validateEmail(email) {
    const parts = email.split('@');
    
    // Verifica se tem @
    if (parts.length !== 2) {
        return { valid: false, message: 'Email deve conter um @' };
    }
    
    const [localPart, domainPart] = parts;
    
    // Antes do @ deve ter no mínimo 2 caracteres
    if (localPart.length < 2) {
        return { valid: false, message: 'Antes do @ deve ter no mínimo 2 caracteres' };
    }
    
    // Depois do @ deve ter um ponto
    if (!domainPart.includes('.')) {
        return { valid: false, message: 'Depois do @ deve ter um ponto' };
    }
    
    const domainParts = domainPart.split('.');
    const beforeDot = domainParts[0];
    const afterDot = domainParts.slice(1).join('.');
    
    // Depois do @ deve ter no mínimo 2 caracteres (antes do ponto)
    if (beforeDot.length < 2) {
        return { valid: false, message: 'Depois do @ deve ter no mínimo 2 caracteres antes do ponto' };
    }
    
    // Depois do ponto deve ter no mínimo 2 caracteres
    if (afterDot.length < 2) {
        return { valid: false, message: 'Depois do ponto deve ter no mínimo 2 caracteres' };
    }
    
    return { valid: true, message: 'Email válido' };
}

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint de validação
app.post('/validate-email', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ message: 'Email não fornecido' });
    }
    
    const validation = validateEmail(email);
    
    if (!validation.valid) {
        return res.status(400).json({ message: validation.message });
    }
    
    return res.status(200).json({ message: validation.message });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Aluno: Gabriel José de Souza - Turma 04AN - USCS');
});
