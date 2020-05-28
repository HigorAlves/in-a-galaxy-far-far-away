import React from 'react';

import { ShipsProvider } from 'Store';

import { Header, Input, Card } from 'Components';

import { Container } from './style';

const Home = (): React.ReactElement => (
	<ShipsProvider>
		<Header />
		<Input />
		<Container>
			<Card />
		</Container>
	</ShipsProvider>
);

export default Home;
