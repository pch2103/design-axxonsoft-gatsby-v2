import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";
import GetIcon from "../utils/getIcon";

const useStyles = makeStyles((theme) => (
		{
			root: {
				maxWidth: 600,
				margin: 'auto',
			},
			media: {
				height: 0,
				paddingTop: '50%',
			},
			title: {
				marginTop: theme.spacing(2)
			},
			button: {
				margin: theme.spacing(0),
			},
		}
))

const PageCard = ({cardContent}) => {
	const classes = useStyles();

	return (
			<div className={classes.root}>
				<CardMedia
						className={classes.media}
						image={cardContent.image.file.url}
						title={cardContent.image.title}
				/>
				<Divider/>
				<CardContent>
					<Typography className={classes.title} gutterBottom variant="h5" component="h2">
						{cardContent.title}
					</Typography>
					<Typography variant="body2" color="textPrimary" component="p">
						{cardContent.text}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
							href={cardContent.downloadUrl}
							component={Link}
							target="_blank"
							className={classes.button}
							size="small"
							color="primary"
							startIcon={<GetIcon icon="Download"/>}
					>
						Download
					</Button>
				</CardActions>
			</div>
	)
};

export default PageCard;