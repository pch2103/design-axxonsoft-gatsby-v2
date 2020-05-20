import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/en";
import DummyText from "../components/dummyText";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";

export default function (props) {
	const pageSection = [
			{label: 'Chapter1'},
			{label: 'Chapter2'},
			{label: 'Chapter3'}
	];
	return (
			<Layout location={props.location}>
				<SEO title={'AxxonSoft Ltd. Products'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>

				<section style={{display: "flex"}}>

					<Container maxWidth="md">
						<Grid container item xs={12} >
							<Grid id={pageSection[0].label} item xs={12}>
								<ContentHeader title={'AxxonNext'}/>
								<DummyText/>
							</Grid>
							<Grid id={pageSection[1].label} item xs={12}>
								<ContentHeader title={'AxxonNext'}/>
								<DummyText/>
							</Grid>

							<Grid id={pageSection[2].label} item xs={12}>
								<ContentHeader title={'AxxonNext'}/>
								<DummyText/>
								<DummyText/>
							</Grid>
						</Grid>
				</Container>

				</section>

			</Layout>
	);
}
