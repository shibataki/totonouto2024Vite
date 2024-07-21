import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

import Link from '@mui/material/Link'

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
		url: '/saunaWords/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff',
		alt: 'ととのうとロゴ',
	},
	{
		title: '貸切サウナととのうととは',
		text: '貸切サウナととのうとを店主自らご紹介。ととのうとの基本情報はもちろん、工事の裏側や店主の想いなどがわかるかも。',
		date: '2024/07/15',
		url: '/article1/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff',
		alt: 'ととのうとロゴ',
	},
	{
		title: '店主がお店を始めたわけ',
		text: '貸切サウナととのうと 店主がお店を始めた理由をちょっぴりご紹介します。',
		date: '2024/07/15',
		url: '/article2/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff',
		alt: 'ととのうとロゴ',
	},
	{
		title: 'サウナオーナーは営業後にサウナに入るのか？',
		text: '貸切サウナととのうとの店主はバカがつくほどのサウナ好き。きっと営業終わりにサウナを満喫しているんでしょうね。。。',
		date: '2024/07/15',
		url: '/article3/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff',
		alt: 'ととのうとロゴ',
	},
	{
		title: 'ととのうとプチリニューアル？',
		text: '2024年7月のプチリニューアルのお知らせ',
		date: '2024/07/21',
		url: '/article4/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff',
		alt: 'ととのうとロゴ',
	},
]
cardContents.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

export default function Blog() {
	return (
		<>
			<Box sx={{ color: '#FFF', mx: 3, mb: 10 }}>
				<Typography variant='h2' align='center'>
					【店主のブログ】
				</Typography>

				{cardContents.map((contents) => (
					<Link href={contents.url} sx={{ textDecoration: 'none' }}>
						<Card
							sx={{
								maxWidth: 345,
								backgroundColor: '#000',
								color: '#FFF',
								border: 'solid white 1px',
								p: 2,
								mx: 'auto',
								my: 2,
							}}
						>
							<CardActionArea>
								<CardMedia
									component='img'
									width='100%'
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
				))}
			</Box>
		</>
	)
}
