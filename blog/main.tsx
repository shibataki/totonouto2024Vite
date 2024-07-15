import React from 'react'
import ReactDOM from 'react-dom/client'
import Blog from '../src/Blog'
import '../src/index.css'
import { Box } from '@mui/material'
import Header2 from '../src/Header2'
import Footer from '../src/Footer'

ReactDOM.createRoot(document.getElementById('blog')!).render(
	<React.StrictMode>
		<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
			<Header2 />
		</Box>

		<Box sx={{ mt: 10 }}>
			<Blog />
		</Box>

		<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
			<Footer />
		</Box>
	</React.StrictMode>
)
