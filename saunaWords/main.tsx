import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'

import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme'

import Link from '@mui/material/Link'
import { Box, Typography, Container } from '@mui/material'
import Grid from '@mui/material/Grid'

import Header2 from '../src/Header2'
import Footer from '../src/Footer'
import H1 from '../src/H1'
import H2 from '../src/H2'
import MyImg from '../src/MyImg'
import WrapH2 from '../src/WrapH2'

ReactDOM.createRoot(document.getElementById('saunaWords')!).render(
	<React.StrictMode>
		<Box sx={{ position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
			<Header2 />
		</Box>
		<ThemeProvider theme={theme}>
			<Container sx={{ mt: '60px', mb: '70px', color: '#FFF', p: 2 }}>
				<Box>
					<H1>サウナ用語集を貸切サウナととのうとの店主がまとめました。</H1>
					<Typography variant='body1'>最終更新日:2024年07月14日</Typography>
					<br />
					<Typography variant='body1'>
						ととのうとの店主がサウナに関連する用語を紹介・解説します。
						<br />
						初心者からベテランの方までいまさら聞けないサウナ用語をチェック！
					</Typography>
				</Box>
				<Box sx={{ px: 2 }}>
					<Grid container spacing={4}>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナ</H2>
								<Box>
									<Typography variant='body1'>
										高温の部屋に入って、体を温め発汗する温浴方法.発祥はフィンランド
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナストーブ</H2>
								<Box>
									<Typography variant='body1'>
										サウナ室を温めるストーブ。貸切サウナととのうとのサウナストーブは電気式です。他にも薪、ガスなどを熱源とするものもあります。フィンランドにはオイル式もありました。
									</Typography>
								</Box>

								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari.jpeg?alt=media&token=3968d423-4f60-4dbe-a688-3214f2262d7b'
									alt='貸切サウナととのうとのサウナストーブ'
								/>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナストーン</H2>
								<Box>
									<Typography variant='body1'>
										サウナストーブの上で熱した石。サウナストーンにはサウナ室の温度を保つ効果があります。大きい石ほど熱しにくく冷めにくい。熱した石からの輻射熱、、、気持ち良いですよね。また、サウナストーンはロウリュにも利用されます。ロウリュの際は水をかけ過ぎないでください。サウナ室の温度が下がるだけでなく、ストーブの故障にもつながります。
									</Typography>
								</Box>

								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori2.jpeg?alt=media&token=44376ac3-aa29-40b1-99d4-66afaabc395d'
									alt='貸切サウナととのうとのサウナストーン'
								/>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ロウリュ</H2>
								<Box>
									<Typography variant='body1'>
										熱したサウナストーンに水をかけることで発生する蒸気を楽しむこと。体感温度がグッと上がり発汗を促します日本では熱波を送るサービスのことを指すこともありますね。フィンランドのおじいさんに教えてもらったロウリュの極意では、体感温度の上昇と下降の波を楽しむのだとか。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>セルフロウリュ</H2>
								<Box>
									<Typography variant='body1'>
										自分でサウナストーンに水などをかけて蒸気を発生させること。貸切サウナととのうとではセルフロウリュが楽しめます！オプションでロウリュ用のアロマをご用意しております水をかけ過ぎないでください。サウナ室の温度が下がるだけでなく、ストーブの故障にもつながります。一度水をかけたら少し時間を空けてくださいね。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>アウフグース</H2>
								<Box>
									<Typography variant='body1'>
										ロウリュで発生させた蒸気を、タオルなどを使いサウナ室中に蒸気を広げ、一人一人に向かってあおぐサービス。熱いのがお好きな方におすすめ。発祥はドイツ。店主はドイツには行ったことがないです。ドイツ行ったことあるよって方お話し聞かせてください
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>熱波</H2>
								<Box>
									<Typography variant='body1'>アウフグースの意味</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>休憩</H2>
								<Box>
									<Typography variant='body1'>
										サウナや水風呂の後に座ったり寝転がったりしながら身体を休めること。体の水気を拭いてから休憩するのがおすすめ。貸切サウナととのうとでは外気浴をお勧めしています。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>外気浴</H2>
								<Box>
									<Typography variant='body1'>
										外で休憩すること。外の景色や風を楽しむことができる。貸切サウナととのうとでは外気浴を楽しむ場所としてお庭をご用意しております。通称だるまの庭。植物たちを眺めながら風にあたると格別です。椅子に座ったり、レンガに寝転んだり各々のやり方でお楽しみください。ととのうとのお庭を作った人：だるまと店主とその仲間たち
									</Typography>
								</Box>

								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma.jpeg?alt=media&token=3f53663c-505d-49e7-99f7-a0279a6d723e'
									alt='貸切サウナととのうとの外気浴場'
								/>

								<Link href='https://www.instagram.com/daruma.244/'>
									ニワダルマ
								</Link>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>水風呂</H2>
								<Box>
									<Typography variant='body1'>
										水のお風呂。銭湯とかだと18度くらいが多い。貸切サウナととのうとでも水風呂をお楽しみいただけます。水風呂に入る前には必ずシャワー等で汗を流しましょう。フィンランドの水風呂はほとんどが湖でした。カモとおじいさんいっしょに泳いでいました。冬場は表面が凍っています。
									</Typography>
								</Box>

								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari2.jpeg?alt=media&token=40a51b52-b757-4e8f-91a0-6d72a4d357a1'
									alt='貸切サウナととのうとの水風呂'
								/>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>アヴァント</H2>
								<Box>
									<Typography variant='body1'>
										凍った湖に開けた穴。冬のフィンランドではアヴァントでアイススイミングを楽しんだりします。店主もやってきました。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>チラー</H2>
								<Box>
									<Typography variant='body1'>
										水を冷やすための冷却装置。貸切サウナととのうとでは2024年夏導入予定です。フィンランドではチラーなしでも十分冷たい水に入れます。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>シングル（グルシン）</H2>
								<Box>
									<Typography variant='body1'>
										10度未満の水風呂のこと。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>汗流しカットマン</H2>
								<Box>
									<Typography variant='body1'>
										サウナ室でかいた汗を水などで流さずにそのまま水風呂に入る人。マナー違反です。絶対にやめてください。施設のルールやマナーはきちんと守りましょう。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>下茹で</H2>
								<Box>
									<Typography variant='body1'>
										サウナに入る前にお湯につかって体を温めること
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ととのう</H2>
								<Box>
									<Typography variant='body1'>
										サウナ、水風呂、休憩を繰り返すことでその域に到達するとされている状態。整うと感じで書く人もいます。温冷交代浴により「β-エンドルフィン」「オキシトシン」「セロトニン」の3つの物質が脳内で分泌され、ストレス緩和や鬱症状の改善、精神の安定に効果があるとか。百聞は一見にしかず。ご来店お待ちしております。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ととのい椅子</H2>
								<Box>
									<Typography variant='body1'>
										休憩をするときに座る椅子。プラスチック製のものが多い。リクライニングタイプや、ベンチタイプなど種類は様々。貸切サウナととのうとではリクライニングタイプのととのい椅子や、レンガに寝転ぶなど自分なりの楽しみ方でお過ごしください。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>あまみ</H2>
								<Box>
									<Typography variant='body1'>
										サウナと水風呂を楽しんでいる時に、皮膚に赤いまだら模様が現れたことないですか？それ、あまみです。
										血行が良くなっている証拠だとか。怖がらなくて良いみたい。語源は何なんでしょうか？
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>イオンウォーター</H2>
								<Box>
									<Typography variant='body1'>
										休憩の時に飲むと美味しい。サウナーの定番ドリンク。貸切サウナととのうとでは、グラスで提供しております。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>オロポ</H2>
								<Box>
									<Typography variant='body1'>
										オロナミンCとポカリスエットを混ぜた飲み物。これまたサウナーの定番ドリンク。貸切サウナととのうとでは、グラスで提供しております。
										オロポカと呼ばれることもあるらしい
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>シャリシャリオロポ</H2>
								<Box>
									<Typography variant='body1'>
										貸切サウナととのうと店主が考案した新オロポ。凍らせたポカリスエットをかき氷にして、オロナミンCをかける。最高。サウナライフしょーへいさんとの会話中に思いついた。
									</Typography>
								</Box>

								<Link href='https://neverjp.com/'>しょーへいさんの会社</Link>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ヴィヒタ</H2>
								<Box>
									<Typography variant='body1'>
										白樺の枝葉を束ねたもの。フィンランドではこれで身体を叩いたりする。血行促進や殺菌効果があるとかないとか。フィンランドの山奥で使った時は気持ちよかったなぁ。。。良い香りがするんですよね。貸切サウナととのうとではヴィヒタは使用できませんのでご注意ください。配管が詰まります。絶対にやめてください。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ウィスキング</H2>
								<Box>
									<Typography variant='body1'>
										ヴィヒタで身体を叩いたりしながらマッサージを楽しむサービス。白樺の良い香りと共にリラックスできるとか。店主はウィスキングやったことないです。感想お待ちしております。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>温度の羽衣</H2>
								<Box>
									<Typography variant='body1'>
										水風呂に入ってしばらくジッとしてると、冷たさを感じにくくなります。それ、温度の羽衣です。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>公衆浴場</H2>
								<Box>
									<Typography variant='body1'>
										一般的な入浴施設のこと。
										普通公衆浴場その他公衆浴場があります。貸切サウナととのうとはその他公衆浴場の営業許可を取得しています。保健所の指導のもと運営しておりますので安心してご利用ください。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナー</H2>
								<Box>
									<Typography variant='body1'>サウナ愛好家のこと。</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サ活</H2>
								<Box>
									<Typography variant='body1'>
										サウナ活動の略。サウナライフやサウナイキタイに活動の記録を投稿しよう。
									</Typography>
								</Box>
								<Link href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%A9%E3%82%A4%E3%83%95-%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%9E%E3%83%83%E3%83%97%E3%81%A7%E3%82%B5%E3%82%A6%E3%83%8A%E3%81%8C%E3%81%99%E3%81%90%E3%81%AB%E8%A6%8B%E3%81%A4%E3%81%8B%E3%82%8B/id1560767089'>
									サウナライフ -サウナマップでサウナがすぐに見つかる App Store
								</Link>
								<Link href='https://play.google.com/store/apps/details?id=app.product.saunadaisuki&hl=ja&gl=US'>
									サウナライフ – サウナマップでサウナがすぐに見つかるアプリ –
									Google Play のアプリ
								</Link>
								<Link href='https://sauna-ikitai.com/saunas/11891'>
									サウナイキタイ
								</Link>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナマット</H2>
								<Box>
									<Typography variant='body1'>
										サウナ室でベンチに座る際にお尻の下に敷くもの。タオルやビート板などが一般的。貸切サウナととのうとでは小さなすのこをマットがわりにご利用いただけます。フタリサウナのサウナマットは背もたれにちょうどハマるとか、お試しあれ。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナハット</H2>
								<Box>
									<Typography variant='body1'>
										サウナで頭を熱からまもる帽子。髪の毛が痛みにくくなったり、のぼせにくくなったりします。貸切サウナととのうとではサウナハットのレンタルがございます。ぜひご利用ください。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナ飯</H2>
								<Box>
									<Typography variant='body1'>
										サウナのあとにとる食事。サ飯と略されることもあります。貸切サウナととのうとの近隣のサウナ飯については店主にお問合せください。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>スモークサウナ</H2>
								<Box>
									<Typography variant='body1'>
										サウナ室の中で薪を燃やしてサウナストーンを温める。サウナ室に煙が充満するがサウナ室が十分に温まったあと煙を排出する。フィンランドで体験しました。激熱でした。やんちゃなおじいさんのロウリュが過激。日本では岡山県の久米屋さんで体験できます。ととのうとを作る時にサウナのことを色々と教えていただきました。施設の方も良い方ばかりでイチオシです。
									</Typography>
								</Box>
								<Link href='https://nakaute.com/'>久米屋</Link>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>テントサウナ</H2>
								<Box>
									<Typography variant='body1'>
										テント内をストーブで温めて入るサウナ。テント内でストーブを使う際は火災と一酸化炭素中毒に気をつけてくださいね。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>トントゥ</H2>
								<Box>
									<Typography variant='body1'>
										小さい妖精。北欧の森やサウナなどに住んでいるらしい。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>バイブラ</H2>
								<Box>
									<Typography variant='body1'>
										下から泡がぶくぶく出てくるお風呂のこと。血行促進によいとか、水が拡散されて良いとか、、、
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ドライサウナ</H2>
								<Box>
									<Typography variant='body1'>
										高温で湿度が低い乾燥したタイプのサウナ室。乾燥肌の人は少し肌を濡らして入ってくださいね。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>フィンランド式サウナ</H2>
								<Box>
									<Typography variant='body1'>
										フィンランドで主流のサウナ。セルフロウリュできることが特徴。ドライサウナと同じくらいか少し低い温度帯。フィンランドには多種多様なサウナがあったので定義が曖昧な感じになってます。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>塩サウナ</H2>
								<Box>
									<Typography variant='body1'>
										体に塩を塗りながら楽しむサウナ。温度が比較的低いのが特徴。擦ると肌に良くないので注意。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>バーニャ</H2>
								<Box>
									<Typography variant='body1'>
										ロシア式サウナ。店主は入ったことないです。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ハマーム</H2>
								<Box>
									<Typography variant='body1'>
										東アジア浴場。綺麗な内観のものが多いですね。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ホームサウナ</H2>
								<Box>
									<Typography variant='body1'>
										お気に入りサウナ施設のこと。店主のホームサウナはヘルシーバスニュー栄です。
									</Typography>
								</Box>
								<Link href='https://newsakae.com/'>ヘルシーバスニュー栄</Link>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ラドル</H2>
								<Box>
									<Typography variant='body1'>
										ロウリュで水をかけるのに使われる柄杓。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナバケツ</H2>
								<Box>
									<Typography variant='body1'>
										サウナで使うバケツ。フィンランド語でキウルと言う。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>主（ぬし）</H2>
								<Box>
									<Typography variant='body1'>
										銭湯やサウナ施設の常連さんのこと。場所取りなどの自分勝手な行動をとる人に対して使われることが多い。マナーや施設が決めたルールを守りましょう。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>清める</H2>
								<Box>
									<Typography variant='body1'>
										サウナに入る前に頭や体を洗うこと。サウナ室に汚れを持ち込まないだけでなく、発汗しやすくなるとも言われています。体を清めてからサウナに入りましょう。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サ旅</H2>
								<Box>
									<Typography variant='body1'>
										サウナを主目的とした旅行。サウナ旅の略。
									</Typography>
								</Box>
								<Link href='https://totonouto.com/article7/'>
									サウナの本場北欧へ、店主のフィンランドサウナ旅。2019.09の旅行記
								</Link>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナの日</H2>
								<Box>
									<Typography variant='body1'>
										3月7日はサウナの日。施設によってはお得なサービスがあるかも。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>ペンギンルーム</H2>
								<Box>
									<Typography variant='body1'>
										クールダウン用のキンキンに冷えた部屋。アイスサウナとも言われる。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>アカスリ</H2>
								<Box>
									<Typography variant='body1'>
										アカスリ用の手袋で体を擦り。体の垢を落としてくれるサービス。古い角質を取り除きお肌がツルツルになるとか。
									</Typography>
								</Box>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナライフ</H2>
								<Box>
									<Typography variant='body1'>
										サウナライフは、近くのサウナをマップでカンタンに検索できるサウナアプリです。
									</Typography>
								</Box>
								<Link href='https://apps.apple.com/jp/app/%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%A9%E3%82%A4%E3%83%95-%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%9E%E3%83%83%E3%83%97%E3%81%A7%E3%82%B5%E3%82%A6%E3%83%8A%E3%81%8C%E3%81%99%E3%81%90%E3%81%AB%E8%A6%8B%E3%81%A4%E3%81%8B%E3%82%8B/id1560767089'>
									サウナライフ -サウナマップでサウナがすぐに見つかる App Store
								</Link>
								<br />
								<br />
								<Link href='https://play.google.com/store/apps/details?id=app.product.saunadaisuki&hl=ja&gl=US'>
									サウナライフ – サウナマップでサウナがすぐに見つかるアプリ –
									Google Play のアプリ
								</Link>
							</WrapH2>
						</Grid>
						<Grid xs={12} md={6} lg={4}>
							<WrapH2>
								<H2>サウナイキタイ</H2>
								<Box>
									<Typography variant='body1'>
										サウナの検索サイト。サウナ施設の詳細やサウナー達のサ活が投稿されています。
									</Typography>
								</Box>
								<Link href='https://sauna-ikitai.com/saunas/11891'>
									サウナイキタイ
								</Link>
							</WrapH2>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ mt: 8 }}>
					<Typography variant='body2'>
						今回ご紹介したもの以外にも載せて欲しい言葉や誤りあれば店主まで。
					</Typography>
					<Typography variant='body2'>
						サウナタイム様の記事を参考にさせていただきました。
					</Typography>
					<Link href='https://saunatime.jp/sauna-wiki/'>
						これで全てがわかる！サウナ用語集【サウナWiki】
					</Link>
				</Box>
				<Box sx={{ mt: 2, mb: 15, mx: 5 }}>
					<Link href='https://totonouto.com'>お店のwebページもみてね。</Link>
				</Box>
			</Container>
		</ThemeProvider>
		<Box sx={{ position: 'fixed', bottom: 0, zIndex: 1000, width: '100%' }}>
			<Footer />
		</Box>
	</React.StrictMode>
)
