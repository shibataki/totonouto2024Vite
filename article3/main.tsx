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

ReactDOM.createRoot(document.getElementById('article3')!).render(
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
					<H1>サウナオーナーは営業後にサウナに入るのか</H1>
					<Typography variant='body1'>最終更新日:2024/07/15</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff'
						alt='ととのうとのロゴ'
					/>
					<WrapH2>
						<H2>「放課後サウナ」</H2>
						<Contents>
							<Typography variant='body1'>
								ととのうとの営業終了後、私は密かにサウナを楽しんでいる。
								<br />
								「放課後サウナ」と称し、なかまを集めてサウナに入るのだ。
								<br />
								<br />
								「放課後サウナ」に呼ぶのは行きつけのバーで知り合った方々。
								<br />
								ととのうとの工事を無償で手伝ってくれた方を中心に、店主がその日会いたいと思った人を呼んでいる。
								<br />
								<br />
								<br />
								私には10年ほど通い続けているBarがある。
								<br />
								お店の名前は「CafeBarDonna」
								<br />
								店主のインスタグラムが面白いと評判だが、私は一切見ていない。
								<br />
								どうしても暇な時に見てあげてほしい。
								<br />
								<br />
								私はドンナに週3日くらいのペースで入り浸っている。
								<br />
								そんな人は居ないと思うが、ととのうとの店主とサウナの話がしたいと思ってくださる方はここに来ると良い。
								<br />
								たいていくだらない話で盛り上がっている。
								<br />
								私はこのお店でたくさんの仲間と出会った。
								<br />
								<br />
								ここで出会った仲間たちが貸切サウナととのうとの工事を支えてくれた。
								<br />
								仕事終わりで疲れているにも関わらず、一緒に汗を流してくれた。
								<br />
								休日にも関わらず、一緒に汗を流してくれた。
								<br />
								全て無償でやってくれた。
								<br />
								工事の詳細はまた別の機会に・・・
								<br />
								<br />
								「そんな仲間たちに恩返しがしたい」
								<br />
								私にできることといえば、サウナに入ってもらって汗をかいてもらうことくらいしかない。
								<br />
								<br />
								こうして「放課後サウナ」が始まった。
								<br />
								<br />
								というのは口実で、私はただただサウナに入りたいのだった。
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
