import React, { useState, useEffect } from 'react';

import { getShips } from 'Services/StarWarsAPI';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface ISpaceShip {
	readonly name: string | null;
}

const Ships: ISpaceShip = {
	name: null,
};

const ShipsProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	const [ships, setShips] = useState<[ISpaceShip]>([Ships]);

	const test = async () => {
		const restul = getShips();
		// console.log(restul);
	};
	useEffect(() => {
		console.log(getShips());
		//eslint-disable-next-line
	}, []);

	//@ts-ignore
	return <ShipsContext.Provider value={ships}>{children}</ShipsContext.Provider>;
};

const ShipsContext = React.createContext(Ships);

export { ShipsContext, ShipsProvider };
