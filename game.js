// Données des ligues et clubs (top 10 UEFA)
const leagues = [
    { 
        id: 'premier-league', 
        name: 'Premier League (Angleterre)', 
        clubs: [
            { id: 'mancity', name: 'Manchester City', budget: 200, reputation: 5, debt: 0 },
            { id: 'liverpool', name: 'Liverpool', budget: 150, reputation: 5, debt: 50 },
            { id: 'chelsea', name: 'Chelsea', budget: 120, reputation: 5, debt: 800 },
            { id: 'manutd', name: 'Manchester United', budget: 180, reputation: 5, debt: 600 },
            { id: 'tottenham', name: 'Tottenham', budget: 100, reputation: 4, debt: 700 },
            { id: 'arsenal', name: 'Arsenal', budget: 90, reputation: 4, debt: 200 },
            { id: 'leicester', name: 'Leicester', budget: 70, reputation: 3, debt: 0 },
            { id: 'westham', name: 'West Ham', budget: 60, reputation: 3, debt: 100 },
            { id: 'astonvilla', name: 'Aston Villa', budget: 50, reputation: 3, debt: 0 },
            { id: 'wolves', name: 'Wolves', budget: 40, reputation: 3, debt: 0 }
        ]
    },
    { 
        id: 'laliga', 
        name: 'La Liga (Espagne)', 
        clubs: [
            { id: 'real-madrid', name: 'Real Madrid', budget: 180, reputation: 5, debt: 300 },
            { id: 'barcelona', name: 'Barcelona', budget: 150, reputation: 5, debt: 1200 },
            { id: 'atletico', name: 'Atletico Madrid', budget: 120, reputation: 5, debt: 400 },
            { id: 'sevilla', name: 'Sevilla', budget: 80, reputation: 4, debt: 100 },
            { id: 'villareal', name: 'Villareal', budget: 60, reputation: 4, debt: 0 },
            { id: 'real-sociedad', name: 'Real Sociedad', budget: 50, reputation: 3, debt: 0 },
            { id: 'betis', name: 'Betis', budget: 40, reputation: 3, debt: 50 },
            { id: 'athletic', name: 'Athletic Bilbao', budget: 35, reputation: 3, debt: 0 },
            { id: 'valencia', name: 'Valencia', budget: 30, reputation: 3, debt: 300 },
            { id: 'celta', name: 'Celta Vigo', budget: 25, reputation: 2, debt: 50 }
        ]
    },
    // Autres ligues avec structure similaire...
    { 
        id: 'bundesliga', 
        name: 'Bundesliga (Allemagne)', 
        clubs: [
            { id: 'bayern', name: 'Bayern Munich', budget: 190, reputation: 5, debt: 0 },
            { id: 'dortmund', name: 'Dortmund', budget: 130, reputation: 5, debt: 50 },
            { id: 'leipzig', name: 'RB Leipzig', budget: 100, reputation: 4, debt: 0 },
            { id: 'leverkusen', name: 'Leverkusen', budget: 80, reputation: 4, debt: 0 },
            { id: 'wolfsburg', name: 'Wolfsburg', budget: 60, reputation: 3, debt: 0 },
            { id: 'frankfurt', name: 'Eintracht Frankfurt', budget: 50, reputation: 3, debt: 0 },
            { id: 'gladbach', name: 'Mönchengladbach', budget: 45, reputation: 3, debt: 0 },
            { id: 'hoffenheim', name: 'Hoffenheim', budget: 40, reputation: 3, debt: 0 },
            { id: 'stuttgart', name: 'Stuttgart', budget: 35, reputation: 2, debt: 0 },
            { id: 'freiburg', name: 'Freiburg', budget: 30, reputation: 2, debt: 0 }
        ]
    },
    { 
        id: 'serie-a', 
        name: 'Serie A (Italie)', 
        clubs: [
            { id: 'juventus', name: 'Juventus', budget: 160, reputation: 5, debt: 400 },
            { id: 'inter', name: 'Inter Milan', budget: 140, reputation: 5, debt: 600 },
            { id: 'milan', name: 'AC Milan', budget: 110, reputation: 5, debt: 300 },
            { id: 'roma', name: 'AS Roma', budget: 90, reputation: 4, debt: 250 },
            { id: 'napoli', name: 'Napoli', budget: 80, reputation: 4, debt: 150 },
            { id: 'lazio', name: 'Lazio', budget: 60, reputation: 4, debt: 100 },
            { id: 'atalanta', name: 'Atalanta', budget: 50, reputation: 3, debt: 0 },
            { id: 'fiorentina', name: 'Fiorentina', budget: 40, reputation: 3, debt: 50 },
            { id: 'sassuolo', name: 'Sassuolo', budget: 30, reputation: 2, debt: 0 },
            { id: 'torino', name: 'Torino', budget: 25, reputation: 2, debt: 0 }
        ]
    },
    { 
        id: 'ligue-1', 
        name: 'Ligue 1 (France)', 
        clubs: [
            { id: 'psg', name: 'PSG', budget: 220, reputation: 5, debt: 100 },
            { id: 'lyon', name: 'Lyon', budget: 90, reputation: 4, debt: 200 },
            { id: 'marseille', name: 'Marseille', budget: 70, reputation: 4, debt: 150 },
            { id: 'monaco', name: 'Monaco', budget: 60, reputation: 4, debt: 0 },
            { id: 'lille', name: 'Lille', budget: 50, reputation: 3, debt: 0 },
            { id: 'rennes', name: 'Rennes', budget: 40, reputation: 3, debt: 0 },
            { id: 'nice', name: 'Nice', budget: 35, reputation: 3, debt: 0 },
            { id: 'strasbourg', name: 'Strasbourg', budget: 30, reputation: 2, debt: 0 },
            { id: 'lens', name: 'Lens', budget: 25, reputation: 2, debt: 0 },
            { id: 'montpellier', name: 'Montpellier', budget: 20, reputation: 2, debt: 0 }
        ]
    }
    // On pourrait ajouter d'autres ligues ici...
];

// Joueurs fictifs (en réalité on utiliserait une API comme Transfermarkt)
const players = [
    { id: 1, name: 'Lionel Messi', age: 35, position: 'RW', value: 50, wage: 30, club: 'psg' },
    { id: 2, name: 'Kylian Mbappé', age: 23, position: 'ST', value: 180, wage: 40, club: 'psg' },
    { id: 3, name: 'Kevin De Bruyne', age: 31, position: 'CAM', value: 80, wage: 20, club: 'mancity' },
    { id: 4, name: 'Virgil van Dijk', age: 31, position: 'CB', value: 50, wage: 15, club: 'liverpool' },
    { id: 5, name: 'Erling Haaland', age: 22, position: 'ST', value: 150, wage: 25, club: 'mancity' },
    { id: 6, name: 'Karim Benzema', age: 34, position: 'ST', value: 60, wage: 20, club: 'real-madrid' },
    { id: 7, name: 'Robert Lewandowski', age: 33, position: 'ST', value: 45, wage: 18, club: 'barcelona' },
    { id: 8, name: 'Joshua Kimmich', age: 27, position: 'CDM', value: 70, wage: 15, club: 'bayern' },
    { id: 9, name: 'Harry Kane', age: 29, position: 'ST', value: 90, wage: 20, club: 'tottenham' },
    { id: 10, name: 'Vinicius Junior', age: 22, position: 'LW', value: 100, wage: 15, club: 'real-madrid' }
    // On pourrait ajouter beaucoup plus de joueurs...
];

// État du jeu
let gameState = {
    currentClub: null,
    squad: [],
    budget: 0,
    reputation: 0
};

// Fonctions du jeu
function startGame(clubId) {
    const club = leagues.flatMap(l => l.clubs).find(c => c.id === clubId);
    if (!club) return;

    gameState.currentClub = club;
    gameState.budget = club.budget;
    gameState.reputation = club.reputation;
    
    // Filtrer les joueurs du club
    gameState.squad = players.filter(p => p.club === clubId);
    
    updateUI();
    showMessage(`Bienvenue chez ${club.name}! Budget: €${club.budget}M`);
}

function updateUI() {
    if (gameState.currentClub) {
        document.getElementById('club-name').textContent = gameState.currentClub.name;
        document.getElementById('club-budget').textContent = `Budget: €${gameState.budget}M`;
        document.getElementById('club-reputation').textContent = `Réputation: ${'★'.repeat(gameState.reputation)}`;
        
        // Afficher l'effectif
        const squadList = document.getElementById('squad-list');
        squadList.innerHTML = '';
        
        gameState.squad.forEach(player => {
            const playerEl = document.createElement('div');
            playerEl.className = 'player-card';
            playerEl.innerHTML = `
                <div class="player-info">
                    <strong>${player.name}</strong> (${player.age} ans)<br>
                    ${player.position} - Valeur: €${player.value}M - Salaire: €${player.wage}M/an
                </div>
            `;
            squadList.appendChild(playerEl);
        });
        
        // Afficher les sections
        document.getElementById('squad-section').classList.remove('hidden');
        document.getElementById('transfer-market').classList.remove('hidden');
    }
}

function searchPlayers(query) {
    const results = players.filter(player => 
        player.name.toLowerCase().includes(query.toLowerCase()) && 
        player.club !== gameState.currentClub.id
    );
    
    const resultsEl = document.getElementById('player-results');
    resultsEl.innerHTML = '';
    
    if (results.length === 0) {
        resultsEl.innerHTML = '<p>Aucun joueur trouvé</p>';
        return;
    }
    
    results.forEach(player => {
        const playerEl = document.createElement('div');
        playerEl.className = 'player-card';
        playerEl.innerHTML = `
            <div class="player-info">
                <strong>${player.name}</strong> (${player.age} ans)<br>
                ${player.position} - Valeur: €${player.value}M - Salaire: €${player.wage}M/an
            </div>
            <div class="player-actions">
                <button onclick="makeOffer(${player.id}, ${player.value})">Faire une offre</button>
            </div>
        `;
        resultsEl.appendChild(playerEl);
    });
}

function makeOffer(playerId, value) {
    const player = players.find(p => p.id === playerId);
    if (!player) return;
    
    // Vérifier si le budget est suffisant
    if (gameState.budget < value) {
        showMessage('Fonds insuffisants pour ce transfert!', 'error');
        return;
    }
    
    // Simuler une négociation
    const success = Math.random() > 0.3; // 70% de chance de succès
    
    if (success) {
        // Mettre à jour le budget
        gameState.budget -= value;
        
        // Ajouter le joueur à l'effectif
        gameState.squad.push({...player, club: gameState.currentClub.id});
        
        showMessage(`Transfert réussi! ${player.name} a rejoint votre club pour €${value}M`);
        updateUI();
    } else {
        showMessage(`${player.name} a refusé votre offre ou le club a rejeté votre proposition.`, 'error');
    }
}

function showMessage(message, type = 'success') {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.style.backgroundColor = type === 'error' ? '#e74c3c' : '#27ae60';
    messageBox.style.display = 'block';
    
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}
