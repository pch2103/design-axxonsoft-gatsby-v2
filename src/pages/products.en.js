import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Layout from "../layout/layout";

export default function ProductsEn(props) {

	return (
			<Layout location={props.location}>
				<Container maxWidth="sm">
					<Box my={4}>
						<Typography variant="h4" component="h1" gutterBottom>
							Products Page
						</Typography>
						<Link to={`/`}>Go to the main page</Link>
						<ProTip/>
						<Copyright/>
					</Box>
				</Container>
			</Layout>
	);
}
