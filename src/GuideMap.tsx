import { Suspense } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useSectionView } from './hooks/useSectionView'

export default function GuideMap() {
	const ref = useSectionView('GuideMap', '施設案内図')
	return (
		<div ref={ref}>
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
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FGuideMap%2FguidMap20250201.jpg?alt=media&token=1847d1aa-68fb-410c-bced-a94e31173f37'
						alt='施設案内図'
					/>
				</Suspense>
			</Container>
		</div>
	)
}
