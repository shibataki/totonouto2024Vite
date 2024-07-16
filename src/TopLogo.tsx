import { Box, Container } from '@mui/material'

export default function TopLogo() {
	//画像のプリロード

	const images: HTMLImageElement = new Image()
	const src: string =
		'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2FTopLogo.jpeg?alt=media&token=9e567f4a-77cc-4bf6-b5cc-29032b789a77'
	images.src = src
	return (
		<Box>
			<Container
				sx={{
					width: '100%',
					aspectRatio: '512/824.5',
					//height: 'calc(100vh - 104px)',
					position: 'relative',
					mb: 5,
				}}
			>
				<Box
					component='img'
					width='100%'
					height='auto'
					src={src}
					alt='大阪府の貸切サウナととのうと'
				/>
			</Container>
		</Box>
	)
}
