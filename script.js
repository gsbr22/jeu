// Initialisation du jeu
document.addEventListener('DOMContentLoaded', function() {
    // Remplir le menu déroulant des ligues
    const leagueSelect = document.getElementById('league-select');
    leagues.forEach(league => {
        const option = document.createElement('option');
        option.value = league.id;
        option.textContent = league.name;
        leagueSelect.appendChild(option);
    });
    
    // Quand une ligue est sélectionnée, remplir les clubs
    leagueSelect.addEventListener('change', function() {
        const clubSelect = document.getElementById('club-select');
        clubSelect.innerHTML = '<option value="">Sélectionnez un club</option>';
        clubSelect.disabled = !this.value;
        
        if (this.value) {
            const selectedLeague = leagues.find(l => l.id === this.value);
            selectedLeague.clubs.forEach(club => {
                const option = document.createElement('option');
                option.value = club.id;
                option.textContent = club.name;
                clubSelect.appendChild(option);
            });
        }
    });
    
    // Bouton pour commencer le jeu
    document.getElementById('start-game').addEventListener('click', function() {
        const clubSelect = document.getElementById('club-select');
        if (clubSelect.value) {
            startGame(clubSelect.value);
        } else {
            showMessage('Veuillez sélectionner un club', 'error');
        }
    });
    
    // Recherche de joueurs
    document.getElementById('search-btn').addEventListener('click', function() {
        const query = document.getElementById('player-search').value;
        if (query) {
            searchPlayers(query);
        }
    });
    
    // Permettre la recherche avec Entrée
    document.getElementById('player-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('search-btn').click();
        }
    });
});
