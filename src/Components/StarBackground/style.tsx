import styled, { keyframes } from 'styled-components';

import starsImage from 'Assets/Images/stars.png';
import twinklingImage from 'Assets/Images/twinkling.png';

const moveTwink = keyframes`
 from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 5000px;
		}
`;

export const StarContainer = styled.section`
	/* min-height: 100vh; */

	.stars,
	.twinkling {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100%;
		display: block;
	}

	.stars {
		background: #000 url(${starsImage}) repeat top center;
		z-index: 0;
	}

	.twinkling {
		background: transparent url(${twinklingImage}) repeat top center;
		z-index: 1;
		animation: ${moveTwink} 200s linear infinite;
	}
`;
