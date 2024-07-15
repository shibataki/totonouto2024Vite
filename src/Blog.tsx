import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

const cardContents: {
	title: string
	text: string
	date: string
	url: string
	image: string
	alt: string
}[] = [
	{
		title: 'サウナ用語集',
		text: 'ととのうと店主がサウナ用語をまとめました。今更聞けないサウナ用語！ぜひチェックしてみてください。誤りのご指摘や追記してほしい用語など募集中です。気軽に店主にお声がけください。',
		date: '2024/07/14',
		url: 'https://totonouto.com/saunaWords/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2F%E3%83%AD%E3%82%B3%E3%82%99%E7%99%BD.png?alt=media&token=949aa7e8-886c-4a7b-a790-9be2b2716a28',
		alt: 'ととのうとロゴ',
	},
	{
		title: '貸切サウナととのうととは',
		text: '貸切サウナととのうとを店主自らご紹介。ととのうとの基本情報はもちろん、工事の裏側や店主の想いなどがわかるかも。',
		date: '2024/07/15',
		url: 'https://totonouto.com/article1/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2F%E3%83%AD%E3%82%B3%E3%82%99%E7%99%BD.png?alt=media&token=949aa7e8-886c-4a7b-a790-9be2b2716a28',
		alt: 'ととのうとロゴ',
	},
	{
		title: '店主がお店を始めたわけ',
		text: '貸切サウナととのうと 店主がお店を始めた理由をちょっぴりご紹介します。',
		date: '2024/07/15',
		url: 'https://totonouto.com/article2/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2F%E3%83%AD%E3%82%B3%E3%82%99%E7%99%BD.png?alt=media&token=949aa7e8-886c-4a7b-a790-9be2b2716a28',
		alt: 'ととのうとロゴ',
	},
]
cardContents.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

export default function Blog() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box sx={{ color: '#FFF', mx: 3, mb: 10 }}>
					<Typography variant='h1' sx={{ fontSize: '5vw' }}>
						貸切サウナととのうと
						<br />
						店主のブログ
					</Typography>
					<Grid container spacing={3} sx={{ mt: 3 }}>
						{cardContents.map((contents) => (
							<Grid xs={12} md={6} key={contents.title}>
								<Link href={contents.url} sx={{ textDecoration: 'none' }}>
									<Card
										sx={{
											maxWidth: 345,
											backgroundColor: '#000',
											color: '#FFF',
											border: 'solid white 1px',
											p: 2,
										}}
									>
										<CardActionArea>
											<CardMedia
												component='img'
												height='140'
												image={contents.image}
												alt={contents.alt}
											/>
											<CardContent>
												<Typography
													align='center'
													gutterBottom
													variant='h3'
													component='div'
												>
													{contents.title}
												</Typography>

												<Typography variant='body2'>{contents.text}</Typography>
												<Typography variant='body1' align='right'>
													{contents.date}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Link>
							</Grid>
						))}
					</Grid>
				</Box>
			</ThemeProvider>
		</>
	)
}
