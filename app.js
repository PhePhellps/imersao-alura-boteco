console.log(dados);


function buscarBotecos(){
    const anoPesquisado = document.getElementById('ano').value;
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';
    const ganhadores = dados.filter(boteco => boteco.ano.includes(anoPesquisado));

    // Validações
    if (anoPesquisado === '') {
        resultados.innerHTML = '<p>Sem o ano, não posso mostrar resultados.</p>';
        return; // Interrompe a função
    }

    const anosValidos = [2022, 2023, 2024];
    if (!anosValidos.includes(parseInt(anoPesquisado))) {
        resultados.innerHTML = '<p>Digite apenas o ano que deseja consultar os ganhadores (2022, 2023 ou 2024).</p>';
        return; // Interrompe a função
    }

    ganhadores.forEach(boteco => {
        const li = document.createElement('li');
        li.classList.add('item-resultado'); // Adiciona a classe
        li.innerHTML = `
            <h2>${boteco.nomeButeco}</h2>
            <strong>Colocação:</strong> ${boteco.colocacao}<br>
            <strong>Endereço:</strong> ${boteco.endereco}<br>
            <strong>Prato:</strong> ${boteco.prato}<br>
            <strong>Descrição do prato:</strong> ${boteco.descricaoPrato}<br>
            <a href="${boteco.instagram}">Instagram</a>
        `;
        resultados.appendChild(li);
    });
    
};

let 