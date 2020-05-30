import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";
import PageImage from "../components/pageImage/ru";
import EndOfSection from "../components/contntItems/endOfSection";
import Hidden from "@material-ui/core/Hidden";
import ContentMenu from "../components/contentMenu/contentMenu";

export default function (props) {
	const pageSection = [
		{label: 'Hybrid'},
		{label: 'Island'},
	];
	return (
			<Layout location={props.location}>
				<SEO title={'ITV | AxxonSoft. Выставочные стенды.'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<section style={{display: "flex"}}>

					<Container maxWidth="lg">

						<Grid name={pageSection[0].label} container spacing={4}>
							<Grid item xs={12}>
								<ContentHeader title={'Hybrid'}/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageImage cardName="BoothSample2"/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<PageImage cardName="BoothSample1"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample3"/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<PageImage cardName="BoothSample4"/>
							</Grid>
						</Grid>
						<EndOfSection height={2}/>
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
