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

ReactDOM.createRoot(document.getElementById('article11')!).render(
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
					<H1>貸切サウナととのうとのお庭 - 大阪で草花を楽しむ冬の外気浴</H1>
					<Typography variant='body1'>最終更新日:2024年12月29日</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa3.jpeg?alt=media&token=c8abeb86-aff3-400b-9b07-3e51c8ded8d2'
						alt='貸切サウナととのうとの外気浴場'
					/>
					<Typography variant='body1'>
						「貸切サウナととのうと」は大阪府八尾市にある完全貸切のプライベートサウナです。
						<br />
						四季折々の美しい草花を楽しめるお庭での外気浴がおすすめです。
						<br />
						外はすっかり寒くなりましたが、サウナで温まった体をクールダウンさせるのにはちょうど良いですよね。
						<br />
						先日、年内最後のお手入れが完了しましてお庭の草花たちもしっかりととのっております。。。
						<br />
						冬支度を終えたお庭で心身を癒す特別なひとときを過ごしませんか？
					</Typography>

					<WrapH2>
						<H2>お庭のお手入れの様子 - 草花たちの冬支度</H2>
						<Contents>
							<Typography variant='body1'>
								先日、2024年最後のお庭のお手入れを行いました。
								<br />
								貸切サウナととのうとでは外気場をご利用いただく皆様に美しい景色を楽しんでもらえるように細かい部分まで気を使っています。
								<br />
								お庭のお手入れが終わったばかりの瞬間を写真に収めましたので、ぜひご覧ください。
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa1.jpeg?alt=media&token=250f3e6d-fbae-43cf-bffc-e4e307b7575a'
								alt='ととのうとの庭'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa2.jpeg?alt=media&token=476f056f-0a04-48c5-9cc8-cf1e313ae64a'
								alt='ととのうとの庭2'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa3.jpeg?alt=media&token=c8abeb86-aff3-400b-9b07-3e51c8ded8d2'
								alt='ととのうとの庭3'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa4.jpeg?alt=media&token=c0bbd2aa-b481-457b-a982-f738b87e7f75'
								alt='ととのうとの庭4'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa5.jpeg?alt=media&token=fd048eb5-23fa-4c7d-9105-23f01a07f25b'
								alt='ととのうとの庭5'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa6.jpeg?alt=media&token=b49ad974-5a5c-4aa9-96bf-b3e73b70d8a5'
								alt='ととのうとの庭6'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle11%2Fniwa7.jpeg?alt=media&token=0df889ac-468e-4b6e-b478-de7f1adff3e7'
								alt='ととのうとの庭7'
							/>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>冬の庭を楽しむ店主</H2>
						<Typography variant='body1'>
							すっかり寒くなって、朝の支度が億劫なこの頃。
							<br />
							私はお店に着くとすぐにサウナの電源を入れ、水風呂を準備します。
							<br />
							その後はお庭でコーヒーを片手に、草花たちに水をやる。冬は水が冷たくて温かいコーヒーがないと耐えられません。
							<br />
							水やりをしながら草花たちを観察しているとあっという間に時間が過ぎ、あわてて開店の準備にもどります。
							<br />
							店主と同様、ととのうとの草花たちは少し変わっています。
							<br />
							落葉しても良い頃なのにまだ紅葉が楽しめたり、越冬が難しい草もわさわさと茂っております。
							<br />
							皆様も外気浴のついでに少し観察してみてください。
						</Typography>
					</WrapH2>
					<WrapH2>
						<H2>冬の外気浴の楽しみ方</H2>
						<Typography variant='body1'>
							冬はとにかくサウナで体を温める.
							<br />
							普段より長めに入っちゃってください。
							<br />
							水風呂は露天でかなり冷たいので、苦手な方は無理をしないでくださいね。
							<br />
							シャワーや水風呂の後は澄んだ冬の空気を感じながらお庭で外気浴
							<br />
							リクライニングチェアでくつろぐも良し。外が寒すぎるって方はポンチョを使うのも良いですね。レンタルのご用意がございますので気軽にお声がけください。
							<br />
							店主はいつも水風呂近くのレンガでできた謎の突起に寝転びます。
							<br />
							枝垂れヤポンの木を下から眺めながらととのいます。
							<br />
						</Typography>
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
