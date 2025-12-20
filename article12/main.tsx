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

ReactDOM.createRoot(document.getElementById('article12')!).render(
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
					<H1>
						貸切サウナを利用したことがない人が最初に不安に思うこと【初めての方向け】
					</H1>
					<Typography variant='body1'>最終更新日:2025年12月20日</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff'
						alt='貸切サウナととのうとのロゴ'
					/>
					<Typography variant='body1'>
						貸切サウナに興味はあるけれど、「使ったことがないから不安」「普通のサウナと何が違うのか分からない」そう感じている方はとても多いです。
						<br />
						<br />
						実際、当店にも「初めてだけど大丈夫ですか？」というお問い合わせをよくいただきます。
						<br />
						<br />
						この記事では、貸切サウナを利用したことがない方が、最初に不安に思いやすいポイントを一つずつ解消していきます。
					</Typography>
					<Box sx={{ mt: 2 }}>
						<Link href='https://totonouto.com'>貸切サウナととのうとTop</Link>
					</Box>
					<WrapH2>
						<H2>貸切サウナはサウナ初心者でも利用できる？</H2>
						<Contents>
							<Typography variant='body1'>
								結論から言うと、貸切サウナはサウナ初心者の方にこそ向いています。
								<br />
								理由はとてもシンプルです。
								<br />
								・ 他のお客さんがいない、
								<br />
								・周りの目を気にしなくていい、
								<br />
								・自分のペースで過ごせるから。
								<br />
								一般的なサウナでは、 「ルールを間違えたらどうしよう」
								「周りに迷惑をかけたら恥ずかしい」
								と緊張してしまう方も少なくありません。 <br />
								貸切サウナでは、 その不安自体がほとんどありません。
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>サウナの入り方に正解はある？</H2>
						<Typography variant='body1'>
							「何分くらいサウナに入ればいいの？」
							という質問もよくいただきます。 <br />
							よく言われる目安は、 <br />
							・サウナ：5〜10分
							<br />
							・水風呂：30秒〜1分
							<br />
							・休憩：5〜10分
							<br />
							ですが、これはあくまで目安です。
							<br />
							大切なのは、「気持ちいいと感じるところでやめること」。
							「暑くなったら出る」「疲れたら休む」 それで十分です。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>水風呂に入らなくても大丈夫？</H2>
						<Typography variant='body1'>
							水風呂が苦手な方も多いですが、 無理に入る必要はありません。
							<br />
							・シャワーで体を冷やす。
							<br />
							・足だけ浸かる。
							<br />
							・今日は入らない。
							<br />
							これでも問題ありません。
							貸切サウナでは、「やらなきゃいけないこと」は何もありません。
							<br />
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>まとめ｜初めての不安は自然なこと</H2>
						<Typography variant='body1'>
							貸切サウナを初めて利用するときに、不安を感じるのはとても自然なことです。
							でも実際は、貸切だからこそ失敗しにくく、緊張しにくいサウナ体験になります。「サウナに慣れてから行こう」ではなく、最初の一歩として貸切サウナを選ぶのも、ひとつの正解です。
							<br />
							貸切サウナについて不安や疑問がある場合は
							店主まで気軽にご相談ください。
						</Typography>
						<Box sx={{ mt: 2 }}>
							<Link href='https://lin.ee/vQYTxe4'>LINE公式アカウント</Link>
						</Box>
					</WrapH2>

					<Box sx={{ mt: 2 }}>
						<Link href='https://totonouto.com'>お店のwebページもみてね。</Link>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
		<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
			<Footer />
		</Box>
	</React.StrictMode>
)
