import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";
import ReactMarkdown from "react-markdown"
import GetIcon from "../utils/getIcon";
import Img from "gatsby-image";
import {FormattedMessage} from "react-intl";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => (
		{
			root: {
				margin: 'auto',
			},
			content: {
				display: "flex",
				flexDirection: 'column',
				height: '100%',
			},
			text: {
				display: "flex",
				flexDirection: 'column',
				height: '100%',
				flexGrow: 1,
				justifyContent: "center",
			},
			action: {
				display: "block",
			},
			contentCentered: {
				margin: 'auto',
				textAlign: 'center',
			},
			media: {
				display: "flex",
				maxWidth: "100%",
				border: `${theme.palette.divider} 1px solid`,
			},
			shortDivider: {
				width: '33%',
			},
		}
))

const PageCardLandscape = ({cardContent}) => {
	const classes = useStyles();

	return (
			<Grid container spacing={6}>
				<Grid item xs={12} sm={6}>
					{cardContent.image && cardContent.image.fluid === null &&
					<img src={cardContent.image.file.url} alt={cardContent.image.title} className={classes.media}/>
					}
					{cardContent.image && cardContent.image.fluid !== null &&
					<Img fluid={cardContent.image.fluid} className={classes.media}/>
					}
				</Grid>
				<Grid item xs={12} sm={6}>
					<section className={classes.content}>
						<div className={classes.text}>
							{cardContent.title &&
							<Typography variant="h4">
								{cardContent.title}
							</Typography>
							}
							<Typography variant="body1" component={'span'}>
								<ReactMarkdown
										source={cardContent.text}
								/>
							</Typography>
						</div>
						<div>
							{cardContent.downloadUrl &&
							<Button
									className={classes.button}
									href={cardContent.downloadUrl}
									component={Link}
									target="_blank"
									size="small"
									color="primary"
									startIcon={<GetIcon icon="Download"/>}
							>
								<FormattedMessage id='Download'/>
							</Button>
							}
							<Divider className={classes.shortDivider}/>
						</div>
					</section>
				</Grid>
			</Grid>
	)
};

export default PageCardLandscape;