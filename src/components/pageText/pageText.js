import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/WarningTwoTone';
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";
import GetIcon from "../utils/getIcon";
import {FormattedMessage} from "react-intl";

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
			download: {
				textAlign: "center",
				flexDirection: 'column',
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
			button: {
				margin: theme.spacing(1),
				background: theme.palette.secondary.main,
				color: theme.palette.primary.contrastText,
				'&:hover': {
					textDecoration: 'none',
					background: theme.palette.secondary.dark,
				},
			},
			shortDivider: {
				width: '33%',
			},
		}
))

const PageText = ({cardContent, ...props}) => {
	const classes = useStyles();

	const infoStyle = clsx(classes.info, props.download && classes.download,
			(props.attention || props.download) && classes.attention)

	return (
				<div >
					{cardContent.title &&
					<Typography variant="h6">
						{cardContent.title}
					</Typography>
					}
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
						{
							cardContent.downloadUrl &&
							<Button
									href={cardContent.downloadUrl}
									component={Link}
									target="_blank"
									className={classes.button}
									variant="contained"
									startIcon={<GetIcon icon="Download"/>}
									>
								<FormattedMessage id='Download'/>
							</Button>

						}
					</div>
					}
				</div>
	)
};

export default PageText;