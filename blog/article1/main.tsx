import React from 'react'
import ReactDOM from 'react-dom/client'

import '../../src/index.css'

import { Box, Typography, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../src/theme'
import Link from '@mui/material/Link'

import Header2 from '../../src/Header2'
import Footer from '../../src/Footer'
import MyImg from '../../src/MyImg'
import WrapH2 from '../../src/WrapH2'
import Contents from '../../src/Contents'
import H1 from '../../src/H1'
import H2 from '../../src/H2'
import H3 from '../../src/H3'

ReactDOM.createRoot(document.getElementById('article1')!).render(
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
						関西 大阪 八尾 2024年リニューアル
						<br />
						カップルでも利用が可能なサウナ施設
						<br />
						貸切サウナととのうと とは？
					</H1>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2F%E3%83%AD%E3%82%B3%E3%82%99%E7%99%BD.png?alt=media&token=949aa7e8-886c-4a7b-a790-9be2b2716a28'
						alt='ととのうとのロゴ'
					/>
					<WrapH2>
						<H2>貸切サウナととのうとってどんな施設？</H2>
						<Contents>
							<Typography variant='body1'>
								貸切サウナととのうとは2020年オープンの大阪府八尾市にある貸切専門のサウナ施設。
								<br />
								完全予約制で2時間たっぷりご利用いただけます。
								<br />
								サウナや水風呂を自分たちだけで使えるし、お庭で外気浴もできちゃいます。
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2F%E5%BA%97%E8%88%97%E5%A4%96%E8%A6%B3.jpeg?alt=media&token=e3c2f762-f02e-4fea-b206-f41e07eef0d9'
								alt='ととのうとの外観'
							/>

							<Typography variant='body1'>
								サウナにハマり始めた頃。とにかくサウナに入りまくってました。
								<br />
								会社帰りに神戸サウナ、おやすみの日に銭湯ハシゴ。。。
								<br />
								<br />
								「いつものサウナは好きだけど、たまには遠くのサウナに行きたいな。」
								<br />
								そう思った店主はすぐに飛行機を予約して、単身でフィンランドへ飛びったったとか。
								<br />
								<br />
								そんなサウナが好きすぎる店主が自分が入りたいと感じるサウナをDIYで作っちゃいました。
								<br />
								それがととのうとの始まり。
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Ffutari.jpeg?alt=media&token=80be614d-5020-4ac2-8188-879349825595'
								alt='ととのうとのサウナ室'
							/>
							<Typography variant='body1'>
								行きつけのバーにて、「サウナを作ります！みんな手伝ってね＾＾」
								<br />
								そんな軽い感じで声をかけて仲間を集め、知恵を絞り、力を合わせて完成させた。
								<br />
								<br />
								みんなの想いと汗と笑顔がつまったサウナ。
								<br />
								それがととのうとのサウナ。
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2F%E3%83%95%E3%82%BF%E3%83%AA%E3%82%B5%E3%82%A6%E3%83%8A%E5%B7%A5%E4%BA%8B.jpeg?alt=media&token=11014de9-c67d-4d13-9ca0-b9800f63e382'
								alt='ととのうとの工事風景'
							/>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>カップルや夫婦、男女間の友人と利用が可能？</H2>
						<Contents>
							<Typography variant='body1'>
								貸切サウナととのうとにはフタリサウナとイロリサウナ、2つのご利用プランがございます。
								<br />
								<br />
								フタリサウナ
								<br />
								フタリサウナは男女でご利用いただけません。ご注意ください。
								<br />
								お一人、男性2名、女性2名のいずれかでご利用ください。
								<br />
								<br />
								イロリサウナ
								<br />
								イロリサウナが男女でご利用可能です。カップルでもご夫婦でも友達同士でもオッケーです！
								<br />
								女性の方は必ず水着を持ってきてくださいね。（水着のレンタルが男性用のみになります。）
								<br />
								<br />
								それぞれのサウナの詳細は続きの記事をチェック！
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>
							フタリサウナ/ プライベートなひと時を。
							<br />
							小さな個室空間をひとり占め！
							<br />
							(最大2名まで)
						</H2>
						<Contents>
							<Typography variant='body1'>
								小さな個室サウナをひとり占めするのがオススメ。
								<br />
								<br />
								フタリサウナ
								<br />
								同性であれば2名さまでもご利用いただけますが、少し手狭になるためイロリサウナをおすすめしております。
								<br />
								<br />
								サウナ、水風呂、シャワー脱衣所ぜーんぶたった一人で使えるって良いですよね。。。
								<br />
								<br />
								サウナ室の設定は熱々。さらにセルフロウリュが可能です。
								<br />
								<br />
								体感温度の上昇と下降を楽しむのがロウリュだよ！とフィンランドでベテランサウナーのおじさんが言っておりました。
								<br />
								<br />
								確かにフィンランドで扉の上下があいているサウナがあったなと。
								<br />
								そんな訳で、本場フィンランドのおじさんの意見を尊重した蒸気が抜けやすい設計になっております。
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari2.jpeg?alt=media&token=40a51b52-b757-4e8f-91a0-6d72a4d357a1'
								alt='フタリサウナの写真'
							/>
							<Typography variant='body1'>
								もちろんお庭で外気浴もできます！
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma.jpeg?alt=media&token=3f53663c-505d-49e7-99f7-a0279a6d723e'
								alt='外気浴場の写真'
							/>
							<Typography variant='body1'>
								チラー付きではないので、冷たい水がお好きな方は夏は避けてくださいね。イロリサウナには2024年夏チラー導入予定です。詳細はお問い合わせください。
								<br />
								<br />
								店主とそのなかまたちが初めてDIYしたサウナ。
								<br />
								元々は店主が趣味で使おうと思っておりました。。。
								<br />
								ぜひ、サウナ好きの皆様にもご利用いただきたいなと思っております。
								<br />
								<br />
								フタリサウナはそんなサウナ。
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>
							イロリサウナ/デートにも友達同士でも。
							<br />
							誰とでも入れる店主オススメのサウナ室！
							<br />
							（最大6名まで）
						</H2>
						<Contents>
							<Typography variant='body1'>
								イロリサウナは2024年のリニューアルで誕生した新しいサウナ。
								<br />
								男女でご利用可能でカップルでもご夫婦でもご友人同士でも！誰とでも一緒に入れちゃいます。
								<br />
								<br />
								こだわりの店内をご紹介しますね。
								<br />
								<br />
							</Typography>
							<Box>
								<H3>野澤の壁</H3>
								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Fnozawa.jpeg?alt=media&token=62a84274-e3e4-4a8e-b147-f3f1ec53c262'
									alt='野澤の壁'
								/>
								<Typography variant='body1'>
									フィンランドのスモークサウナをイメージして焼き木を使っています。
									<br />
									店主とその仲間達がガスバーナーで連日炙りつづけ、野澤棟梁に取り付けていただきました。
									<br />
									服も手も顔もぜーんぶ真っ黒になりながら作った壁。
									<br />
									保護塗料を塗っておりますが強く擦ると着色する可能性がございます。ご了承ください。
									<br />
									野澤の壁はそんな壁
									<br />
								</Typography>
								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Fnozawa_koji.jpeg?alt=media&token=ed80bc97-57b2-4940-b4fe-089d05757111'
									alt='野澤の壁工事の様子'
								/>
							</Box>
							<Box>
								<H3>だるまの庭</H3>
								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Fdaruma.jpeg?alt=media&token=a29558ff-6eec-4ac6-831f-27da68465977'
									alt='だるまの庭'
								/>
								<Typography variant='body1'>
									やっぱり自然に囲まれてととのいたい！そう思ってお庭を作りました。
									<br />
									だるま 中塚氏と一緒に作ったので「だるまの庭」。
									<br />
									<br />
									草を引き、整地をし、レンガを敷き、木を植える。そして、お手入れと水やり。
									<br />
									言葉にすると簡単だけど、とっても大変。
									<br />
									<br />
									手間もお金もかかる場所ですが、みなさんが心地良さそうにくつろいでいるのを見ると「作ってよかったなぁ」と思います。
									<br />
									みなさん大事に使ってくださいね。
									<br />
									<br />
									このお庭は100年後には森になってるらしい。
									<br />
									だるまの庭はそんなお庭
									<br />
								</Typography>
								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Fdaruma_koji.jpeg?alt=media&token=b62abfc2-9611-43c6-b9eb-5fbedef2eaec'
									alt='だるまの庭工事の様子'
								/>
							</Box>
							<Box>
								<H3>豊岡の滝</H3>
								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ftaki.jpeg?alt=media&token=a7aab4aa-a3e4-4b08-909f-5141774659b9'
									alt='豊岡の滝'
								/>
								<Typography variant='body1'>
									頭から水をサバーっと。サウナの後はこれが一番！
									<br />
									そう思って滝を作っちゃいました。（滝と言うとちょっと大袈裟ですが。。。）
									<br />
									豊岡親子に作ってもらったので「豊岡の滝」
									<br />
									<br />
									場所がちょっぴり分かりにくいので、詳細は店主におたずねください。
									<br />
									<br />
									冬場はかなり冷たくなりますので、覚悟してください。
									<br />
									豊岡の滝はそんな滝
								</Typography>
							</Box>
							<Box>
								<H3>立道の灯り</H3>
								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ftatemichi.jpeg?alt=media&token=e5871b55-c1b2-452e-9fcb-c527c7514808'
									alt='立道の灯り'
								/>
								<Typography variant='body1'>
									夜になるとしっとりと空間に光を灯します。
									<br />
									立道親子に作ってもらったので「立道の灯り」
									<br />
									<br />
									立道親子にはサウナの要サウナストーブなども取り付けてもらっています。
									<br />
									<br />
									デートでも友達同士でもゆったりくつろげる。
									<br />
									立道の灯りはそんな灯り
									<br />
								</Typography>
							</Box>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>大阪市内からのアクセスしやすい/JR八尾</H2>
						<Contents>
							<Typography variant='body1'>
								店舗情報
								<br />
								<br />
								住所:大阪府八尾市植松町5-5-15
								<br />
								営業時間 10:00〜22:00
								<br />
								定休日 火曜日
								<br />
								<br />
								電車でお越しの方へ
								<br />
								JR八尾駅が最寄りになります。JR八尾からは徒歩でOK。
								<br />
								<br />
								関西本線で天王寺からすぐ。
								<br />
								大阪や難波からも来やすい。
								<br />
								奈良からも来れちゃう。
								<br />
								八尾って良いよね。
								<br />
								<br />
								お車でお越しの方へ
								<br />
								近隣道路が混み合うことがありますので、お気をつけください。
								<br />
								無料駐車場はございません。近隣のコインパーキング等をご利用ください。
								<br />
								当店の並びにコインパーキングあり
								<br />
								<Link href=''>Googleマップはこちら</Link>
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>気になる料金は？キャッシュレス対応</H2>
						<Contents>
							<Typography variant='body1'>
								サウナのご利用料金はご予約時にクレジットカードで決済
								<br />
								当日利用分は各種キャッシュレス対応になります。（paypay不可）
								<br />
								もちろん現金も可です。
								<br />
								<br />
								料金は下記になります。
								<br />
								<br />
								フタリサウナ(120分)
								<br />
								1名様 4,800-
								<br />
								2名様 9,000-
								<br />
								<br />
								イロリサウナ(120分)
								<br />
								2名様 12,000-
								<br />
								3名様 17,100-
								<br />
								4名様 22,000-
								<br />
								5名様 26,000-
								<br />
								6名様 30,000-
								<br />
								<br />
								ご利用時に次回予約で割引キャンペーン実施中。
								<br />
								詳細はお問い合わせください。
								<br />
								<br />
							</Typography>
							<Typography variant='body1'>
								ドリンク
								<br />
								<br />
								ペットボトル・ビンでご提供
								<br />
								ミネラルウォーター 150
								<br />
								オロナミンC 200
								<br />
								<br />
								グラスでご提供
								<br />
								イオンウォーター 300
								<br />
								ポカリスエット 300
								<br />
								シャリシャリオロポ 500
								<br />
								<br />
							</Typography>
							<Typography variant='body1'>
								レンタル
								<br />
								<br />
								水着（男性用） 500
								<br />
								フェイスタオル 400
								<br />
								バスタオル 800
								<br />
								2点セット（フェイスタオル＋バスタオル） 1000
								<br />
								サウナハット 500
								<br />
								ポンチョ 800
								<br />
								<br />
							</Typography>{' '}
							<Typography variant='body1'>
								ロウリュ用アロマ
								<br />
								<br />
								各種 300
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>アメニティやレンタルできるサウナグッズは？</H2>
						<Contents>
							<Typography variant='body1'>
								腕時計
								<br />
								サウナ室に砂時計がないので、腕時計をタイマー代わりにどうぞ。
								<br />
								サウナ室も水風呂もつけたままで大丈夫です。
								<br />
								<br />
								ボディソープ、シャンプー、コンディショナー
								<br />
								シャワー室に備え付けてあります。
								<br />
								<br />
								綿棒
								<br />
								脱衣所にございます。
								<br />
								<br />
								ドライヤー
								<br />
								SALONIAです。風量が心配な方ご安心を。
								<br />
								<br />
								化粧水、乳液、クレンジング
								<br />
								無印です。
								<br />
							</Typography>
						</Contents>
					</WrapH2>
				</Box>
			</Container>
		</ThemeProvider>
		<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
			<Footer />
		</Box>
	</React.StrictMode>
)
