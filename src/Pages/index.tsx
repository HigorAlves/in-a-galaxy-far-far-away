import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';

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
				{ships.length > 1 ? ships.map((ship: any) => <Card key={ship.name} name={ship.name} mglt={ship.mglt} stops={0} />) : null}
			</Container>
		</>
	);
};

export default Home;
