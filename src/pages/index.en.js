import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Layout from "../layout/layout";
import SEO from "../components/seo";
import PageBanner from "../components/pageBanner/en";
import DummyText from "../components/dummyText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ContentHeader from "../components/contntItems/contentHeader";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function (props) {
	const classes = useStyles();
	return (
			<Layout location={props.location}>
				<SEO title={'AxxonSoft Ltd. Brand identity'} lang={props.pageContext.langKey}/>
				<PageBanner location={props.location}/>
				<Container maxWidth="md">

					<Grid container spacing={3}>
						<Grid item xs={12} md={12}>
							<ContentHeader title={'Logotype'}/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper className={classes.paper}>Content</Paper>
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper className={classes.paper}>Content</Paper>
						</Grid>
					</Grid>

					<DummyText/>

				</Container>
			</Layout>
	);
}
