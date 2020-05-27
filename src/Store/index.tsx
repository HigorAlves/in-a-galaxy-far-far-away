import React, { useState, useEffect } from 'react';

import API from 'Services/StarWarsAPI';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface ISpaceShip {
	readonly name: string | null;
}

const Ships: ISpaceShip = {
	name: null,
};

const ShipsProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	const [ships, setShips] = useState<[ISpaceShip]>([Ships]);

	useEffect(() => {
		API.get('?page=1').then((data) => console.log(data.data));
		//eslint-disable-next-line
	}, []);

	//@ts-ignore
	return <ShipsContext.Provider value={ships}>{children}</ShipsContext.Provider>;
};

const ShipsContext = React.createContext(Ships);

export { ShipsContext, ShipsProvider };

// BUSCAR DA API SEMPRE QUE O SITE ABRIR
// ADICIONAR AS FOTOS NOS CARDS ASSIM QUE O SISTEMA CARREGAR OS DADOS
// LISTAR TODAS AS OPÇOES DE NAVE
// QUANDO USUARIO MUDAR O INPUT MUDAR NOS CARDS OS VALORES QUE CADA NAVE GASTA
