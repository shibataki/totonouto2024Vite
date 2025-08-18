import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import MyImg from './MyImg'

const saunaName: string[] = [
	'ルーム料金（事前決済）',
	'当日利用料（1名様あたり）',
]

const saunaPrice: string[] = ['9,800-', '1,000-']

const drinkName: { id: string; name: string }[] = [
	{ id: '1', name: 'シャリシャリオロポ' },
	{ id: '2', name: 'オロナミンC' },
	{ id: '3', name: 'ポカリスエット' },
	{ id: '4', name: 'イオンウォーター' },
	{ id: '5', name: 'ミネラルウォーター' },
]
const drinkPrice: { id: string; price: string }[] = [
	{ id: '1', price: '500' },
	{ id: '2', price: '200' },
	{ id: '3', price: '300' },
	{ id: '4', price: '300' },
	{ id: '5', price: '150' },
]

const rentalName: { id: string; name: string }[] = [
	{ id: '1', name: '2点セット' },
	{ id: '2', name: 'ポンチョ' },
	{ id: '3', name: 'サウナハット' },
	{ id: '4', name: 'フェイスタオル' },
	{ id: '5', name: 'バスタオル' },
	{ id: '6', name: '水着 | 男性用' },
]
const rentalPrice: { id: string; price: string }[] = [
	{ id: '1', price: '1000' },
	{ id: '2', price: '800' },
	{ id: '3', price: '500' },
	{ id: '4', price: '400' },
	{ id: '5', price: '800' },
	{ id: '6', price: '500' },
]

const aromaName: { id: string; name: string }[] = [
	{ id: '1', name: 'ヴィヒタブレンド' },
	{ id: '2', name: 'ずっとウッド' },
]
const aromaPrice: { id: string; price: string }[] = [
	{ id: '1', price: '400' },
	{ id: '2', price: '400' },
]

const amenitiesName: string[] = [
	'ドライヤー',
	'化粧水',
	'乳液',
	'クレンジング',
	'綿棒',
	'シャンプー',
	'コンディショナー',
	'ボディソープ',
	'砂時計',
]

export default function Price() {
	return (
		<Box sx={{ paddingX: '10%', mb: 5 }}>
			<Grid
				container
				spacing={2}
				sx={{ color: '#FFF' }}
				alignItems={'flex-start'}
				justifyItems={'center'}
			>
				<Grid item xs={12}>
					<Typography
						variant='h2'
						sx={{
							textAlign: 'center',
							mt: 5,
						}}
					>
						ご利用料金
						<br />
						サービス内容
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography
						variant='body1'
						sx={{
							textAlign: 'center',
							mt: 5,
							fontSize: 24,
						}}
					>
						サウナ貸切料金（120min)
					</Typography>
				</Grid>
				{saunaName.map((content) => (
					<Grid item xs={6} key={content}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								variant='body1'
								sx={{
									writingMode: 'vertical-rl',
									textOrientation: 'upright',
									fontSize: 24,
								}}
							>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}

				{saunaPrice.map((content) => (
					<Grid item xs={6}>
						<Typography
							variant='body1'
							sx={{ textAlign: 'center', mb: 0.2 }}
							key={content}
						>
							{content}
						</Typography>
					</Grid>
				))}

				<Grid item xs={12}>
					<Typography variant='body1'>
						※イロリサウナとフタリサウナの両方をご利用いただけます。
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography
						variant='body1'
						sx={{
							textAlign: 'center',
							mt: 5,
							fontSize: 24,
						}}
					>
						ドリンク
					</Typography>
				</Grid>

				{drinkName.map((content) => (
					<Grid item xs={2.4} key={content.id}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								variant='body1'
								sx={{
									writingMode: 'vertical-rl',
									textOrientation: 'upright',
								}}
							>
								{content.name}
							</Typography>
						</Box>
					</Grid>
				))}

				{drinkPrice.map((content) => (
					<Grid item xs={2.4} key={content.id}>
						<Typography variant='body1' sx={{ textAlign: 'center' }}>
							{content.price}
						</Typography>
					</Grid>
				))}
				<MyImg
					src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fprice%2Foropo.jpeg?alt=media&token=9e26d098-18aa-4750-9f50-d6e83be0a549'
					alt='シャリシャリオロポ'
				/>
				<Grid item xs={12}>
					<Typography
						variant='body1'
						sx={{
							textAlign: 'center',
							mt: 5,
							fontSize: 24,
						}}
					>
						サウナグッズレンタル
					</Typography>
				</Grid>
				{rentalName.map((content) => (
					<Grid item xs={2} key={content.id}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography
								variant='body1'
								sx={{
									writingMode: 'vertical-rl',
									textOrientation: 'upright',
								}}
							>
								{content.name}
							</Typography>
						</Box>
					</Grid>
				))}

				{rentalPrice.map((content) => (
					<Grid item xs={2} key={content.id}>
						<Typography variant='body1' sx={{ textAlign: 'center' }}>
							{content.price}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						variant='body1'
						sx={{
							textAlign: 'center',
							mt: 5,
							fontSize: 24,
						}}
					>
						ロウリュ用アロマ
					</Typography>
				</Grid>
				{aromaName.map((content) => (
					<Grid item xs={6} key={content.id}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography variant='body1' sx={{ writingMode: 'vertical-rl' }}>
								{content.name}
							</Typography>
						</Box>
					</Grid>
				))}

				{aromaPrice.map((content) => (
					<Grid item xs={6} key={content.id}>
						<Typography variant='body1' sx={{ textAlign: 'center' }}>
							{content.price}
						</Typography>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography
						variant='body1'
						sx={{
							textAlign: 'center',
							mt: 5,
							fontSize: 24,
						}}
					>
						アメニティ（無料）
					</Typography>
				</Grid>

				{amenitiesName.map((content) => (
					<Grid item xs={1.3} key={content}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Typography variant='body1' sx={{ writingMode: 'vertical-rl' }}>
								{content}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
