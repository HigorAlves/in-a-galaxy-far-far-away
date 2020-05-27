import React from 'react';

import { Container, Name, Model, Cost, Image, TextContainer } from './style';

const SpaceshipCard = () => (
	<Container>
		<Image src={'https://toppng.com/uploads/preview/the-death-star-star-wars-death-star-11562902961caqjz9dfv9.png'} />
		<TextContainer>
			<Name>Death Star</Name>
			<Model>DS-1 Orbital Battle Station</Model>
			<Cost>
				STOPS: <strong>10</strong>
			</Cost>
		</TextContainer>
	</Container>
);

export default SpaceshipCard;
