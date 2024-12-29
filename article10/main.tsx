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

ReactDOM.createRoot(document.getElementById('article10')!).render(
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
					<H1>セルフロウリュで使える新アロマをご紹介します。</H1>
					<Typography variant='body1'>最終更新日:2024年12月06日</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle10%2F%E3%82%A2%E3%83%AD%E3%83%9E.jpeg?alt=media&token=d049b81c-2648-4c79-9df7-ec7f869bf725'
						alt='アロマオイル'
					/>

					<WrapH2>
						<H2>新たに入荷した5種類の天然アロマ</H2>
						<Contents>
							<H3>
								アロマテラピーとは
								<Typography variant='body1'>
									花の香り。フルーツの香り。森の香り。
									<br />
									植物の香りは、私たちの心や身体にさまざまに働きかけます。
									<br />
									アロマテラピーは、植物から抽出した香り成分である精油（エッセンシャルオイル）を使って、心身のトラブルを穏やかに回復し、健康や美容に役立てていく自然療法です。
								</Typography>
								<Link href=''>出典：AEAJ</Link>
							</H3>
							<H3>ヴィヒタブレンド</H3>
							<Typography variant='body1'>
								白樺とその他の樹木精油をブレンド。本場フィンランドのサウナをイメージした、自然の中にいるような心地よい香りは、元気を与えてくれます。
							</Typography>

							<H3>ユーカリレモン</H3>
							<Typography variant='body1'>
								ユーカリはすっきりとした香りで鼻も通り、呼吸器系への不快感を和らげてくれるでしょう。
								<br />
								レモンは気分を明るくリフレッシュし、意識をはっきりさせて、集中力、記憶力の強化に役立つでしょう。
							</Typography>

							<H3>グリーンティー</H3>
							<Typography variant='body1'>
								プチグレンやベルガモットなどをブレンドし、天然精油で緑茶を表現しました。香りたつ新茶のような爽やかさと渋みをご体感ください。
								<br />
							</Typography>

							<H3>ずっとウッド</H3>
							<Typography variant='body1'>
								国産のヒノキやヒバなどをブレンドし、サウナ内の自然の木の香りをしっかりと香りたたせます。いつまでも新しい木の香りが続きます。
								<br />
							</Typography>

							<H3>シトラスローズ</H3>
							<Typography variant='body1'>
								ベルガモットをメインにブレンド。甘く爽やかでラグジュアリーな香りです。リラックス作用があり、気持ちが沈んだり落ち込んだ時に良いでしょう。緊張緩和にも優れているため、サウナでのリラックスとの相性も最適。
								<br />
							</Typography>
						</Contents>
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
