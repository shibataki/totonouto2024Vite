import { Box, Typography } from '@mui/material'

export default function Campaign() {
	return (
		<Box sx={{ color: '#FFF', textAlign: 'center' }}>
			<Box sx={{ mb: 2 }}>
				<Typography variant='h2'>
					お得なキャンペーン
					<br />
					実施中
				</Typography>
			</Box>

			<Box sx={{ mb: 5 }}>
				<Typography variant='h3' sx={{ mb: 1, color: 'yellow' }}>
					<Box component='span' sx={{ color: '#FFF' }}>
						instagram投稿で
					</Box>
					<br />
					ステッカープレゼント
				</Typography>
				<Typography variant='body1'>
					ご利用中にinstagramへ投稿いただいたお客様にステッカーを無料で配布しております。くわしくは受付までお問い合わせください。
				</Typography>
			</Box>
			<Box sx={{ mb: 5 }}>
				<Typography variant='h3' sx={{ mb: 1, color: 'yellow' }}>
					<Box component='span' sx={{ color: '#FFF' }}>
						LINE追加＆次回ご予約で
					</Box>
					<br />
					1000円OFF
				</Typography>
				<Typography variant='body1'>
					ご利用中に公式LINEの友達追加と次回分のご予約をいただいたお客様にステッカーを無料で配布しております。くわしくは受付までお問い合わせください。
				</Typography>
			</Box>
		</Box>
	)
}
