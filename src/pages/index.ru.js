import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from "../layout/layout";
import DummyText from "../components/dummyText";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";

export default function (props) {

	return (
			<Layout location={props.location}>
				<SEO title={'ITV | AxxonSoft. Фирменный стиль'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<Container maxWidth="md">
					<Box my={4}>
						<Typography variant="h4" component="h1" gutterBottom>
							Фирменный стиль
						</Typography>
					</Box>
					<DummyText/>
				</Container>
			</Layout>
	);
}
