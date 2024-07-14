import { Box } from '@mui/material'

export default function H1({ children }: { children: React.ReactNode }) {
	return (
		<Box
			component='h1'
			sx={{
				mt: '100px',
				mb: '50px',
				color: '#FFF',
				fontSize: '5vw',
				textAlign: 'center',
			}}
		>
			{children}
		</Box>
	)
}
