import React from 'react';

import { Card, Image, VerticalDivider, Title, InfoContainer, Text, HorizontalDivider } from './styles';

const CardComponent = (): React.ReactElement => (
	<Card>
		<Image src={require('../../Assets/Images/example.jpeg')} alt='Example Image' />
		<VerticalDivider />
		<Title>Death Star</Title>
		<InfoContainer>
			<Text>MGLT: 10</Text>
			<HorizontalDivider />
			<Text>Stops: 6</Text>
		</InfoContainer>
	</Card>
);

export default CardComponent;
