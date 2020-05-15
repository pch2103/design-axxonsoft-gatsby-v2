import React from 'react';
import {FormattedMessage} from 'react-intl';
import PoweredLogo from '../../images/powered_with.svg';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MuiLink from '@material-ui/core/Link';

export default () => (
		<>
			<Box mt={2}>
				<Typography variant="caption" display="block" gutterBottom>
					<FormattedMessage id='powered'/>{': '}
					<MuiLink color="inherit" target="_blank" href="https://reactjs.org/">
						React
					</MuiLink>{', '}
					<MuiLink color="inherit" target="_blank" href="https://graphql.org/">
						GraphQl
					</MuiLink>{', '}
					<MuiLink color="inherit" target="_blank" href="https://www.gatsbyjs.org/">
						Gatsby
					</MuiLink>{', '}
				</Typography>

			</Box>
			<Box mt={1}>
				<PoweredLogo />
			</Box>
		</>

);
