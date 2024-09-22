import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultSquad = { Custom: { team: "Custom Squad", players: [] } };

let initialSquad = defaultSquad;

if (browser) {
    const storedSquad = localStorage.getItem('CustomSquad');
    initialSquad = storedSquad ? JSON.parse(storedSquad) : defaultSquad;
}


export const squadStore = writable(initialSquad);

if (browser) {
    squadStore.subscribe((value) => {
        localStorage.setItem('CustomSquad', JSON.stringify(value));
    });
}