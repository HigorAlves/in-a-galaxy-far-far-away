import { createGlobalStyle } from 'styled-components';

import BgImage from '../Images/stars.png';
import Color from './Colors';

const GlobalStyle = createGlobalStyle`

	* {
  	margin: 0;
  	padding: 0;
		font-family: "Raleway", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol';
		font-variant-numeric: tabular-nums;
	}

	body {
		background: ${Color.background} url(${BgImage}) no-repeat top right fixed;
	}

	html {
  	font-size: 16px;
		word-wrap: break-word;
	}

	h1 {
		font-size: 3rem;
		color: ${Color.white};
		font-weight: bold;
	}

	h2 {
  	font-weight: 300;
	}

	h3,
	h4,
	h5 {
  	font-weight: 400;
	}

	p{
		font-weight: 300;
		color: ${Color.white};
	}

	small {
		color: ${Color.font};
	}

	a {
		appearance: none;
		color: ${Color.yellow};
		text-decoration: none;
	}
`;

export default GlobalStyle;
