import './App.css'
import Header from './Header'
import TopLogo from './TopLogo'
import { Box, Container, Typography } from '@mui/material'

import Footer from './Footer'

import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Introduction from './Introduction'
import Price from './price'
import GuideMap from './GuideMap'
import QA from './QA'
import Access from './Access'
import Campaign from './Campaign'
import Blog from './Blog'

function App() {
	return (
		<>
			<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
				<Header />
			</Box>
			<ThemeProvider theme={theme}>
				<Typography variant='body1' align='center' sx={{ mt: 10, mb: 1 }}>
					2021年オープン/2024年リニューアル
				</Typography>
				<Typography variant='h1' sx={{ fontSize: '5vw' }} align='center'>
					プライベートな個室空間|大阪府|八尾市|完全予約制|
					<br />
					貸切サウナととのうと
				</Typography>
				<Container maxWidth='sm' sx={{ mt: '40px', mb: '70px' }}>
					<Box id='top'>
						<TopLogo />
					</Box>

					<Box id='introduction'>
						<Introduction />
					</Box>
					<Box id='price'>
						<Price />
					</Box>
					<Box id='guidMap'>
						<GuideMap />
					</Box>
					<Box id='QA'> </Box>
					<QA />

					<Box id='access'>
						<Access />
					</Box>
					<Box id='campaign'>
						<Campaign />
					</Box>
					<Box id='blog'>
						<Blog />
					</Box>
				</Container>
			</ThemeProvider>
			<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
				<Footer />
			</Box>
		</>
	)
}

export default App
