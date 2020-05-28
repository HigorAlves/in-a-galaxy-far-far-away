import React from 'react';

import { ShipsProvider } from 'Store';

import Colors from 'Assets/Theme/Colors';

import { Header } from 'Components';

const Home = (): React.ReactElement => (
	<ShipsProvider>
		<Header />
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
		<section style={{ marginTop: 40, marginLeft: 40 }}>
			<div
				style={{
					backgroundColor: Colors.backgroundSecondary,
					width: 200,
					borderRadius: 5,
					borderColor: Colors.red,
					borderWidth: 1,
					borderStyle: 'solid',
				}}
			>
				<img src={require('../Assets/Images/example.jpeg')} width='200' height='200' style={{ marginTop: 1.5 }} />
				<div style={{ height: 2, backgroundColor: Colors.red, width: 200, marginBottom: 5 }} />
				<h3 style={{ padding: 5, fontWeight: 'bold', textAlign: 'center' }}>Death Star</h3>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5, paddingBottom: 5 }}>
					<p style={{ padding: 5, fontSize: '1rem' }}>MGLT: 10</p>
					<div style={{ height: 28, backgroundColor: Colors.red, width: 2, marginBottom: 5 }} />
					<p style={{ padding: 5, fontSize: '1rem' }}>Stops: 6</p>
				</div>
			</div>
		</section>
	</ShipsProvider>
);

export default Home;
