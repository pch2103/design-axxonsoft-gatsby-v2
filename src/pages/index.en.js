import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/en";
import PageCard from "../components/pageCard/en"
import DummyText from "../components/dummyText";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";

export default function (props) {

	return (
			<Layout location={props.location}>
				<SEO title={'AxxonSoft Ltd. Brand identity'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>

				<Container maxWidth="md">
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<ContentHeader title={'Logotype'}/>
						</Grid>
						<Grid item xs={12} sm={6}>
								<PageCard cardName="AxxonSoftLogo" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<PageCard cardName="AxxonSoftLogoInverse" />
						</Grid>
					</Grid>

					<Grid container spacing={2}>
						<Grid item xs={12}>
							<ContentHeader title={'UsageGuidelines'}/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="LogotypeFields" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="MinimumLogoSize" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="OpticalCenter" />
						</Grid>
					</Grid>

					<Grid container spacing={2}>
						<Grid item xs={12}>
							<ContentHeader title={'Colors'}/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorDarkBlue" />
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorGray" />
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorOrange" />
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorGold" />
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorGreen" />
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorBlue" />
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorAmethyst" />
						</Grid>
						<Grid item xs={12} sm={3}>
							<PageCard centered={true} cardName="ColorHotPink" />
						</Grid>
					</Grid>


						<DummyText/>

				</Container>
			</Layout>
	);
}
