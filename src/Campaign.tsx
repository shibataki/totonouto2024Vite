import { Box, Typography } from '@mui/material'
import MyImg from '../src/MyImg'
import { useSectionView } from './hooks/useSectionView'

export default function Campaign() {
	const ref = useSectionView('campaign', 'キャンペーン')
	return (
		<div ref={ref}>
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
						<br />
						整う人に、福きたる。
					</Typography>
					<Typography variant='body1'>
						2026年 1月 限定
						<br />
						サウナに入る前に、
						<br />
						今年の思いを書き記しませんか。
						<br />
						<br />
						受付にて書初めとサウナおみくじ
						<br />
						（当日使えるクーポン付）
						<br />
						を実施しています。
						<br />
						<br />
						ととのいとともに、良い1年を。
					</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fcampaign%2F%E6%95%B4%E3%81%86%E4%BA%BA%E3%81%AB%E7%A6%8F%E3%81%8D%E3%81%9F%E3%82%8B.jpg?alt=media&token=6f6e37d2-82d9-4bd4-9ec2-81ea06773072'
						alt='整う人に、福きたる。'
					/>
				</Box>
				<Box sx={{ mb: 5 }}>
					<Typography variant='h3' sx={{ mb: 1, color: 'yellow' }}>
						instagram投稿で
						<br />
						ステッカープレゼント
					</Typography>
					<Typography variant='body1'>
						ご利用中にinstagramへ投稿いただいたお客様にステッカーを無料で配布しております。くわしくは受付までお問い合わせください。
					</Typography>
				</Box>
			</Box>
		</div>
	)
}
