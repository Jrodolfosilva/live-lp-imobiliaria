document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form form_1');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // 1. Impede o envio padrão do formulário
            e.preventDefault();

            // 2. Captura os valores dos campos
            const nome = document.getElementById('your-name').value;
            const email = document.getElementById('your-email').value;
            const telefone = document.getElementById('your-phone').value;

            // 3. Configurações do WhatsApp
            const numeroWhatsApp = "5521972204752"; // Número extraído do seu HTML
            
            // 4. Monta a mensagem (codificada para URL)
            const mensagemBase = `Olá, meu nome é ${nome}, gostaria de mais informações sobre o Live Otávio Tarquino.`;
            const mensagemComplemento = `\n\nDados de contato:\nE-mail: ${email}\nTelefone: ${telefone}`;
            
            const mensagemFinal = encodeURIComponent(mensagemBase + mensagemComplemento);

            // 5. Gera o link e redireciona
            const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemFinal}`;

            // Abre em uma nova aba
            window.open(urlWhatsapp, '_blank');
        });
    }
});