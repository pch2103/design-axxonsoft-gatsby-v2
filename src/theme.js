import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';
import {responsiveFontSizes} from "@material-ui/core";

const generalTheme = {
	spacing: 8,
	typography: {
		fontFamily: [
			'Open Sans',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
		].join(','),
		h5: {
			fontWeight: 600,
		},
		h6: {
			fontWeight: 600,
		}
	},
}
const theme = createMuiTheme(Object.assign(generalTheme, {
	overrides: {
		MuiLink: {
			root: {
				color: '#273DE8',
			},
		},
	},
	palette: {
		primary: {
			light: '#5f5fc4',
			main: '#283593',
			dark: '#111F84',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ffc246',
			main: '#ff9100',
			dark: '#c56200',
		},
		error: {
			main: red.A400,
		},
		menu: {
			light: '#5f5fc4',
			main: '#283593',
			dark: '#404040',
			contrastText: '#fff',
		},
		page: {
			main: '#E2E2E2',
			contrastText: '#000',
		},
	},
}));

const dark_theme = createMuiTheme(Object.assign(generalTheme,{
	overrides: {
		MuiLink: {
			root: {
				color: '#ff9100',
			},
		},
	},
	palette: {
		type: 'dark',
		primary: {
			light: '#5f5fc4',
			main: '#283593',
			dark: '#111F84',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ffc246',
			main: '#ff9100',
			dark: '#c56200',
		},
		error: {
			main: red.A400,
		},
		menu: {
			light: '#555555',
			main: '#505050',
			dark: '#404040',
			contrastText: '#fff',
		},
		page: {
			main: '#404040',
			contrastText: '#fff',
		},
	},
}));

const getTheme = (currentTheme) => {
	return currentTheme === 'dark'
			? responsiveFontSizes(dark_theme)
			: responsiveFontSizes(theme);
}

export default getTheme;