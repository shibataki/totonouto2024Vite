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

ReactDOM.createRoot(document.getElementById('article9')!).render(
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
						サウナ好きのご友人へのプレゼントに最適!貸切サウナととのうとeギフトカードのご利用方法
					</H1>
					<Typography variant='body1'>最終更新日:2024年09月01日</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2Flogo512.jpeg?alt=media&token=31fe5aed-5208-44aa-8667-a6889e6645ff'
						alt='ととのうとのロゴ'
					/>
					<WrapH2>
						<H2>
							eギフトカードを使えばサウナ好きのご友人に貸切サウナをプレゼントできます！
						</H2>
						<Contents>
							<Typography variant='body1'>
								サウナ好きの友達に貸切サウナをプレゼントしたいけどどうすれば良いの？って方におすすめなのがeギフトカード。
								<br />
								<br />
								本記事ではeギフトカードのプレゼント方法とeギフトカードを使用した予約方法をお伝えします。
								<br />
								<br />
								サウナ好きのご友人の記念日に貸切サウナをプレゼントするのはいかがでしょうか。
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>eギフトカードを購入してプレゼントする</H2>
						<Contents>
							<Box sx={{ mt: 2 }}>
								<Link href='https://app.squareup.com/gift/MLESE7MGPMGZ5/order?fbclid=IwZXh0bgNhZW0CMTAAAR357yyj__JNg1pAIkZnsx8UdwGvBCvUeaTYWZo8NyTXdI7rvHnkdLwL9Jw_aem_QE6qgkG_UTM1HzACpZuIqg'>
									こちらからeギフトカードをご購入いただけます。
								</Link>
							</Box>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle9%2Fgift1.jpeg?alt=media&token=abf8cb4f-5809-4445-a0d4-82d76f546ec9'
								alt='ギフトカード購入サイト'
							/>
							<H3>ギフトの種類を選択</H3>
							<Typography variant='body1'>個人向けをご選択ください</Typography>

							<H3>eギフトカードの金額を選択</H3>
							<Typography variant='body1'>
								プレゼントしたい金額をご選択ください
								<br />
								1~2名様でご利用いただく場合は12,000円になります。
								<br />
								カスタムでお好みの金額を入力することも可能です！
							</Typography>

							<H3>配送の詳細</H3>
							<Typography variant='body1'>
								※プレゼントする場合は「自分宛にこのカードを送信する」をチェックしないでください。
								<br />
								プレゼントしたいご友人のメールアドレスがわからない場合は「自分宛にこのカードを送信する」にチェックを入れ、届いたメールに記載されたギフトカード番号をご友人にお伝えください。
								<br />
								<br />
								プレゼントしたいご友人の名前とメールアドレスをご入力ください。
								<br />
							</Typography>

							<H3>あなたの詳細</H3>
							<Typography variant='body1'>
								ご自身の名前とメールアドレスをご入力ください。
								<br />
							</Typography>

							<H3>お会計</H3>
							<Typography variant='body1'>
								全てご入力いただいた後、お会計ボタンをクリック
								<br />
								<br />
								ご友人にメールでeギフトカードが送付されます。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle9%2Fgift4.jpeg?alt=media&token=4dc846f4-dede-4978-9a17-24310d9f1c92'
								alt='ギフトメール'
							/>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>eギフトカードのご利用方法</H2>
						<Contents>
							<Typography variant='body1'>
								通常のご予約方法との違いは、クレジットカード情報の代わりにギフトカードコードをご入力いただくだけ。
							</Typography>
						</Contents>
					</WrapH2>
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
								連絡先情報を入力してください。
								<br />
								お支払い方法にギフトカードをクリックしてギフトカードコードを入力してください。
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
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle9%2Fgift2.jpeg?alt=media&token=8d018085-7637-4adc-b090-9de37645294c'
								alt='予約手順7'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle9%2Fgift3.jpeg?alt=media&token=5f98b11b-733b-42cb-a289-2729eec4c32d'
								alt='予約手順8'
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
