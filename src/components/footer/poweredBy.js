import React from 'react';
import {FormattedMessage} from 'react-intl';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MuiLink from '@material-ui/core/Link';
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

export default () => {
	const data = useStaticQuery(graphql`
  query {
	file(relativePath: { eq: "powered.png" }) {
		childImageSharp {
			fixed(width: 96, height: 31) {
			...GatsbyImageSharpFixed
			}
		}
	}
}
`)
	return (
		<>
			<Box mt={2}>
				<Typography variant="caption" display="block" gutterBottom>
					<FormattedMessage id='powered'/>{': '}
					<MuiLink color="inherit" target="_blank" href="https://reactjs.org/">
						React
					</MuiLink>{', '}
					<MuiLink color="inherit" target="_blank" href="https://graphql.org/">
						GraphQl
					</MuiLink>{', '}
					<MuiLink color="inherit" target="_blank" href="https://www.gatsbyjs.org/">
						Gatsby
					</MuiLink>{', '}
				</Typography>

			</Box>
			<Box mt={1}>
				<Img fixed = {data.file.childImageSharp.fixed} alt = 'Powered logo'	/>
			</Box>
		</>
	)
};
