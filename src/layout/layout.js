import React, {useState} from "react"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import {useStaticQuery, graphql} from "gatsby";
import MainMenu from "../components/mainMenu/mainMenu";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import getTheme from "../theme";
import Footer from "../components/footer/footer";

const Layout = ( props ) => {
	const data = useStaticQuery(graphql`
  query {
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`)
	const children = props.children
	const location = props.location
	const url = location.pathname
	const { langs, defaultLangKey } = data.site.siteMetadata.languages
	const langKey = getCurrentLangKey(langs, defaultLangKey, url)
	const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
	const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))
			.map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
	const [currentTheme, setCurrentTheme] = useState();

	return (
				<ThemeProvider theme={getTheme(currentTheme)}>
					<CssBaseline />
					<MainMenu
							setCurrentTheme = {setCurrentTheme}
							langsMenu = {langsMenu}
							langKey = {langKey}
							currentPath = {url}
							homeLink = {homeLink}
					/>
					{children}
					<Footer langKey = {langKey}/>
				</ThemeProvider>
	)
}

export default Layout
