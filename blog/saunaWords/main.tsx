import React from 'react'
import ReactDOM from 'react-dom/client'

import '../../src/index.css'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../src/theme'
import Link from '@mui/material/Link'
import Header2 from '../../src/Header2'
import Footer from '../../src/Footer'
import SaunaWords from '../../src/SaunaWords'

ReactDOM.createRoot(document.getElementById('saunaWords')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
				<Header2 />
			</Box>

			<Box sx={{ mt: 10, color: '#FFF', mx: 3 }}>
				<SaunaWords />
			</Box>
			<Box sx={{ mt: 2, mb: 15, mx: 5 }}>
				<Link href='https://totonouto.com'>お店のwebページもみてね。</Link>
			</Box>
			<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
				<Footer />
			</Box>
		</ThemeProvider>
	</React.StrictMode>
)
