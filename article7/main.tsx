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

ReactDOM.createRoot(document.getElementById('article7')!).render(
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
						サウナの本場北欧へ、店主のフィンランドサウナ旅。2019.09の旅行記
					</H1>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-1.jpeg?alt=media&token=c7832c97-46b7-4c39-9ce8-e981e5735066'
						alt='フィンランドの湖'
					/>
					<Box sx={{ mt: 2 }}>
						<Typography variant='body1'>
							フィンランド旅行を決意した動機はこちらの記事をチェック
							<br />
							<br />
						</Typography>
						<Link href='https://totonouto.com/article2/'>
							店主がお店を始めた理由をちょっぴり語ります。
						</Link>
						<br />
						<br />
						<Link href='https://totonouto.com/article1/'>
							貸切サウナととのうとのことをもっと知りたい方はこちらの記事をチェック。
						</Link>
						<br />
						<br />
						<Link href='https://totonouto.com/'>店舗情報などはこちら。</Link>
						<br />
						<br />
						<Link href='https://totonouto.com/article5/'>
							予約方法こちらでご紹介しております。
						</Link>
						<br />
						<br />

						<Typography variant='body1'>
							2023年のフィンランドサウナ旅のお話はまたの機会に。
						</Typography>
					</Box>

					<WrapH2>
						<H2>出発/大阪からフィンランドへ</H2>
						<Contents>
							<Typography variant='body1'>
								2019年9月私はサウナの本場北欧、フィンランドへ飛んだ
								<br />
								準備はほとんどしませんでした。
								<br />
								2週間後に出発する飛行機と初日の宿泊先だけを予約して出発。
								<br />
								滞在は8日間ほど。行き当たりばったりの旅を楽しむ。
								<br />
								<br />
								学生時代に学会発表でヨーロッパに行った際のメモを見ながら荷造りをしました。
								<br />
								<br />
								私のメモは参考にならないので、
								<br />
							</Typography>
							<Box sx={{ mt: 2 }}>
								<Link href='https://note.com/snow_panda/n/n35afd38284d2'>
									こちらを参考にしてください。
								</Link>
								<br />
								<br />
							</Box>
							<Typography variant='body1'>
								海外旅行の経験は何度かあったけど、一人で海外へ行くのは初めてで不安とワクワクが入り混じったなんとも言えない気持ちで飛行機に乗りました。
								<br />
								<br />
								夜中に関空を出発し、ヘルシンキには早朝に到着しました。
								<br />
								フィンエアーで関空からヘルシンキまで直行便でした。
								<br />
								着陸後は人の流れに身を任せて進めばOKです。笑
								<br />
								<br />
								入国審査では、慣れない英語でいくつかの質問に答えました。
								<br />
								<br />
								・whyだけ聞き取れたので、小さな声でsaunaと言いました。
								<br />
								・whereと聞こえたので、ヘルシンキ、ロウリュと言いました。お兄さんが笑顔になりました。笑
								<br />
								・hotelと聞こえたので、たまたま印刷して持っていた宿の予約情報をみせました。
								<br />
								結構簡単に入国できました。
								<br />
								<br />
								※ロウリュ：ヘルシンキで人気のサウナ施設。
								<br />
								有名なのかすぐに伝わりました。（結局行ってません。嘘つきました。お兄さんごめんなさい。）
								<br />
								<br />
								空港からヘルシンキの市街地へは電車を利用しました。
								<br />
								チケットの買い方がわからん。。。
								<br />
								<br />
								当然、旅行鞄を持った人ばかりで、
								<br />
								誰に質問すれば良いかわかりません。
								<br />
								<br />
								ということで券売機のナナメ後ろにスタンバイ。
								<br />
								スマホを見てるふりをしながら、覗き見です。
								<br />
								<br />
							</Typography>
							<Box sx={{ mt: 2 }}>
								<Link href='https://taka-trip.com/helsinki-train-tickets/'>
									この記事、わかりやすいです。当時はこんなの見つけられなかったぜ。。。
								</Link>
								<br />
								<br />
							</Box>
							<Box sx={{ mt: 2 }}>
								<Link href='https://finland-shiori.com/hsl-app/#google_vignette'>
									今はアプリでチケットが買えるらしい。
								</Link>
								<br />
								<br />
							</Box>
							<Typography variant='body2'>
								無事にヘルシンキの市街地に到着した時の写真。
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-2.jpeg?alt=media&token=98dfc54d-2c41-4b49-9ab6-44c1ddc034f5'
								alt='無事にヘルシンキの市街地に到着した時の写真。'
							/>
							<Typography variant='body2'>
								<br />
								早朝に到着したため、宿にチェックインできず。
								<br />
								大きなカバンを引っ提げて街を徘徊しました。
								<br />
								<br />
								鳩を見つけました。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-3.jpeg?alt=media&token=f4215c8d-79c8-4290-895d-db29c68bd97e'
								alt='フィンランドのはと'
							/>
							<Typography variant='body1'>
								<br />
								カフェでコーヒーを買って
								<br />
								<br />
								公園でベンチに座ってチェックイン時間をまつ。
								<br />
								<br />
								なんでもフィンランドはコーヒーの消費量が世界一だとか
								<br />
								<br />
								宿は基本的に民泊。
								<br />
								<br />
								Airbnbで翌日のやどを探す。
								<br />
								<br />
								おすすめの場所やサウナ施設の情報をホストに聞いておくのが大事なポイント
								<br />
								<br />
								チェックイン後の過ごし方はとってもシンプル
								<br />
								<br />
								観光には目もくれず
								<br />
								<br />
								サウナ→買い出し→食事→散歩→サウナ
								<br />
								<br />
								これの繰り返し。
								<br />
								<br />
								散歩しすぎて公衆トイレの場所までしっかり覚えました。
								<br />
								<br />
								ムーミンのお店とかマリメッコとかあるみたい。
								<br />
								船でエストニアとかアイスランドにも行けるとか。
								<br />
								<br />
								散歩しながら写真を取りました。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-4.jpeg?alt=media&token=03ba440c-fe43-49c0-a1af-2eeaa2a21823'
								alt='ヘルシンキの街並み'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-5.jpeg?alt=media&token=8627a0ef-4e38-48d8-99fa-b15bcc01b9b3'
								alt='ヘルシンキの街並み2'
							/>
							<Typography variant='body1'>
								ヘルシンキは一旦おしまい。
								<br />
								<br />
								フィンランドのおすすめサウナ施設の紹介はまたの機会に
								<br />
								<br />
								海ダイブとか、スモークサウナとか、、、
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>次の行き先はクーサモ</H2>
						<Contents>
							<Typography variant='body1'>
								首都ヘルシンキはフィンランドの南に位置する都市。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-6.jpeg?alt=media&token=5a9510f6-e43b-4ed3-bd37-a7854db58d7a'
								alt='ヘルシンキ'
							/>
							<Typography variant='body1'>
								<br />
								もう少し北に行きたいと思って、飛行機を予約しました。
								<br />
								<br />
								行き先はクーサモ！
								<br />
								私が行ったのは秋ですが、冬になるとオーロラがみれるらしい。
								<br />
								<br />
								ここです。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-7.jpeg?alt=media&token=3a0dd2a4-fc36-447d-b0b2-c0476c5cd18a'
								alt='クーサモ'
							/>
							<Typography variant='body1'>
								<br />
								民泊のホスト（父）に空港まで迎えに来てもらいました。
								<br />
								<br />
								車がないとどこにも行けないんです。
								<br />
								<br />
								お家までの車の中ではカタコトの英語で話をしてましたが、
								<br />
								超絶人見知りな私にはなんとも気まずい。笑
								<br />
								先が思いやられます。
								<br />
								<br />
								到着したお家がこちら。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-8.jpeg?alt=media&token=52c39030-a20f-497a-8ecc-83d859fb9f0c'
								alt='クーサモの民泊'
							/>
							<Typography variant='body1'>
								すぐ隣の土地に停まってた？車の写真です。
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-9.jpeg?alt=media&token=06fd432b-1019-4521-b314-72c2bf78f9eb'
								alt='クーサモの車'
							/>
							<Typography variant='body1'>
								<br />
								家の周りは森。
								<br />
								背の高い木々に囲まれた大自然。
								<br />
								夕方までなにもすることがない。。。
								<br />
								旅の疲れが溜まっていたので、しっかり昼寝しました。
								<br />
								<br />
								夕方からはホスト（祖父）が作ったサウナ小屋でサウナを満喫。
								<br />
								いっぱい汗をかいて最高の気分。
								<br />
								手作りのヴィヒタも使わせてもらいました。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-10.jpeg?alt=media&token=a6d2889a-142e-40af-909c-76fdc053d516'
								alt='クーサモのサウナ'
							/>
							<Typography variant='body1'>
								<br />
								<br />
								暖炉で焼いてもらったソーセージがこれまた絶品。
								<br />
								定番？のサウナドリンクまでいただきました。
								<br />
								正体は不明です。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-11.jpeg?alt=media&token=f27ce4db-40d0-4bd0-a3be-9fcf79402251'
								alt='サウナドリンク'
							/>
							<Typography variant='body1'>
								<br />
								<br />
								そうこうしてるうちに暗くなったので晩御飯。
								<br />
								料理の写真はないですが完全におうちご飯でした。
								<br />
								<br />
								晩酌はこれ。コスケンコルヴァ！
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-12.jpeg?alt=media&token=447f89d1-1387-4f18-8ef9-5b2af3ae390f'
								alt='コスケンコルヴァ'
							/>
							<Typography variant='body1'>
								<br />
								帰宅、そしておやすみなさい。。。
								<br />
								クーサモ1日目はこれでおしまい。
								<br />
								<br />
								翌朝。
								<br />
								やっぱり何もすることがない。。。笑
								<br />
								<br />
								家の前でボケっとしてると。
								<br />
								<br />
								ホスト（母）が「犬の散歩、一緒に行くかい？」
								<br />
								と多分そう言ってるであろう感じで声をかけてくれたので、
								<br />
								ついていきました。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-13.jpeg?alt=media&token=79dbc9ee-5d40-422c-aa81-623ea89cf932'
								alt='ネロ君'
							/>
							<Typography variant='body1'>
								<br />
								<br />
								ネロ君です。
								<br />
								超人見知りらしいですが、なぜか懐きました。ホストもびっくり。
								<br />
								戌年だからでしょうか。
								<br />
								<br />
								午後もやることがない。。。
								<br />
								見かねたホスト（母）がお子さんの小学校に連れて行ってくれました。
								<br />
								我ながらよく聞き取れたなと思います。
								<br />
								<br />
								フィンランドの小学校はいつでも参観できるらしいです。
								<br />
								<br />
								子どもたちがバランスボールに座って授業を受けていたり、
								<br />
								先生が授業をストップ。
								<br />
								日本のこと教えて欲しいと質問ラッシュにあいました。
								<br />
								給食がバイキングで食べ放題だったり、（お腹いっぱいいただきました。）
								<br />
								衝撃的な体験でした。
								<br />
								<br />
								そして夕方
								<br />
								スコップを持ったホスト（父）。
								<br />
								フィッシング！と言っている。
								<br />
								<br />
								よくわからんけど、ついて行った。
								<br />
								<br />
								湖についた。
								<br />
								<br />
								どうやら、スコップでミミズをとるらしい。
								<br />
								<br />
								ネロ君と一緒にボートに乗ってレッツ、フィッシング！
								<br />
								ネロ君が魚に反応して吠えるのでボウズです。
								<br />
								<br />
								みんなでケタケタ笑って楽しかった。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-14.jpeg?alt=media&token=289c667c-23db-4a52-a54f-927ee1c30961'
								alt='釣り船'
							/>
							<Typography variant='body1'>
								<br />
								<br />
								晩御飯はフィンランドの家庭料理をお願いしていました。
								<br />
								<br />
								はじめてのトナカイ肉。サーモンスープとマッシュポテトと共に。
								<br />
								<br />
								馬肉や鹿肉と同じような感じ。
								<br />
								<br />
								<br />
								その夜、トラブル発生。。
								<br />
								<br />
								翌日の宿が突然キャンセルされました。笑
								<br />
								スモークサウナに入れるとのことで楽しみにしていたのですが。。。
								<br />
								<br />
								パニックになった私はホストに相談。
								<br />
								<br />
								一緒に宿探し。笑
								<br />
								なんと良い方々。
								<br />
								命の恩人。
								<br />
								<br />
								なんとか見つかって、一件落着。
								<br />
								<br />
								のはずが、
								<br />
								<br />
								宿泊代の現金が足りず、カードは使えないとのこと。。。
								<br />
								<br />
								ATMまで送迎してもらいました。
								<br />
								<br />
								使い方がわからん。。。
								<br />
								<br />
								カードを差して、ぽちぽちしてるとお金が出てきました。笑
								<br />
								<br />
								<br />
								翌朝はホスト（母）と森でベリーを摘んで、ヨーグルトに乗せて食べました。
								<br />
								<br />
								最後にホストと熱いハグをかわして、次の宿へと送迎してもらいました。
								<br />
								<br />
								次の宿ではコテージ
								<br />
								とってもコテージに一人で滞在。。。
								<br />
								<br />
								まずはサウナを楽しむ。
								<br />
								<br />
								いっぱい汗をかいて、湖畔でまったり
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-15.jpeg?alt=media&token=2e38ddb2-0d9c-4734-89c4-68862de0c570'
								alt='コテージ'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-16.jpeg?alt=media&token=0a196bd2-cd56-4519-ab29-3c0a350ae22f'
								alt='サウナ'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-17.jpeg?alt=media&token=e310a6d6-d595-4333-b3c2-642480ba9212'
								alt='湖畔'
							/>
							<Typography variant='body1'>
								<br />
								<br />
								食事はBBQ
								<br />
								ビールを冷やして、薪を自分で割って、火をつけて、アウトドアが好きな店主にはたまらん時間でした。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-18.jpeg?alt=media&token=d4c7e34c-d61a-425b-997e-1ff82c451029'
								alt='薪'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-19.jpeg?alt=media&token=b2bc5445-dcdb-4f7f-baf5-c0f7aabe3c3d'
								alt='BBQ'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-20.jpeg?alt=media&token=a19c443d-deea-4724-b161-dbb89115d36e'
								alt='湖'
							/>
							<Typography variant='body1'>
								<br />
								<br />
								クーサモでは現地の方の日常をそのまま体験させてもらいました。
								<br />
								<br />
								とっても貴重な体験。
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>ヘルシンキに戻ってきた</H2>
						<Contents>
							<Typography>
								<br />
								その後はヘルシンキに戻って、サウナと食事のループ。
								<br />
								<br />
								とあるサウナで、
								<br />
								そろそろ日本に帰りたいなー。なんて考えてると、
								<br />
								<br />
								ん？日本人！？
								<br />
								<br />
								日本から来られた方（Oさん）がいらっしゃいました。
								<br />
								お互いホッとしたのか、サウナに入りながらお話し。
								<br />
								日本に帰ったらサウナを作りたいんだとかなんとか話してるとすっかり仲良しに。
								<br />
								<br />
								晩御飯をご一緒しました。
								<br />
								ピザとお酒を奢ってくださいました。ありがとうございます。。。
								<br />
								<br />
								Oさん：「それじゃあまた日本で会えると良いね！　あっ、ATMどこか知らない？」
								<br />
								<br />
								一緒に探しました。すぐに見つかりました。
								<br />
								<br />
								OさんはATMにクレジットカードを差し込みました。
								<br />
								<br />
								Oさん：「。。。」
								<br />
								<br />
								私：「。。。」
								<br />
								<br />
								カードが出てきません。
								<br />
								<br />
								お金もでてきません。
								<br />
								<br />笑
								<br />
								<br />
								OさんがATMに書いてあった番号にTEL
								<br />
								<br />
								なにやら揉めている様子。。。
								<br />
								<br />
								クレジットカードの挿入口と、キャッシュカードの挿入口がそれぞれあって、
								<br />
								違う方に挿し込むとカードが返ってこないらしい。
								<br />
								<br />
								どんな仕様やねん。笑
								<br />
								<br />
								取り出せるのは数日後になるとのことで、Oさんは自宅にTEL。
								<br />
								カードを止めて、ホテルへと返っていきましたとさ。
								<br />
								<br />
								良い思い出。
								<br />
								<br />
								クーサモのATM、、、危なかったな。笑
								<br />
								<br />
								翌日、お土産を買い漁って帰国
								<br />
								サウナ専門店もあるよ。
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle7%2Farticle7-21.jpeg?alt=media&token=fe716378-71ae-4274-bedc-f1c93ffda55b'
								alt='サウナハット'
							/>
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
