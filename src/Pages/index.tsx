import React from 'react';

import { ShipsProvider } from 'Store';

const Home = (): React.ReactElement => (
	<ShipsProvider>
		<header style={{ textAlign: 'center', marginTop: 40 }}>
			<h1>Star Wars: How many Stops</h1>
			<p>Find the better Spaceship for your travel!</p>
			<small>
				Created by:
				<a href='https://github.com/higoralves/' target='blank'>
					Higor Alves
				</a>
			</small>
		</header>
	</ShipsProvider>
);

export default Home;
