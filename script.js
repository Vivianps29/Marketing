document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    // Impede o recarregamento padrão da página ao enviar o formulário
    event.preventDefault();

    // Captura os valores digitados pelo usuário
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const mensagem = document.getElementById('mensagem').value;

    // Formata a data para o padrão brasileiro (DD/MM/AAAA)
    const dataFormatada = data.split('-').reverse().join('/');

    // Configuração do número do Luiz (Substitua pelo número real com DDD)
    // Exemplo: 55 + DDD + Número. (5511999999999)
    const numeroTelefone = "5538999855691"; 

    // Cria a mensagem de texto estruturada que vai chegar no WhatsApp do Luiz
    const textoMensagem = `Olá Luiz! Gostaria de agendar um trabalho.%0A%0A` +
                          `*Nome:* ${nome}%0A` +
                          `*Serviço:* ${servico}%0A` +
                          `*Data de Preferência:* ${dataFormatada}%0A` +
                          `*Detalhes:* ${mensagem}`;

    // Monta a URL da API do WhatsApp
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${textoMensagem}`;

    // Abre uma nova aba no navegador direcionando para o WhatsApp com a mensagem pronta
    window.open(urlWhatsapp, '_blank');
});