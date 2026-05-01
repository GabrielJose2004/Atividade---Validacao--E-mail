/*
    Atividade 001 - Desafio em dupla: Validação
    Aluno: Gabriel José de Souza
    Turma: 04AN - USCS - ADS
    Data de entrega: 01/05/2026
*/

const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const form = document.getElementById('emailForm');

// Validação regex no front-end
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Captura evento de input para validação em tempo real
emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    
    if (email === '') {
        errorMessage.textContent = '';
        emailInput.classList.remove('error', 'success');
        return;
    }
    
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Formato de email inválido';
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
    } else {
        errorMessage.textContent = '';
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
    }
});

// Captura evento de submit do formulário
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const email = emailInput.value.trim();
    
    // Feedback tátil de click
    submitBtn.classList.add('clicking');
    setTimeout(() => submitBtn.classList.remove('clicking'), 300);
    
    // Validação front-end antes de enviar
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Por favor, insira um email válido';
        emailInput.classList.add('error');
        return;
    }
    
    // Comunicação assíncrona com o servidor
    try {
        const response = await fetch('http://localhost:3000/validate-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });
        
        const data = await response.json();
        
        // Atualização dinâmica da interface
        if (response.status === 400) {
            errorMessage.textContent = data.message;
            errorMessage.style.color = '#d32f2f';
            emailInput.classList.add('error');
            emailInput.classList.remove('success');
        } else {
            errorMessage.textContent = 'Email válido!';
            errorMessage.style.color = '#388e3c';
            emailInput.classList.remove('error');
            emailInput.classList.add('success');
            
            setTimeout(() => {
                errorMessage.style.color = '#d32f2f';
                errorMessage.textContent = '';
            }, 3000);
        }
    } catch (error) {
        errorMessage.textContent = 'Erro ao conectar com o servidor. Certifique-se de que o servidor está rodando.';
        errorMessage.style.color = '#d32f2f';
        emailInput.classList.add('error');
    }
});
