<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<div class="navbar" class:collapsed={isOpen ? 'active' : 'collapsed'}>
    <button class="toggle-button" on:click={() => isOpen = !isOpen}>
        ☰
    </button>

    <a href="/" class="nav-item">
        <i class="fas fa-home"></i>
        <span class="nav-text">Home</span>
    </a>
    <a href="/SquadList" class="nav-item">
        <i class="fas fa-users"></i>
        <span class="nav-text">Team Squads</span>
    </a>
    <a href="/[userid]/savedsquads" class="nav-item">
        <i class="fas fa-tools"></i>
        <span class="nav-text">Custom Squad Builder</span>
    </a>
</div>

<div>
    <slot />
</div>

<script>
    let isOpen = false;
</script>