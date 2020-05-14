import React from 'react';
import {CopyrightEN, CopyrightRU} from "./Copyright";

const Footer = (props) => {
	return(
			<footer>
				{
					props.langKey === 'ru'
							? <CopyrightRU />
							: <CopyrightEN />
				}
			</footer>
	)
}


export default Footer;