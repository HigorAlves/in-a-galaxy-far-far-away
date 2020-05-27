import Axios from 'axios';

const instance = Axios.create({
	baseURL: 'https://swapi.dev/api/starships/',
	timeout: 6000,
});

export default instance;
