import { Box } from '@mui/material'

export default function H2({ children }: { children: React.ReactNode }) {
	return (
		<Box
			component='h2'
			sx={{
				color: '#FFF',
				fontSize: '4.5vw',
				textAlign: 'center',
				borderTop: 'solid #FFF 1px',
				borderBottom: 'solid #FFF 1px',
			}}
		>
			{children}
		</Box>
	)
}
