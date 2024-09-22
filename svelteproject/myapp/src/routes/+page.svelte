<script>
    import { leaguesData, teamsData } from '$lib/reference';
    import { getLeaguesData, getTeamsData } from '$lib/populateTables';
    import { onMount } from 'svelte';
    let leagues = [];
    let teams = [];
    onMount(() => {
    leagues = getLeaguesData(leaguesData);
    teams = getTeamsData(teamsData);
    });
</script>


  <h1>Football Leagues and Top Scoring Teams</h1>
  <div class="content">
    <div class="text-section">
      <h2 style="color: #ddd">Introduction</h2>
      <p>
        Here is an overview of 5 football leagues and their top scoring teams.
      </p>
      <p>
        Football is a sport that is well known across the world and I would like to demonstrate some of the top scoring teams from each of these 5 leagues.
      </p>
      <p><a href="./SquadList">Check out the starting 11 for the top teams from each league here!</a></p>
    </div>
    <div class="tables-section">
      <div class="table-container">
        <table id="leaguesTable">
          <thead>
            <tr>
              <th>League ID</th>
              <th>League Name</th>
            </tr>
          </thead>
          <tbody>
            {#each leagues as league}
          <tr>
            <td>{league.id}</td>
            <td>{league.name}</td>
          </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="table-container">
        <h2>Top Scoring Teams</h2>
        <table id="teamsTable">
          <thead>
            <tr>
              <th>League Name</th>
              <th>Team Name</th>
              <th>Goals Scored</th>
            </tr>
          </thead>
          <tbody>
            {#each teams as team}
            <tr>
              <td>{team.league}</td>
              <td>{team.name}</td>
              <td>{team.goals}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  