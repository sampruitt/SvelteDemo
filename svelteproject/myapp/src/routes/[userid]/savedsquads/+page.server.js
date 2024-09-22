import { fail } from '@sveltejs/kit';

let playerList = [];

export const actions = {
    submit: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('player'); 

        if (!name) {
            return fail(400, 'Please provide a player name');
        }

        playerList.push(name);

        console.log('Player submitted:', name);

        console.log('Player list:', playerList);

        return {
            success: true,
            message: 'Player added to squad'
        };
    }
};
