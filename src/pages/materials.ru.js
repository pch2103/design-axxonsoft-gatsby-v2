import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";
import DummyText from "../components/dummyText";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";
import PageCard from "../components/pageCard/ru";
import EndOfSection from "../components/contntItems/endOfSection";
import Hidden from "@material-ui/core/Hidden";
import ContentMenu from "../components/contentMenu/contentMenu";

export default function (props) {
	const pageSection = [
		{label: 'Brochures'},
		{label: 'Stationery'},
	];
	return (
			<Layout location={props.location}>
				<SEO title={'ITV | AxxonSoft. Носители фирменного стиля'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<section style={{display: "flex"}}>

					<Container maxWidth="lg">

						<Grid name={pageSection[0].label} container spacing={4}>
							<Grid item xs={12}>
								<ContentHeader title={'Brochures'}/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={150} cardName="BrochureNext4"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={150} cardName="BrochureIntellect"/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<PageCard mediaHeigt={150} cardName="BrochureCompany"/>
							</Grid>
						</Grid>

						<EndOfSection height={2}/>

						<Grid name={pageSection[1].label} container spacing={4}>
							<Grid item xs={12}>
								<ContentHeader title={'Stationery'}/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard cardName="Envelopes"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard cardName="Folder"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard cardName="Blocknote"/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<PageCard cardName="Pen"/>
							</Grid>
						</Grid>
						<DummyText/>
						<DummyText/>
					</Container>

					<article>
						<Hidden smDown>
							<ContentMenu pageSection={pageSection}/>
						</Hidden>
					</article>

				</section>
			</Layout>
	);
}
