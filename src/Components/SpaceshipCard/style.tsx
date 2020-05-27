import styled from 'styled-components';

import Colors from 'Assets/Theme/Colors';

export const Container = styled.section`
	height: 340px;
	width: 270px;
	margin-top: 40px;
	background-color: #fff;
	border-radius: 5px;
	border-width: 2px;
	border-color: ${Colors.primary};
	border-style: solid;
`;

export const Image = styled.img`
	height: 250px;
	width: 270px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`;

export const TextContainer = styled.section`
	padding: 10px;
`;

export const Name = styled.h4`
	color: ${Colors.background};
	font-weight: bold;
	font-size: 1.2rem;
`;

export const Model = styled.h5`
	font-weight: lighter;
	font-weight: 1rem;
`;

export const Cost = styled.p``;
