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

ReactDOM.createRoot(document.getElementById('article6')!).render(
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
					<H1>貸切サウナととのうと店主が紹介する大阪八尾のサウナ飯</H1>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fsankakumeshi.jpeg?alt=media&token=d9a7adb7-4427-4bdb-b99f-4b9692d9370d'
						alt='鉄板炒飯'
					/>
					<WrapH2>
						<H2>大阪 八尾エリアのサウナ飯</H2>
						<Contents>
							<Typography variant='body1'>
								ととのうと店主によるとても投げやりなサウナ飯紹介。
								<br />
								2024年7月現在の情報です。
								<br />
							</Typography>
							<Box sx={{ mt: 2 }}>
								<Link href='https://totonouto.com/article1/'>
									貸切サウナととのうとのことをもっと知りたい方はこちらの記事をチェック。
								</Link>
								<br />
								<br />
								<Link href='https://totonouto.com/'>
									店舗情報などはこちら。
								</Link>
								<br />
								<br />
								<Link href='https://totonouto.com/article5/'>
									予約方法こちらでご紹介しております。
								</Link>
								<br />
								<br />
							</Box>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>いまさらだけど、サウナ飯って？</H2>
						<Contents>
							<Typography variant='body1'>
								サウナ後に食べる食事のことで、「サウナメシ」と読みます。
								<br />
								<br />
								サ飯と呼ばれることもあるね。
								<br />
								<br />
								サウナでしっかりととのったあとに食べるご飯は特別おいしい！
								<br />
								<br />
								なぜ美味しくなるのか？
								<br />
								諸説ありそうなのでここでは割愛。
								<br />
								<br />
								皆さんはどんなサウナ飯がお好きですか？
								<br />
								<br />
								定食系？
								<br />
								カレー？
								<br />
								揚げ物？
								<br />
								やっぱりお酒？
								<br />
								<br />
								この記事では、ととのうとの店主がよく行くお店をちょっぴりご紹介します。
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>住食堂</H2>
						<Contents>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fyoshi3.jpeg?alt=media&token=44a7ece3-ed88-4422-a5cf-d33486c267f2'
								alt='カレーとうどん'
							/>
							<Typography variant='body1'>
								貸切サウナととのうとから徒歩1分
								<br />
								<br />
								何が良いって、うまい、やすい、人が良い。
								<br />
								そして、なんでもある。
								<br />
								ランチならおふくろ定食がおすすめ。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fyoshi2.jpeg?alt=media&token=85e2ba8d-87ba-433c-9b31-d35b1cb8f96b'
								alt='おふくろ定食'
							/>
							<Link href='https://yaolife.beaverhouse.net/gourmet/japanese/yao-yoshiteishokudou-w353-20230515/'>
								おすすめ記事
							</Link>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fyoshi1.jpeg?alt=media&token=e6ef036e-4c23-4460-bce2-fc5ca6b16519'
								alt='住食堂'
							/>
							<Typography variant='body1'>
								<br />
								住所
								<br />
								〒581-0084 大阪府八尾市植松町5丁目12-22
								<br />
								<br />
								電話番号
								<br />
								072-991-9520
								<br />
								<br />
								営業時間
								<br />
								12：00〜15：00
								<br />
								18：00〜21：30
								<br />
								<br />
								定休日
								<br />
								月曜日
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>海鮮串揚げおたる</H2>
						<Contents>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fotaru2.jpeg?alt=media&token=7a25aa8a-bb51-473a-9283-821e96456d1d'
								alt='お造り盛り合わせ'
							/>
							<Typography variant='body1'>
								貸切サウナととのうとから徒歩10秒のご近所さん
								<br />
								<br />
								サウナ後に海鮮ならここで間違いなし！
								<br />
								<br />
								全てが絶品。
								<br />
								海鮮、串揚げ、寿司、鍋、、、なんでもあって全てが良い
								<br />
								<br />
								旬のものがあるので、おすすめをお店の人に聞くのが良いよ！
								<br />
								<br />
							</Typography>

							<Link href='http://yaoncyu.blog.fc2.com/blog-entry-12092.html'>
								おすすめ記事
							</Link>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fotaru1.jpeg?alt=media&token=0de9a2ba-d249-4e94-b25a-8f9781bb602c'
								alt='海鮮串揚げおたる'
							/>
							<Typography variant='body1'>
								<br />
								住所
								<br />
								大阪府八尾市植松町5-7-30
								<br />
								<br />
								電話番号
								<br />
								072-991-2514
								<br />
								<br />
								営業時間
								<br />
								17：00〜1：00
								<br />
								<br />
								定休日
								<br />
								隔週？で水曜日
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>鶏屋くだかけ　八尾店</H2>
						<Contents>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fkudakake2.jpeg?alt=media&token=70b024f8-bcf4-4f53-a64d-c663e573fec3'
								alt='やきとり'
							/>
							<Typography variant='body1'>
								貸切サウナととのうとから徒歩3分
								<br />
								<br />
								おいしい焼き鳥にお造りもあります
								<br />
								〆にラーメンたべれます。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fkudakake3.jpeg?alt=media&token=245c67db-440e-400f-be05-4ce36e20d5eb'
								alt='鶏のお造り'
							/>
							<Link href='https://tabelog.com/osaka/A2707/A270705/27073558/'>
								食べログ
							</Link>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fkudakake1.jpeg?alt=media&token=3da65e12-8b49-4881-9707-57e8a883f482'
								alt='鶏屋くだかけ　八尾店'
							/>
							<Typography variant='body1'>
								<br />
								住所
								<br />
								大阪府八尾市植松町4-8-2
								<br />
								<br />
								電話番号
								<br />
								072-926-2260
								<br />
								<br />
								営業時間
								<br />
								17：30〜0：00
								<br />
								<br />
								定休日
								<br />
								なし
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>広島風お好み焼　ふぅふぅ</H2>
						<Contents>
							<Typography variant='body1'>
								貸切サウナととのうとから徒歩10秒のご近所さん
								<br />
								<br />
								粉物ならここでしょ
								<br />
								でも、他の焼き物も美味しい。。。
								<br />
								<br />
								店主はいつもオムライスを頼みます。笑
								<br />
								鉄板で作るオムライス。最高！！
								<br />
								<br />
								ねぎ焼きとかもあるよ
								<br />
								<br />
								ネットでの情報は少ないので、ととのうと店主に聞いてみてください。
								<br />
							</Typography>

							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Ffufu.jpeg?alt=media&token=b13674e6-2fb7-4155-af73-46714070a8c6'
								alt='広島風お好み焼 ふぅふぅ'
							/>
							<Typography variant='body1'>
								<br />
								住所
								<br />
								大阪府八尾市植松町5-5-13
								<br />
								<br />
								電話番号
								<br />
								<br />
								営業時間
								<br />
								<br />
								定休日
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>とんかつマンジェ</H2>
						<Contents>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fmanger2.jpeg?alt=media&token=33214623-1ff3-451f-b735-bceed35d4818'
								alt='とんかつ'
							/>
							<Typography variant='body1'>
								ととのうとから徒歩15分
								<br />
								<br />
								超人気店
								<br />
								朝からお店の前にでてるボードに記名する必要あり。
								<br />
								<br />
								お客様から聞いた話
								<br />
								ととのうとの10：00〜12：00を予約
								<br />
								朝一番にマンジェによって記名
								<br />
								ととのうとで貸切サウナ
								<br />
								マンジェでランチ
								<br />
								この流れが良いらしいです。
								<br />
								<br />
							</Typography>

							<Link href='https://tabelog.com/osaka/A2707/A270705/27013624/'>
								食べログ
							</Link>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fmager1.jpeg?alt=media&token=b04d9e2a-67d6-47ff-9304-d527038e011d'
								alt='とんかつマンジェ'
							/>
							<Typography variant='body1'>
								<br />
								住所
								<br />
								大阪府八尾市陽光園2-3-22
								<br />
								<br />
								電話番号
								<br />
								072-996-0175
								<br />
								<br />
								営業時間
								<br />
								11：00-14：00
								<br />
								17：00-20：30
								<br />
								<br />
								定休日
								<br />
								月曜日、火曜日
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>Cafe Bar Donna</H2>
						<Contents>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fdonna2.jpeg?alt=media&token=82d20708-034b-4788-8b7a-65736e4b0c4e'
								alt='カクテル'
							/>
							<Typography variant='body1'>
								ととのうとから徒歩15分
								<br />
								<br />
								ととのうと店主の行きつけ
								<br />
								美味しいお酒がいっぱい
								<br />
								<br />
								バーテンダーみつるのインスタグラムが面白いと評判
								<br />
								みてやってください。
							</Typography>

							<Link href='https://www.instagram.com/cafebardonna/'>
								Cafe Bar Donnna のインスタグラム
							</Link>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle6%2Fdonna1.jpeg?alt=media&token=7129cc06-1d6b-4ff3-b499-af03447fd400'
								alt='Cafe Bar Donnna'
							/>
							<Typography variant='body1'>
								<br />
								住所
								<br />
								大阪府八尾市陽光園1-10-15
								<br />
								<br />
								電話番号
								<br />
								<br />
								営業時間
								<br />
								<br />
								定休日
								<br />
								日曜日、月曜日
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<Box sx={{ mt: 2 }}>
						<Link href='https://totonouto.com'>
							ととのうとのwebページもみてね。
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
