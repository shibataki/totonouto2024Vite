import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/index.css'

import { Box, Typography, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme'
import Link from '@mui/material/Link'

import Header2 from '../src/Header2'
import Footer from '../src/Footer'
import MyImg from '../src/MyImg'
import WrapH2 from '../src/WrapH2'
import Contents from '../src/Contents'
import H1 from '../src/H1'
import H2 from '../src/H2'
import H3 from '../src/H3'

ReactDOM.createRoot(document.getElementById('article4')!).render(
	<React.StrictMode>
		<Box
			component='header'
			sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}
		>
			<Header2 />
		</Box>
		<ThemeProvider theme={theme}>
			<Container maxWidth='md'>
				<Box component='article' sx={{ px: 4, mb: 15 }}>
					<H1>貸切サウナととのうとプチリニューアル</H1>
					<Typography variant='body1'>最終更新日:2024年07月21日</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff'
						alt='ととのうとのロゴ'
					/>
					<WrapH2>
						<H2>プチリニューアルのお知らせ</H2>
						<Contents>
							<Typography variant='body1'>
								2024年7月、少しだけリニューアルします。
								<br />
								休みの日や空き時間を活用するのでお店は休みません。
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>なぜ今リニューアル？</H2>
						<Contents>
							<Typography variant='body1'>
								ととのうとは2023年夏から2024年にかけて大きくリニューアルしました。
								<br />
								2つ目のサウナ「イロリサウナ」が誕生し、お庭や内装も大きく変わりました。
								<br />
								リニュアルオープンから半年ほど営業して、たくさんのお客様から色々なご意見をいただきました。
								<br />
								嬉しいことにほとんどの方にはご満足いただけましたが、一方で下記のような声もありました。
								<br />
								<br />
								・同時に2組利用なので、プライベート感が少ない。
								<br />
								・外気浴場が狭い
								<br />
								・イロリサウナの水風呂が脱衣所の奥にあり、床が濡れて着替えができない。
								<br />
								・フタリサウナの脱衣所が狭い
								<br />
								・フタリサウナの脱衣所が暑い
								<br />
								・水風呂がぬるい
								<br />
								<br />
								などなど
								<br />
								<br />
								8月でリニューアル工事の開始から1年になります。
								<br />
								工事中は死に物狂いで作業ばかりしてました。
								<br />
								毎日、朝から晩までずーっと作業。これが半年。かなりキツイ。
								<br />
								一方で多くの方にご協力いただき一緒に汗を流した時間は本当に楽しく、かけがえのないもの。一生の思い出です。
								<br />
								これがDIYサウナ施設の裏側。
								<br />
								<br />
								ご協力いただいた方の中には無償で工事に参加してくださった方もいらっしゃいます。
								<br />
								ととのうとは、そんな多くの方の汗と想いが詰まったサウナ施設です。
								<br />
								<br />
								もちろんお客様の皆様の中にも応援してくださる方がいらっしゃいます。
								<br />
								何度も繰り返しご利用いただきありがとうございます。
								<br />
								ととのうとは、そんなお客様の汗と想いも詰まっております。
								<br />
								<br />
								評価いただけること自体がありがたいことではあります。
								<br />
								でも、店主は低評価をいただくたびに上の皆様の顔が想い浮かびます。
								<br />
								<br />
								このままにしておくわけにはいかない。
								<br />
								全てのお客様から満点がいただけるその日まで、
								<br />
								ととのうとのリニューアルは続きます。
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>何が変わるの？</H2>
						<Contents>
							<Typography variant='body1'>
								今回のプチリニューアルの計画。まだ計画なので変更の可能性もあります。
								<br />
							</Typography>
							<H3>サウナ室が2つ使える？</H3>
							<Typography variant='body1'>
								「フタリサウナ」と「イロリサウナ」
								<br />
								ととのうとには2つのサウナ室がございます。
								<br />
								この2つから一方を選んでご利用いただいております。
								<br />
								これが、両方使えるようになります。
								<br />
								<br />
								お値段はそのまま。
								<br />
								<br />
								2024/7/24からご利用可能になりました。
								<br />
								<br />
							</Typography>

							<H3>ひろーいお庭もまるごとつかえる？</H3>
							<Typography variant='body1'>
								「フタリサウナ」と「イロリサウナ」を別のお客様にご利用いただいております。
								<br />
								そのため、外気浴場をパーテーションで2つに分割しております。
								<br />
								このパーテーションがなくなり、1つのお庭としてまるっとご利用いただけるようになります！
								<br />
								<br />
								これまた、お値段はそのまま。
								<br />
								<br />
								2024/7/24からご利用可能になりました。
								<br />
								<br />
							</Typography>
							<H3>水風呂がお庭に？</H3>
							<Typography variant='body1'>
								イロリサウナの水風呂は脱衣所の奥にあります。
								<br />
								床がぬれて靴下が履きにくいんですよね。
								<br />
								<br />
								水風呂、外に出ます！
								<br />
								床はもう濡れません。
								<br />
								<br />
								もちろん、お値段はそのまま
								<br />
								<br />
								2024年8月より利用開始しています。
								<br />
							</Typography>
							<H3>ついにチラー導入？</H3>
							<Typography variant='body1'>
								これまではチラーがなく、夏はぬるくて冬はシングル。そんな感じでやってました。
								<br />
								季節感があって店主は好きでしたが、やっぱり水風呂は冷たい方が良い。
								<br />
								<br />
								冷たくなっても、お値段はそのまま
								<br />
								<br />
								2024年8月より利用開始しています。
								<br />
							</Typography>
							<H3>総面積は90平米？</H3>
							<Typography variant='body1'>
								ここまでと、あと細々したところをリニューアルすると。
								<br />
								総面積が90平米以上になります。
								<br />
								これをまるっと1組で貸し切れる。
								<br />
								<br />
								贅沢。。。
								<br />
								<br />
								でも、お値段はそのまま。
								<br />
								<br />
								そんな感じにしたいです。
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<Box sx={{ mt: 2 }}>
						<Link href='https://totonouto.com'>お店のwebページもみてね。</Link>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Link href='https://totonouto.com/article5/'>
							予約方法がわからない方はこちら。
						</Link>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
		<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
			<Footer />
		</Box>
	</React.StrictMode>
)
