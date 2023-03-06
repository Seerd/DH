export const Items: {[itemid: string]: ItemData} = {
	crystalorb: {
		name: "Crystal Orb",
		num: 1001,
		desc: "The holder's secondary type is replaced with Crystal. 20% boost to Crystal attacks.",
		onStart(pokemon) {
			if (pokemon.hasType('Crystal')) return false;
			if (!pokemon.addType('Crystal')) return false;
			pokemon.setType([pokemon.types[1],"Crystal"]);
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		}
		num: 275,
		gen: 8,
	},
	feralorb: {
		name: "Feral Orb",
		num: 1001,
		desc: "The holder's secondary type is replaced with Feral. 20% boost to Feral attacks.",
		onStart(pokemon) {
			if (pokemon.hasType('Feral')) return false;
			if (!pokemon.addType('Feral')) return false;
			pokemon.setType([pokemon.types[1],"Feral"]);
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		}
		num: 275,
		gen: 8,
	},
};