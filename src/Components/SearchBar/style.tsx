import styled from 'styled-components';

import Colors from 'Assets/Theme/Colors';

export const ContainerForm = styled.form`
	color: #afafaf;
	max-width: 100%;
	margin-top: 20px;
`;

export const Input = styled.input`
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	width: 20%;
	height: 40px;
	font-size: 1.2rem;
	border-style: solid;
	outline: none;
	border-radius: 2px;
	padding-left: 4px;
	font-weight: bold;
	text-align: center;
	border-color: ${Colors.primary};
	border-width: 2px;

	::placeholder {
		font-weight: normal;
	}

	@media screen and (max-width: 425px) {
		width: 80%;
	}
	@media screen and (max-width: 768px) {
		width: 40%;
	}
`;

export const Button = styled.button`
	appearance: none;
	border: none;
	outline: none;
	height: 40px;
	margin-left: 5px;
	padding: 5px;
	border-radius: 2px;
	text-transform: uppercase;
	color: ${Colors.background};
	font-weight: bold;
	background-color: ${Colors.primary};
	width: 100px;
`;
