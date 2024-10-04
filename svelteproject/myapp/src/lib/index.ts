// place files you want to import through the `$lib` alias in this folder.
export type SquadData = {players: Player[]} | undefined;
type Player = {
    name: string;
    position: string;
    nationality: string;
};