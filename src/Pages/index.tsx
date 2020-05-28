import React, { useContext } from 'react';

import { ShipsContext } from 'Store';

import { Header, Input, Card, Loading } from 'Components';

import { Container } from './style';

const Home = (): React.ReactElement => {
	const ships = useContext(ShipsContext);

	return (
		<>
			<Header />
			<Input />
			{ships.length < 1 ? <Loading /> : null}
			<Container>
				<Card />
			</Container>
		</>
	);
};

export default Home;
