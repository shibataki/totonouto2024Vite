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

ReactDOM.createRoot(document.getElementById('article13')!).render(
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
					<H1>「貸切サウナととのうと」で過ごす1日</H1>
					<Typography variant='body1'>最終更新日:2025年12月24日</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff'
						alt='貸切サウナととのうとのロゴ'
					/>
					<Typography variant='body1'>
						忙しい日が続くと、
						<br />
						「何もしない時間がほしい」
						<br />
						そう感じることはありませんか。
						<br />
						<br />
						今日は、 <br />
						「貸切サウナととのうと」で過ごす1日を
						<br />
						実際の流れに沿ってご紹介します。
						<br />
						<br />
						サウナが初めての方にも、
						<br />
						利用後のイメージが自然に湧く内容になっています。
					</Typography>
					<Box sx={{ mt: 2 }}>
						<Link href='https://totonouto.com'>貸切サウナととのうとTop</Link>
					</Box>
					<WrapH2>
						<H2>予約して、来店。</H2>
						<Contents>
							<Typography variant='body1'>
								<br />
								ととのうとは完全予約制。
								<br />
								当日は時間に合わせて向かうだけで、
								<br />
								並ぶことも、混雑を気にすることもありません。
								<br />
								<br />
								「今日はゆっくりしよう」
								<br />
								そう思えた時点で、少し気持ちが軽くなります。
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>到着。静かな空間にほっとする</H2>
						<Typography variant='body1'>
							<br />
							靴を脱いで暖簾をくぐると、
							<br />
							木の香りに包まれて、自然と方の力が抜けていきます。
							<br />
							<br />
							受付を済ませ、施設内の説明を受けて更衣スペースへ。
							<br />
							<br />
							スタッフ以外とは顔を合わせず、余計な気を使う場面はありません。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>着替えをして、深呼吸</H2>
						<Typography variant='body1'>
							水着に着替え、タオルを手に取ると、
							<br />
							「誰にも邪魔をされない時間のスタート」
							<br />
							<br />
							スマホを置いて、デジタルデトックスも良し。
							<br />
							好きな音楽をかけるも良し。
							<br />
							友人や恋人との会話を楽しむも良し。
							<br />
							本や漫画を読むも良し。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>1回目のサウナ</H2>
						<Typography variant='body1'>
							最初は短めに。
							<br />
							じんわりと体が温まり、
							<br />
							呼吸が自然と深くなっていきます。
							<br />
							<br />
							「何分入らなきゃいけない」
							<br />
							そんな決まりはありません。
							<br />
							<br />
							暑いと感じたら、外に出ます。
							<br />
							<br />
							（2つのサウナ室どちらか悩んだらまずはイロリサウナから）
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>クールダウンと休憩</H2>
						<Typography variant='body1'>
							シャワーで汗を流して、水風呂へ
							<br />
							<br />
							水風呂が苦手な人は、
							<br />
							シャワーで体を冷やします。
							<br />
							無理の無い温度に調節してください。
							<br />
							<br />
							椅子に座り、目を閉じると、
							<br />
							頭の中が静かになっていくのが分かります。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>2回目は、少しだけ長く</H2>
						<Typography variant='body1'>
							体が慣れてくる2回目。 <br />
							<br />
							無理はせず、「心地いい」と感じるところでやめます。
							<br />
							<br />
							貸切だから、周りの目を気にする必要はありません。
							<br />
							<br />
							（フタリサウナも利用してみてください）
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>休憩が、だんだん長くなる</H2>
						<Typography variant='body1'>
							休憩中、何もしない時間が自然と長くなっていきます。
							<br />
							<br />
							少しずつ体がととのい、「力が抜ける」感覚。
							<br />
							<br />
							あとは満足いくまでサウナと休憩を繰り返してください。
							<br />
							1セットだけでも良し、5セット、6セットするのも良し。
							<br />
							無理だけはしないように。
							<br />
							<br />
							あっという間に時間が過ぎてしまいます。
							<br />
							ととのうとを利用する多くの方からそのような感想をいただきます。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>最後は、シャワーと着替え</H2>
						<Typography variant='body1'>
							十分に満足したら、シャワーを浴びて着替えます。
							<br />
							<br />
							「もう1セットやらなきゃ」
							<br />
							なんて思わなくていい。
							<br />
							<br />
							今日はこれでちょうどいい。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>施設を出たあと</H2>
						<Typography variant='body1'>
							外に出ると、
							<br />
							景色は変わっていないのに、
							<br />
							自分だけ少し軽くなった感じがします。
							<br />
							<br />
							肩の力が抜け、
							<br />
							呼吸が深いまま。
							<br />
							<br />
							それだけで、
							<br />
							来てよかったと思えます。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>ととのうとは「自分の好きをみつける場所」</H2>
						<Typography variant='body1'>
							ととのうとでは、
							<br />
							- 上手に入らなくていい
							<br />
							- 正解なんていい
							<br />
							- 比べなくていい
							<br />
							<br />
							貸切サウナ「ととのうと」は、自分にあったサウナの入り方を探す場所です。
							<br />
							<br />
							いつも同じ入り方をするも良し。
							<br />
							その日の体調に合わせるも良し。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>こんな方におすすめ</H2>
						<Typography variant='body1'>
							- 忙しさで頭が休まらない
							<br />
							- サウナに興味はあるけど不安
							<br />
							- 静かな時間がほしい
							<br />
							- 一人でゆっくり過ごしたい
							<br />
							<br />
							そんな方に、ちょうどいい施設です。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>まとめ</H2>
						<Typography variant='body1'>
							ととのうとでの1日は、特別なことをする日ではありません。
							<br />
							<br />
							ただ、
							<br />
							自分の好きをみつける日
							<br />
							<br />
							気が向いた時に、
							<br />
							気負わず、
							<br />
							自分のペースで。
							<br />
							<br />
							貸切サウナ「ととのうと」は、そんな使い方ができる場所です。
							<br />
							<br />
							ご利用方法やサウナの入り方についてご質問がある方は、
							<br />
							お気軽に公式LINEよりメッセージをお願いします。
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
