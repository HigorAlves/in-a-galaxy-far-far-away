import React from 'react';

import Colors from 'Assets/Theme/Colors';

import { Container, Input } from './styles';

const InputComponent = (): React.ReactElement => (
	<Container>
		<Input name='input' type='number' min='0' placeholder='How many MGLT?' />
	</Container>
);

export default InputComponent;
