import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					paddingTop: theme.spacing(10),
					paddingBottom: theme.spacing(4),
					background: theme.palette.menu.dark,
					color: theme.palette.primary.contrastText,
					textAlign: "center"
				},
				logo: {
					width: 56,
					height: 56,
					marginBottom: theme.spacing(1)
				},
				header: {
					textTransform: "uppercase",
					marginBottom: theme.spacing(1)
				},
				subheader: {
					color: theme.palette.primary.contrastText,
					opacity: 0.6
				}
			})
});

const PageBanner = ({banner}) => {
	const classes = useStyles();

	if (!banner) return null
	return (
			<Box className={classes.root}>
				<Container maxWidth="sm">
					<img className={classes.logo} src={banner.icon.file.url} alt={'page icon'}/>
					<Typography variant="h5" className={classes.header}>
						{banner.title}
					</Typography>
					<Typography variant="body2" className={classes.subheader}>
						{banner.subtitle}
					</Typography>
				</Container>
			</Box>
	)
};

export default PageBanner;

