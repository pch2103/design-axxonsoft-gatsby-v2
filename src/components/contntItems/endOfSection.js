import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => {
	return (
			{
				root: {
					width: '100%',
					display: 'flex',
          height: theme.spacing(2),
				},
			})
});

const EndOfSection = () => {
	const classes = useStyles();
	return 	<Box className = {classes.root} />

};

export default EndOfSection;