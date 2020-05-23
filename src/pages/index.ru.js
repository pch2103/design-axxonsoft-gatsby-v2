import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/ru";
import PageCard from "../components/pageCard/ru"
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../components/contntItems/contentHeader";
import EndOfSection from "../components/contntItems/endOfSection";
import Hidden from "@material-ui/core/Hidden";
import ContentMenu from "../components/contentMenu/contentMenu";

export default function (props) {
	const pageSection = [
		{label: 'Logotype'},
		{label: 'UsageGuidelines'},
		{label: 'Colors'},
		{label: 'UsageRestrictions'},
		{label: 'Fonts'},
		{label: 'LogoGroup'},
	];

	return (
			<Layout location={props.location}>
				<SEO title={'ITV | AxxonSoft. Фирменный стиль'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<section style={{display: "flex"}}>
				<Container maxWidth="lg">

					<Grid name={pageSection[0].label} container spacing={2}>
						<Grid item xs={12}>
							<ContentHeader title={'Logotype'}/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<PageCard cardName="ItvGroupLogo" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<PageCard cardName="ItvGroupLogoInverse" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<PageCard cardName="AxxonSoftLogo" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<PageCard cardName="AxxonSoftLogoInverse" />
						</Grid>
					</Grid>

					<EndOfSection/>

					<Grid name={pageSection[1].label} container spacing={2}>
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

					<EndOfSection/>

					<Grid container name={pageSection[2].label}  spacing={2}>
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

					<EndOfSection/>

					<Grid  name={pageSection[3].label} container spacing={2}>
						<Grid item xs={12}>
							<ContentHeader title={'UsageRestrictions'}/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="DoNotRotate" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="DoNotMove" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="DoNotShadow" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="DoNotColor" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="DoNotScale" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="DoNotDistort" />
						</Grid>
					</Grid>

					<EndOfSection/>

					<Grid name={pageSection[4].label} container spacing={2}>
						<Grid item xs={12}>
							<ContentHeader title={'Fonts'}/>
						</Grid>

						<Grid item xs={12} sm={3}>
							<PageCard cardName="PrimaryTypeface" />
						</Grid>
						<Grid item xs={12} sm={9}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="Museo900" />
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="Museo700" />
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="Museo500" />
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="Museo300" />
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="Museo100" />
								</Grid>
							</Grid>
						</Grid>

						<EndOfSection/>

						<Grid item xs={12} sm={3}>
							<PageCard cardName="SecondaryTypeface" />
						</Grid>
						<Grid item xs={12} sm={9}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="OpenSansBold" />
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="OpenSansSemibold" />
								</Grid>
								<Grid item xs={12} sm={4}>
									<PageCard mediaHeigt = {150} cardName="OpenSansRegular" />
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<EndOfSection/>

					<Grid name={pageSection[5].label} container spacing={2}>
						<Grid item xs={12}>
							<ContentHeader title={'LogoGroup'}/>
						</Grid>

						<Grid item xs={12} sm={4}>
							<PageCard cardName="ipdromLogo" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="noderLogo" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<PageCard cardName="rubiconLogo" />
						</Grid>

						<EndOfSection height = {2}/>

						<Grid item xs={12} sm={12}>
							<PageCard cardName="logosExbSample" landscape={true} />
						</Grid>

						<EndOfSection height = {2}/>

						<Grid item xs={12} sm={12}>
							<PageCard cardName="LogoInGroup" landscape={true} />
						</Grid>

						<EndOfSection height = {2}/>

						<Grid item xs={12} sm={12}>
							<PageCard cardName="LogoSk" landscape={true} />
						</Grid>

					</Grid>

					<EndOfSection/>

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
