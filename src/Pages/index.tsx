import React from 'react';
import Block from 'react-blocks';

import { Stars, SearchBar, SpaceshipCard } from 'Components';

import { Container, Header } from './style';

const Home = () => (
	<React.Fragment>
		<Stars />
		<Container layout justifyCenter>
			<Header>
				<h1>Star Wars: How many stops</h1>
				<p>Find the better Spaceship for your travel</p>
				<SearchBar />
			</Header>
			<SpaceshipCard />
		</Container>
	</React.Fragment>
);

export default Home;
