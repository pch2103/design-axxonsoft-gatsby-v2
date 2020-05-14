import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";
import DummyText from "../components/dummyText";

export default function IndexPage(props) {

	return (
			<Layout location={props.location}>
				<SEO title={'ITV | AxxonSoft. Выставочные стенды.'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<Container maxWidth="md">
					<Box my={4}>
						<Typography variant="h4" component="h1" gutterBottom>
							Выставочные стенды.
						</Typography>
						<DummyText/>
					</Box>
				</Container>
			</Layout>
	);
}
