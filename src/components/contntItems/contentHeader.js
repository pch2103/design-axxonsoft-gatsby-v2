import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					paddingTop: theme.spacing(4),
					paddingBottom: theme.spacing(2),
					color: theme.palette.text.primary,
					textAlign: "center"
				},
				header: {
					textTransform: "uppercase",
				},
			})
});

const ContentHeader = ({title}) => {
	const classes = useStyles();

	return (
			<Box className={classes.root}>
				<Typography variant="h5" component="h2" className={classes.header}>
					<FormattedMessage id={title}/>
				</Typography>
			</Box>
	)
};

export default ContentHeader;