import { Box } from '@mui/material'

export default function H3({ children }: { children: React.ReactNode }) {
	return (
		<Box
			component='h3'
			sx={{
				color: '#FFF',
				fontSize: '4vw',
			}}
		>
			{children}
		</Box>
	)
}