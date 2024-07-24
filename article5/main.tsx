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

ReactDOM.createRoot(document.getElementById('article5')!).render(
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
					<H1>貸切サウナととのうとの予約方法</H1>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff'
						alt='ととのうとのロゴ'
					/>
					<WrapH2>
						<H2>予約サイトにアクセス</H2>
						<Contents>
							<Typography variant='body1'>
								webサイトの下部に「ご予約はこちらから」と書かれた赤いボタンがあります。
								<br />
								これをクリックしてください。予約サイトに移動します。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle5%2Fp1.jpeg?alt=media&token=f84ff120-4b2c-48a0-8759-be7be342481d'
								alt='予約手順1'
							/>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>メニューを選択</H2>
						<Contents>
							<Typography variant='body1'>
								予約サイトに移動すると、メニューが表示されます。
								<br />
								現在は1つのメニューのみになります。こちらをクリックしてください。
								<br />
								イロリサウナとフタリサウナの2つのサウナ室がご利用いただけるメニューです。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle5%2Fp2.jpeg?alt=media&token=d918ecd1-be0c-4e68-a9c1-d67540ffb029'
								alt='予約手順2'
							/>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>ご利用人数を選択</H2>
						<Contents>
							<Typography variant='body1'>
								続いて、ご利用人数を選択します。
								<br />
								ご利用人数を選択して、更新ボタンをクリックしてください。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle5%2Fp3.jpeg?alt=media&token=43443929-f15e-43b5-b281-b8abb445802e'
								alt='予約手順3'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle5%2Fp4.jpeg?alt=media&token=b5134d8e-ee2a-46c2-9924-6cabda67c027'
								alt='予約手順4'
							/>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>日時を選択</H2>
						<Contents>
							<Typography variant='body1'>
								続いて、ご利用になる日時を選択します。カレンダーからご希望の日付を選んでください。
								<br />
								ｖをクリックすると1ヶ月分の日付が表示されます。
								<br />
								<br />
								下に時間が表示されます。ご希望の時間をクリックしてください。時間をクリックすると次のページに進みます。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle5%2Fp5.jpeg?alt=media&token=b67a5b43-d73a-464c-a8fa-4e2bf2fbd643'
								alt='予約手順5'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle5%2Fp6.jpeg?alt=media&token=7f3864c4-b755-4ffc-98e7-27e7f75d64ab'
								alt='予約手順6'
							/>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>予約者情報の入力</H2>
						<Contents>
							<Typography variant='body1'>
								連絡先情報とお支払いに使用するクレジットカード情報を入力してください。
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>キャンセルポリシーは必ずチェックすること</H2>
						<Contents>
							<Typography variant='body1'>
								入力後は必ずキャンセルポリシーをご確認ください。
								<br />
								すべてのポリシーを見るをクリックするとみれます。
								<br />
								読み終わったら完了ボタンをクリック
								<br />
								＊ご予約確定時のキャンセルポリシーが適用されます、必ず最新のポリシーを確認してください。
								<br />
								<br />
								貸切サウナととのうとのキャンセルポリシーを確認し、これに同意します。
								<br />
								の左側にある◻︎をクリックしてください。◻︎の中に青いチェックマークが入ればOKです。
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>予約を確定</H2>
						<Contents>
							<Typography variant='body1'>
								続いて、「予約する」と書かれた青いボタンを押してください。
								<br />
								予約完了です。
								<br />
								<br />
								予約が完了するとメールが届きます。
								<br />
								メールが届いたことを必ず確認してください。
								<br />
								<br />
								以上になります。お疲れ様でした。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle5%2Fp7.jpeg?alt=media&token=4215718c-2a7d-4094-8388-1dc58b45508f'
								alt='予約手順7'
							/>
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
