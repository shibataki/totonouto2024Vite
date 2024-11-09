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
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2FsaunaWords%2FwordsTop.jpeg?alt=media&token=92d34d2c-6a2e-4ebe-9ff6-90cd9dd9a154',
		alt: 'サウナ用語集',
	},
	{
		title: '貸切サウナととのうととは',
		text: '貸切サウナととのうとを店主自らご紹介。ととのうとの基本情報はもちろん、工事の裏側や店主の想いなどがわかるかも。',
		date: '2024/07/15',
		url: '/article1/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2F%E5%BA%97%E8%88%97%E5%A4%96%E8%A6%B3.jpeg?alt=media&token=e3c2f762-f02e-4fea-b206-f41e07eef0d9',
		alt: 'ととのうと外観',
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
	{
		title: 'ととのうとの予約方法',
		text: '貸切サウナととのうとの予約方法をご紹介',
		date: '2024/07/24',
		url: '/article5/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff',
		alt: 'ととのうとロゴ',
	},
	{
		title: '大阪八尾のサウナ飯',
		text: '貸切サウナととのうとの店主が近隣のサウナ飯をご紹介',
		date: '2024/07/27',
		url: '/article6/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fsankakumeshi.jpeg?alt=media&token=d9a7adb7-4427-4bdb-b99f-4b9692d9370d',
		alt: '鉄板炒飯',
	},
	{
		title: 'サウナの本場北欧へ、店主のフィンランドサウナ旅。2019.09の旅行記',
		text: '貸切サウナととのうとのオープン前。サウナの本場北欧、フィンランドへのサウナ旅のお話。2019.09の旅行記をご紹介。',
		date: '2024/08/01',
		url: '/article7/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-1.jpeg?alt=media&token=c7832c97-46b7-4c39-9ce8-e981e5735066',
		alt: 'フィンランドの湖',
	},
	{
		title:
			'フィンランドで有名なおすすめサウナ9選：ととのうと店主が実際に経験した究極のリラックス体験をご紹介',
		text: 'サウナの本場フィンランドのおすすめサウナ施設をご紹介。ととのうと店主の実体験を交えてご紹介します。国の文化としてのサウナの魅力と訪れるべき有名なスポットを詳しく説明します。',
		date: '2024/08/11',
		url: '/article8/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FRajaportin3.jpeg?alt=media&token=aa8e8760-46d0-488d-8f99-33d798343ab8',
		alt: 'フィンランドのサウナ',
	},
	{
		title:
			'サウナ好きのご友人へのプレゼントに最適!貸切サウナととのうとeギフトカードのご利用方法',
		text: 'サウナ好きのご友人や貸切サウナのプレゼントはいかがでしょうか。本記事では貸切サウナをプレゼントできるeギフトカードの購入方法とご利用方法を紹介します。',
		date: '2024/09/01',
		url: '/article9/',
		image:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff',
		alt: 'ととのうとロゴ',
	},
	{
		title:
			'「貸切サウナととのうと」が「ななめうえトラベル」にて紹介されました。',
		text: '「貸切サウナととのうと」で心も体もリセット！贅沢プライベートサウナで自然を満喫',
		date: '2024/11/09',
		url: 'https://nanameue-travel.com/oosaka-sauna-totonouto/',
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
					店主のブログ
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
