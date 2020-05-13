import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from "gatsby"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChangeLanguage from "./changeLanguage";
import {makeStyles} from "@material-ui/core/styles";
import Favicon from "./favicon";
import Link from "../Link";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ChangeTheme from "./changeTheme";

function HideOnScroll(props) {
	const {children, window} = props;

	const trigger = useScrollTrigger({target: window ? window() : undefined});

	return (
			<Slide appear={false} direction="down" in={!trigger}>
				{children}
			</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const useStyles = makeStyles((theme) => (
		{
			root: {
				flexGrow: 1,
				background: theme.palette.menu.main,
			},
			tabs: {
				flexGrow: 1,
			},
			logo: {
				flexGrow: 1,
			},
			tab: {
				[theme.breakpoints.down('xs')]: {
					display: 'none'
				},
				padding: theme.spacing(2),
				color: theme.palette.primary.contrastText,
				'&:hover': {
					background: 'rgba(255, 255, 255, 0.12)',
					transition: 'background 0.3s',
					textDecoration: 'none',
				},
			},
		}));

const MainMenu = (props) => {
	const classes = useStyles();
	const data = useStaticQuery(graphql`
   query {
      allContentfulMainMenu(
    		sort: {
      		fields: [order]
      		order: ASC
    		}
  		){
        edges {
          node {
            id
            order
            label
            labelRu
            link
            icon
          }
        }
      }
    },
  `)

	// OPTIMIZED! Memorized (cashed) value returned

	const mainMenu = useMemo(
			() => data.allContentfulMainMenu.edges
					.map(edge => ({
								label: props.langKey === 'en' ? edge.node.label : edge.node.labelRu,
								link: `/${props.langKey}${edge.node.link}`.replace('/en/', '/'),
								icon: edge.node.icon,
								id: edge.node.id
							})
					)
	, [ data, props.langKey])

	return (
			<>
			<HideOnScroll>
				<AppBar className={classes.root}>
					<Toolbar variant="dense">
					<Link className={classes.logo} to = "/">
						<Favicon />
					</Link>
						<Tabs
								value={props.currentPath}
								aria-label="simple tabs example"
								indicatorColor="secondary"
								variant="scrollable"
								scrollButtons="auto"
								className={classes.tabs}
						>
							<Tab
									className={classes.tab}
									key={mainMenu[0].id}
									to={mainMenu[0].link}
									component={Link}
									label={mainMenu[0].label}
									value={mainMenu[0].link}
							/>
							<Tab
									className={classes.tab}
									key={mainMenu[1].id}
									to={mainMenu[1].link}
									component={Link}
									label={mainMenu[1].label}
									value={mainMenu[1].link}
							/>
						</Tabs>
						<ChangeTheme setCurrentTheme= {props.setCurrentTheme}/>
						<ChangeLanguage langs={props.langs} currentLang = {props.langKey}/>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			</>
	)
}

export default MainMenu
