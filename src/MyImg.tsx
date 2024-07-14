import { Box } from '@mui/material'

interface MyImgProps {
	src: string
	alt: string
}

export default function MyImg({ src, alt }: MyImgProps) {
	return (
		<Box sx={{ textAlign: 'center', my: 3 }}>
			<Box component='img' src={src} alt={alt} width='90%' />
		</Box>
	)
}
