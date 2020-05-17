import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";
import ReactMarkdown from "react-markdown"
import GetIcon from "../utils/getIcon";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => (
		{
			root: {
				maxWidth: 600,
				height: '100%',
				margin: 'auto',
			},
			card: {
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			},
			content: {
				padding: 0,
			},
			contentCentered: {
				margin: 'auto',
				textAlign: 'center',
			},
			media: {
				height: 0,
				paddingTop: '52%',
			},
			outline: {
				border: `${theme.palette.divider} 1px solid`,
			},
			title: {
				marginTop: theme.spacing(2)
			},
			cardAction: {
				height: '100%',
				display: 'flex',
				alignItems: 'flex-end',
			},
			button: {
				margin: theme.spacing(0),
			},
			shortDivider: {
				width: '33%',
			},
		}
))

const PageCard = ({cardContent, ...props}) => {
	const classes = useStyles();

	const mediaStyle = clsx(classes.media, !props.centered && classes.outline)
	const contentStyle = clsx(classes.content, props.centered && classes.contentCentered)
	const dividerStyle = clsx(classes.shortDivider, props.centered && classes.contentCentered)


	return (
			<div className={classes.root}>
				<div className={classes.card}>
					{cardContent.image &&
					<CardMedia
							className={mediaStyle}
							image={cardContent.image.file.url}
							title={cardContent.image.title}
					/>
					}
					<CardContent className={contentStyle}>
						<Typography className={classes.title} variant="h6" component="h3">
							{cardContent.title}
						</Typography>
						<Typography variant="body2" component={'span'} color="textSecondary">
							<ReactMarkdown
									source={cardContent.text}
							/>
						</Typography>
					</CardContent>
					<div className={classes.cardAction}>
						{cardContent.downloadUrl &&
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
						}
					</div>
					 <Divider className={dividerStyle}/>
				</div>
			</div>
	)
};

export default PageCard;