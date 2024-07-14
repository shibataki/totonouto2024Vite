import React from 'react'
import ReactDOM from 'react-dom/client'

import '../../src/index.css'
import { Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Blog from '../../src/Blog'
import Header2 from '../../src/Header2'
import Footer from '../../src/Footer'
import SaunaWords from '../../src/SaunaWords'
const theme = createTheme({
	typography: {
		fontFamily: ["'Noto Sans JP', sans-serif;"].join(','),
		h1: {
			fontWeight: 600,
			fontSize: 40,
			color: '#FFF',
		},
		h2: {
			fontWeight: 400,
			fontSize: 34,
			color: '#FFF',
		},
		h3: {
			fontWeight: 400,
			fontSize: 28,
			color: '#FFF',
		},
		h5: {
			fontWeight: 400,
			fontSize: 18,
			color: '#FFF',
		},
		body1: {
			fontWeight: 200,
			fontSize: 16,
			color: '#FFF',
		},
	},
})

ReactDOM.createRoot(document.getElementById('saunaWords')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
				<Header2 />
			</Box>

			<Box sx={{ mt: 10, color: '#FFF', mx: 3 }}>
				<SaunaWords />
			</Box>

			<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
				<Footer />
			</Box>
		</ThemeProvider>
	</React.StrictMode>
)
