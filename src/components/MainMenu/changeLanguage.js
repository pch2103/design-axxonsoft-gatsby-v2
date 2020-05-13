import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {navigate} from "gatsby";

const useStyles = makeStyles((theme) => (
		{
			root: {
				color: theme.palette.primary.contrastText,
				padding: theme.spacing(2),
				'&:hover': {
					background: 'rgba(255, 255, 255, 0.12)',
					transition: 'background 0.3s',
					textDecoration: 'none',
				},
			},
		}));

export default function ChangeLanguage(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event) => {
		setAnchorEl(null);
		const { setLanguage } = event.currentTarget.dataset
			props.langs.forEach(lang => {
			lang.selected = (setLanguage === lang.langKey)
			if (lang.selected) {
				navigate(lang.link)
			}
		})
	};

	return (
			<div>
				<Button className={classes.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					{props.currentLang}
				</Button>
				<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
				>
					<MenuItem data-set-language={'en'} onClick={handleClose}>English</MenuItem>
					<MenuItem data-set-language={'ru'} onClick={handleClose}>Русский</MenuItem>
				</Menu>
			</div>
	);
}