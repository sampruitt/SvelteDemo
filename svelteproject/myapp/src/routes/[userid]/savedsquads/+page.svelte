<script>
    import { squadStore } from '../../../stores/squadstore.js';
    import { onMount } from 'svelte';
    let player = '';
    let playerPosition = '';
    let playerNationality = '';
    /**
	 * @type {any[]}
	 */
    let squad = [];
    
    onMount(() => {
        squadStore.subscribe(value => {
            squad = value.Custom.players;
        });
    });

    $: {
        squadStore.subscribe(value => {
            squad = value.Custom.players;
        });
    }

    function addPlayer() {
        if (player && playerPosition && playerNationality) {
            const newPlayer = { name: player, position: playerPosition, nationality : playerNationality };

            squadStore.update(currentSquad => {
                currentSquad.Custom.players = [...currentSquad.Custom.players, newPlayer];
                return currentSquad;
            });

            player = '';
            playerPosition = '';
            playerNationality = '';
        }
    }
</script>

<h1>Squad Management</h1>

<form on:submit|preventDefault={addPlayer}>
    <input type="text" bind:value={player} placeholder="Enter player name" required>
    <input type="text" bind:value={playerPosition} placeholder="Enter player position" required>
    <input type="text" bind:value={playerNationality} placeholder="Enter player nationality" required>
    <button type="submit">Add Player</button>
</form>

<h2>Saved Squads</h2>

<table>
    <thead>
        <tr>
            <th>Player Name</th>
            <th>Position</th>
            <th>Number</th>
        </tr>
    </thead>
    <tbody>
        {#each squad as player, index}
            <tr>
                <td>{index + 1}. {player.name}</td>
                <td>{player.position}</td>
                <td>{player.nationality}</td>
            </tr>
        {/each}
    </tbody>
</table>

<a href="../../" class="button-link">
    <button type="button">Go back to the homepage</button>
</a>