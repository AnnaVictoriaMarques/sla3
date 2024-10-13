function responderQuiz(resposta) {
    const resultadoDiv = document.getElementById('resultado');
    
    // Limpa as mensagens anteriores
    resultadoDiv.innerHTML = '';

    // Cria uma nova mensagem baseada na resposta
    let mensagem;
    switch (resposta) {
        case 'Viagem':
            mensagem = 'Estresse e risada ao mesmo tempo!';
            break;
        case 'Festa':
            mensagem = 'Na duvida Alcool cura!';
            break;
        case 'Cinema':
            mensagem = 'Se ver e se divertir!';
            break;
        case 'Filme A':
            mensagem = 'Um dos melhores filmes que assisti no cinema';
            break;
        case 'Filme B':
            mensagem = 'Gostei mais do livro do que do filme';
            break;
        case 'Filme C':
            mensagem = 'Melhor filme de comedia de antigamente';
            break;
        case 'Música A':
            mensagem = 'Nada como sofrer com o ferrugem';
            break;
        case 'Música B':
            mensagem = 'Máscara na cara, ninja da quebrada';
            break;
        case 'Música C':
            mensagem = 'Melhor Música';
            break;
        default:
            mensagem = '';
    }

    // Adiciona a nova mensagem ao resultado
    resultadoDiv.innerHTML += `<p>${mensagem}</p>`;
    
    // Mostra a div de resultado se estiver oculta
    resultadoDiv.classList.remove('hidden');
}

function apagarVelas(bolo) {
    bolo.innerHTML = "🎂"; // Remove as velas
    document.getElementById('mensagem-bolo').classList.remove('hidden');
}