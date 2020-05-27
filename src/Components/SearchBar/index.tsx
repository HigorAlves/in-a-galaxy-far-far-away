import React from 'react';

import { ContainerForm, Input, Button } from './style';

const SearchBar = () => (
	<ContainerForm>
		<Input type='number' name='number' className='input' autoComplete='off' min='0' placeholder='Insert the MGLT' />
		{/* <Button>Calculate</Button> */}
	</ContainerForm>
);

export default SearchBar;
