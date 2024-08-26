import { Suspense } from 'react'
import { Box, Container, Typography } from '@mui/material'

export default function GuideMap() {
	return (
		<Container sx={{ mb: 5, mt: 10 }}>
			<Typography variant='h2' sx={{ textAlign: 'center' }}>
				施設図
				<br />
				ご利用可能エリア
			</Typography>
			<Typography variant='body1' sx={{ py: 2 }}>
				イロリサウナ・フタリサウナの両方をご利用いただけます。
			</Typography>
			<Suspense fallback={<div>Loading...</div>}>
				<Box
					component='img'
					width='100%'
					src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FGuideMap%2FguidMap202408.jpeg?alt=media&token=95b7faca-db63-4a14-abf3-cbd7531134e8'
					alt='施設案内図'
				/>
			</Suspense>
		</Container>
	)
}
