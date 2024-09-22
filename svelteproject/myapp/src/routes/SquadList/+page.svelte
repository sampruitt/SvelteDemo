<script lang="ts">
    import { onMount } from 'svelte';
    /** @type import ('/lib/index').SquadData */
    let squadData = { players: [] };
    let selectedTeam = '';

    const teamSquads = {
    premierLeague: {
        team: "Manchester City",
        players: [
            { name: "Ederson", position: "Goalkeeper", nationality: "Brazil" },
            { name: "Kyle Walker", position: "Right Back", nationality: "England" },
            { name: "Rúben Dias", position: "Center Back", nationality: "Portugal" },
            { name: "Nathan Aké", position: "Center Back", nationality: "Netherlands" },
            { name: "João Cancelo", position: "Left Back", nationality: "Portugal" },
            { name: "Rodri", position: "Defensive Midfielder", nationality: "Spain" },
            { name: "Kevin De Bruyne", position: "Central Midfielder", nationality: "Belgium" },
            { name: "Bernardo Silva", position: "Attacking Midfielder", nationality: "Portugal" },
            { name: "Riyad Mahrez", position: "Right Wing", nationality: "Algeria" },
            { name: "Phil Foden", position: "Left Wing", nationality: "England" },
            { name: "Erling Haaland", position: "Striker", nationality: "Norway" },
        ]
    },
    bundesliga: {
        team: "Bayern Munich",
        players: [
            { name: "Manuel Neuer", position: "Goalkeeper", nationality: "Germany" },
            { name: "Benjamin Pavard", position: "Right Back", nationality: "France" },
            { name: "Dayot Upamecano", position: "Center Back", nationality: "France" },
            { name: "Lucas Hernández", position: "Center Back", nationality: "France" },
            { name: "Alphonso Davies", position: "Left Back", nationality: "Canada" },
            { name: "Joshua Kimmich", position: "Defensive Midfielder", nationality: "Germany" },
            { name: "Leon Goretzka", position: "Central Midfielder", nationality: "Germany" },
            { name: "Jamal Musiala", position: "Attacking Midfielder", nationality: "Germany" },
            { name: "Leroy Sané", position: "Right Wing", nationality: "Germany" },
            { name: "Kingsley Coman", position: "Left Wing", nationality: "France" },
            { name: "Thomas Müller", position: "Striker", nationality: "Germany" },
        ]
    },
    serieA: {
        team: "Napoli",
        players: [
            { name: "Alex Meret", position: "Goalkeeper", nationality: "Italy" },
            { name: "Giovanni Di Lorenzo", position: "Right Back", nationality: "Italy" },
            { name: "Amir Rrahmani", position: "Center Back", nationality: "Kosovo" },
            { name: "Kim Min-jae", position: "Center Back", nationality: "South Korea" },
            { name: "Mario Rui", position: "Left Back", nationality: "Portugal" },
            { name: "Stanislav Lobotka", position: "Defensive Midfielder", nationality: "Slovakia" },
            { name: "Piotr Zieliński", position: "Central Midfielder", nationality: "Poland" },
            { name: "Frank Anguissa", position: "Central Midfielder", nationality: "Cameroon" },
            { name: "Hirving Lozano", position: "Right Wing", nationality: "Mexico" },
            { name: "Khvicha Kvaratskhelia", position: "Left Wing", nationality: "Georgia" },
            { name: "Victor Osimhen", position: "Striker", nationality: "Nigeria" },
        ]
    },
    ligue1: {
        team: "Paris Saint-Germain",
        players: [
            { name: "Gianluigi Donnarumma", position: "Goalkeeper", nationality: "Italy" },
            { name: "Achraf Hakimi", position: "Right Back", nationality: "Morocco" },
            { name: "Marquinhos", position: "Center Back", nationality: "Brazil" },
            { name: "Sergio Ramos", position: "Center Back", nationality: "Spain" },
            { name: "Nuno Mendes", position: "Left Back", nationality: "Portugal" },
            { name: "Marco Verratti", position: "Central Midfielder", nationality: "Italy" },
            { name: "Vitinha", position: "Central Midfielder", nationality: "Portugal" },
            { name: "Lionel Messi", position: "Right Wing", nationality: "Argentina" },
            { name: "Neymar", position: "Left Wing", nationality: "Brazil" },
            { name: "Kylian Mbappé", position: "Striker", nationality: "France" },
            { name: "Fabian Ruiz", position: "Attacking Midfielder", nationality: "Spain" },
        ]
    },
    eredivisie: {
        team: "Ajax",
        players: [
            { name: "Gerónimo Rulli", position: "Goalkeeper", nationality: "Argentina" },
            { name: "Jorge Sánchez", position: "Right Back", nationality: "Mexico" },
            { name: "Jurriën Timber", position: "Center Back", nationality: "Netherlands" },
            { name: "Calvin Bassey", position: "Center Back", nationality: "Nigeria" },
            { name: "Owen Wijndal", position: "Left Back", nationality: "Netherlands" },
            { name: "Edson Álvarez", position: "Defensive Midfielder", nationality: "Mexico" },
            { name: "Kenneth Taylor", position: "Central Midfielder", nationality: "Netherlands" },
            { name: "Steven Berghuis", position: "Attacking Midfielder", nationality: "Netherlands" },
            { name: "Dusan Tadic", position: "Right Wing", nationality: "Serbia" },
            { name: "Steven Bergwijn", position: "Left Wing", nationality: "Netherlands" },
            { name: "Brian Brobbey", position: "Striker", nationality: "Netherlands" },
        ]
    },
    Custom: {
        team: "Custom Squad",
        players: []
    }
};
onMount(() => {
        const savedSquad = localStorage.getItem('CustomSquad');
        if (savedSquad) {
            squadData = JSON.parse(savedSquad).Custom;
        }
    });

    function handleTeamSelect(event) {
        selectedTeam = event.target.value;

        if (!selectedTeam) {
            squadData = { players: [] };
        }
        else if (selectedTeam === 'Custom') {
            const savedSquad = localStorage.getItem('CustomSquad');
            if (savedSquad) {
                squadData = JSON.parse(savedSquad).Custom;
            } else {
                squadData = teamSquads[selectedTeam];
            }
        } else {
            squadData = teamSquads[selectedTeam];
        }
    }
    function clearLocalStorage() {
        localStorage.clear();
        alert('Squads have been cleared!');
        squadData = { players: [] };
    }
</script>

<div class="container">
    <h1>Select a Team</h1>
    <select id="teamSelect" on:change={handleTeamSelect}>
    <option value="">--Select a team--</option>
    <option value="premierLeague">Manchester City (Premier League)</option>
    <option value="bundesliga">Bayern Munich (Bundesliga)</option>
    <option value="serieA">Napoli (Serie A)</option>
    <option value="ligue1">Paris Saint-Germain (Ligue 1)</option>
    <option value="eredivisie">Ajax (Eredivisie)</option>
    <option value="Custom">Custom Squad</option>
    </select>


{#if squadData.players.length > 0}
    <table id="squadTable">
    <thead>
        <tr>
        <th>Player Name</th>
        <th>Position</th>
        <th>Nationality</th>
        </tr>
    </thead>
    <tbody>
        {#each squadData.players as player}
        <tr>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.nationality}</td>
        </tr>
        {/each}
    </tbody>
    </table>
{:else}
    <p>No team selected or no players available for this team.</p>
{/if}
</div>
<p><button on:click={clearLocalStorage}>Clear Squads</button></p>
<p><button id="backButton"><a href="/">navigate back to previous page</a></button></p>

<!-- <style>
    body {
    font-family: Arial, sans-serif;
    margin: 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/assets/webbackground.jpg');
    background-size: cover;
    }

    .container {
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
    text-align: center;
    color: #333;
    }

    table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    }

    th {
    background-color: #4CAF50;
    color: white;
    }

    tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
    }

    tbody tr:hover {
    background-color: #e0f7fa;
    cursor: pointer;
    }

    tbody tr:nth-child(even) {
    background-color: #ffffff;
    }

    #backButton {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    }

    #backButton:hover {
    background-color: #45a049;
    }

    #backButton:active {
    background-color: #3e8e41;
    }
</style> -->
