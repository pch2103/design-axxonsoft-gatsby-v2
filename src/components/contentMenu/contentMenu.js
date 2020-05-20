import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Link as LinkScroll} from "react-scroll"
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles((theme) => (
		{
			root: {
				top: theme.spacing(8),
				paddingRight: theme.spacing(4),
				position: 'sticky',
				width: 175,
				display: 'box',
			},
			tabs: {
				borderLeft: `1px solid ${theme.palette.divider}`,
				listStyleType: 'none',
				marginLeft: 0,
				padding: 0,
				},
			// fixed: {
			// 	top: theme.spacing(8),
			// 	transition: 'top 0.3s',
			// },
			active: {
				color: theme.palette.secondary.main,
				'& > li': {
					paddingLeft: theme.spacing(1.7),
					borderLeft: `${theme.spacing(0.3)}px solid ${theme.palette.secondary.main}`,
					textDecoration: 'none'
				}
			},
			tab: {
				cursor: 'pointer',
				paddingLeft: theme.spacing(2),
				paddingTop: theme.spacing(2),
				paddingBottom: theme.spacing(2),
				'&:hover': {
					textDecoration: 'underline',
				},
			}
		}));


export default function ContentMenu({pageSection}) {
	const classes = useStyles();
	// const [pageBannerY, setPageBannerY] = useState(0);
	// const [fixedMenu, setFixedMenu] = useState(false)

	// const scroll = useScroll()

	// useEffect(()=>{
	// 	const pageBanner = typeof window == "undefined" || !window.document
	// 			? 0 : document.getElementById('pageBanner')
	// 	setPageBannerY(pageBanner.getBoundingClientRect().bottom)
	// },[])
	//
	// useEffect(()=>{
	// 	setFixedMenu(scroll.y >= pageBannerY)
	// },[scroll, pageBannerY, setFixedMenu])
	//
	//
	// const menuStyle = clsx(classes.root, fixedMenu && classes.fixed)

	return (
			<nav className={classes.root}>
				<ul className={classes.tabs}>
					{pageSection.map((item, index)=>(
							<div key={item.label + index}>
								<LinkScroll
										activeClass={classes.active}
										to={item.label}
										spy={true}
										smooth={true}
										hashSpy={true}
										offset={-24}
										duration={200}
								>
							<li className={classes.tab}>
								<FormattedMessage id={item.label}/>
							</li>
							</LinkScroll>
							</div>
					))
					}
				</ul>
			</nav>
	);
}