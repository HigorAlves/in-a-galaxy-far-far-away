import React from 'react';

import { ShipsProvider } from 'Store';

import Colors from 'Assets/Theme/Colors';

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
		<section style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
			<input
				name='input'
				type='number'
				min='0'
				placeholder='How many MGLT?'
				style={{
					height: 50,
					fontSize: '1.5rem',
					borderRadius: 4,
					appearance: 'none',
					borderColor: Colors.red,
					borderWidth: 2,
					outline: 'none',
					backgroundColor: Colors.backgroundSecondary,
					borderStyle: 'solid',
					color: Colors.font,
					paddingLeft: 10,
				}}
			/>
		</section>
	</ShipsProvider>
);

export default Home;
