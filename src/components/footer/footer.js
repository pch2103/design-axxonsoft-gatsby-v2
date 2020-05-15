import React from 'react';
import Copyright from "./Copyright";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PoweredBy from "./poweredBy";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					paddingTop: theme.spacing(2),
					paddingBottom: theme.spacing(4),
					background: theme.palette.menu.dark,
					color: theme.palette.primary.contrastText,
					textAlign: "center"
				},
			})
});

const Footer = () => {
	const classes = useStyles();
	return (
			<footer className={classes.root}>
				<Container spacing={3} maxWidth="xs">
					<Copyright/>
					<PoweredBy/>
				</Container>
			</footer>
	)
}

export default Footer;