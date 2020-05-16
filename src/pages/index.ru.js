import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import DummyText from "../components/dummyText";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";
import PageCard from "../components/pageCard/ru"
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";

export default function (props) {

	return (
			<Layout location={props.location}>
				<SEO title={'ITV | AxxonSoft. Фирменный стиль'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<Container maxWidth="md">

					<Grid container spacing={3}>
						<Grid item xs={12} md={12}>
							<ContentHeader title={'Logotype'}/>
						</Grid>
						<Grid item xs={12} md={6}>
							<PageCard cardName="ItvGroupLogo" />
						</Grid>
						<Grid item xs={12} md={6}>
							<PageCard cardName="ItvGroupLogoInverse" />
						</Grid>
						<Grid item xs={12} md={6}>
							<PageCard cardName="AxxonSoftLogo" />
						</Grid>
						<Grid item xs={12} md={6}>
							<PageCard cardName="AxxonSoftLogoInverse" />
						</Grid>
					</Grid>

					<DummyText/>
				</Container>
			</Layout>
	);
}
