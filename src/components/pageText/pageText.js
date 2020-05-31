import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ReactMarkdown from "react-markdown";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/WarningTwoTone';
import clsx from "clsx";

const useStyles = makeStyles((theme) => (
		{
			root: {
				margin: 'auto',
			},
			info: {
				display: 'flex',
				alignItems: 'center',
			},
			attention: {
				borderRadius:4,
				background: theme.palette.background.paper,
				padding: 12,
				width: '100%',
				border: `${theme.palette.divider} 1px solid`,
				boxShadow: `2px 2px 6px rgba(0, 0, 0, 0.1)`,
			},
			iconInfo: {
				width: 32,
				height: 32,
				marginLeft: 8,
				color: theme.palette.info.main,
			},
			iconAttention: {
			width: 32,
			height: 32,
			marginLeft: 8,
			color: theme.palette.warning.main,
		},
			shortDivider: {
				width: '33%',
			},
		}
))

const PageText = ({cardContent, ...props}) => {
	const classes = useStyles();

	const infoStyle = clsx(classes.info, props.attention && classes.attention)

	return (
			<Grid container spacing={2}>
				{cardContent.title &&
				<Grid item xs={12}>
					<Typography variant="h6">
						{cardContent.title}
					</Typography>
				</Grid>
				}
				<Grid item xs={12}>
					{cardContent.text &&
					<div className={infoStyle}>
						{props.info &&
						<InfoOutlinedIcon className={classes.iconInfo}/>
						}
						{props.attention &&
						<WarningIcon className={classes.iconAttention}/>
						}
						<Typography variant="body1" component={'span'}>
							<ReactMarkdown
									source={cardContent.text}
							/>
						</Typography>
					</div>
					}
				</Grid>

			</Grid>
	)
};

export default PageText;