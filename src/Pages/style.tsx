import Block from 'react-blocks';

import styled from 'styled-components';

import Colors from 'Assets/Theme/Colors';

export const Container = styled(Block)`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;

	h1 {
		color: ${Colors.primary};
		font-weight: bold;
		font-size: 3rem;
	}

	p {
		color: ${Colors.primary};
	}
`;

export const Header = styled(Block)`
	text-align: center;
	margin-top: 5%;
	width: 100%;
`;
