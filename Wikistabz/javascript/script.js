// Dados das wikis (simulando uma base de dados)
const wikis = [
    { name: "DayZ" },
    { name: "EldenRing" },
    { name: "OuterWilds" },
    { name: "MilMo" }
    // Adicione mais jogos conforme necessário
];

// Função para carregar as wikis inicialmente
function loadWikis() {
    const wikiList = document.getElementById('wiki-list');
    wikis.forEach(wiki => {
        const wikiItem = document.createElement('div');
        wikiItem.classList.add('wiki-item');
        wikiItem.innerHTML = `
            <img src="images/${wiki.name.toLowerCase()}-logo.png" alt="${wiki.name}" class="game-icon" data-game="${wiki.name.toLowerCase()}">
            <span class="game-name">${wiki.name}</span>
        `;
        wikiList.appendChild(wikiItem);
    });

    // Atualizar contador de wikis disponíveis
    document.getElementById('wiki-count').textContent = wikis.length;
}

// Função para filtrar wikis com base no termo de pesquisa
function searchWikis(query) {
    query = query.toLowerCase().trim();
    const filteredWikis = wikis.filter(wiki => wiki.name.toLowerCase().includes(query));
    displayWikis(filteredWikis);
}

// Função para exibir wikis filtradas
function displayWikis(wikis) {
    const wikiList = document.getElementById('wiki-list');
    wikiList.innerHTML = '';

    wikis.forEach(wiki => {
        const wikiItem = document.createElement('div');
        wikiItem.classList.add('wiki-item');
        wikiItem.innerHTML = `
            <img src="images/${wiki.name.toLowerCase()}-logo.png" alt="${wiki.name}" class="game-icon" data-game="${wiki.name.toLowerCase()}">
            <span class="game-name">${wiki.name}</span>
        `;
        wikiList.appendChild(wikiItem);
    });

    // Atualizar contador de wikis disponíveis
    document.getElementById('wiki-count').textContent = wikis.length;
}

// Função para configurar eventos e interações
function setupEvents() {
    const gameIcons = document.querySelectorAll('.game-icon');

    gameIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            const gameName = icon.getAttribute('data-game');
            changeBackgroundImage(gameName);
        });

        icon.addEventListener('mouseout', function() {
            resetBackgroundImage();
        });
    });

    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('search-input');
        const searchQuery = searchInput.value;
        searchWikis(searchQuery);
    });
}

// Função para mudar a imagem de fundo com efeito de fade
function changeBackgroundImage(gameName) {
    const body = document.body;
    const imageUrl = `url(img/${gameName}-background.png)`;

    // Aplicar efeito de fade
    body.style.transition = 'background-image 0.5s ease-in-out';
    body.style.backgroundImage = imageUrl;
}

// Função para restaurar a imagem de fundo original com efeito de fade
function resetBackgroundImage() {
    const body = document.body;
    const initialImageUrl = `url(img/initial-background.jpg)`;

    // Aplicar efeito de fade
    body.style.transition = 'background-image 0.5s ease-in-out';
    body.style.backgroundImage = initialImageUrl;
}

// Carregar as wikis, configurar eventos e mudar imagem de fundo inicial
document.addEventListener('DOMContentLoaded', function() {
    loadWikis();
    setupEvents();
    resetBackgroundImage(); // Definir imagem de fundo inicial ao carregar a página
});
