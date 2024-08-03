import { createTheme } from '@mui/material/styles'

const theme = createTheme()

theme.typography.h1 = {
	color: '#FFF',
	fontSize: '2.0rem', // 32px (デフォルトの16px基準)
	'@media (min-width:600px)': {
		fontSize: '2.5rem', // 40px
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '3.0rem', // 48px
	},
}

theme.typography.h2 = {
	color: '#FFF',
	fontSize: '1.5rem', // 24px
	'@media (min-width:600px)': {
		fontSize: '2.0rem', // 32px
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '2.5rem', // 40px
	},
}

theme.typography.h3 = {
	color: '#FFF',
	fontSize: '1.2rem', // 19.2px
	'@media (min-width:600px)': {
		fontSize: '1.5rem', // 24px
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '2.0rem', // 32px
	},
}

theme.typography.body1 = {
	color: '#FFF',
	fontSize: '1rem', // 16px (デフォルトの16px基準)
	'@media (min-width:600px)': {
		fontSize: '1.1rem', // 17.6px
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '1.2rem', // 19.2px
	},
}

theme.typography.body2 = {
	color: '#FFF',
	fontSize: '1rem', // 16px (デフォルトの16px基準)
	'@media (min-width:600px)': {
		fontSize: '1.1rem', // 17.6px
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '1.2rem', // 19.2px
	},
}

theme.components = {
	MuiLink: {
		styleOverrides: {
			root: {
				color: '#99CCFF', // リンクのデフォルトカラー
			},
		},
	},
}

export default theme
