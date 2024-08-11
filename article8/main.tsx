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

ReactDOM.createRoot(document.getElementById('article8')!).render(
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
						フィンランドで有名なおすすめサウナ9選：ととのうと店主が実際に経験した究極のリラックス体験をご紹介
					</H1>
					<Typography variant='body1'>最終更新日:2024年08月11日</Typography>
					<MyImg
						src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FRajaportin3.jpeg?alt=media&token=aa8e8760-46d0-488d-8f99-33d798343ab8'
						alt='サウナ室'
					/>
					<Box sx={{ mt: 2 }}>
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
					</Box>

					<WrapH2>
						<H2>はじめに</H2>
						<Contents>
							<Typography variant='body1'>
								フィンランドといえば、サウナが有名ですよね。ヘルシンキをはじめとする都市には多くのサウナ施設があり、現地の人々や観光客にも人気です。フィンランドのサウナは、自然との調和が特徴で、バルト海や湖のほとり、森の中に位置するものも少なくありません。今回は、ヘルシンキ、タンペレ周辺の絶対に訪れるべき有名なおすすめサウナ施設をご紹介します。
								<br />
								貸切サウナととのうとでは店主がサウナの本場フィンランドで見たものを参考にDIYした本格的なフィンランド式サウナをご体験いただけます。
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>ヘルシンキ周辺</H2>
						<Contents>
							<H3>Allas Sea Pool（アッラス・シー・プール）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fallas2.jpeg?alt=media&token=40702ce8-b8e4-4fd2-a9fb-523b06d45465'
								alt='外観'
							/>
							<Typography variant='body1'>
								Allas Sea
								Poolはヘルシンキの人気サウナ施設で、地元の方だけでなく多くの観光客が訪れます。サウナの後のクールダウンに冷たい海水プールを利用することができ、デッキチェア等で外気浴するとリフレッシュ効果も抜群です。Allas
								Sea
								Poolの施設内には温水プールがありますので、冷たすぎる水に入るのが苦手な方でも大丈夫！
								<br />
								<br />
								水着が必要になりますので出発前に準備しておきましょう。
								フィンランドでは入浴時に水着とサンダルが必要な施設が多いです。レンタル可能なお店もあるみたいですが念のため事前に準備しておきましょう。
								<br />
								※海水温は季節によって異なります。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fallas1.jpeg?alt=media&token=4b0091bf-7dcc-4c76-bffb-36962aa2c84c'
								alt='サウナ室'
							/>
							<Typography variant='body1'>
								<br />
								また、Allas Sea
								Poolはヘルシンキの中心部に位置しており、アクセスも非常に便利です。
								観光の合間に立ち寄ることができ、サウナ体験と都市観光を両方楽しみたい日に便利。
								さらに、施設内にはカフェやレストランも併設されており、地元の食材を使った料理を楽しむことができます。フィンランドは世界で一番コーヒーを消費する国。フィンランド人になったような気分で本格的なコーヒーを楽しむのもおすすめの楽しみ方です。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fallas3.jpeg?alt=media&token=433aece4-b9b8-452f-9b34-ffe2d00eb2dd'
								alt='カフェエリア'
							/>
							<Typography variant='body1'>
								<br />
								ここのサウナのロッカーは少し特殊というか、日本でよくあるロッカーキーとは使い方が違います。
								<br />
								ロッカーのノブというか引き手がボタンになってます。
								<br />
								指で押してもダメです。
								<br />
								入場時に渡されるリストバンドが電子キーになっていて、この電子キーでボタンをおします。
								<br />
								私は初めて行った時、全く分からなくて着替え中のお兄さんに教えてもらいました。
								<br />
								ここは施設の方も利用者の方も英語が話せる方が多い印象です。
								<br />
								<br />
								結構お気に入りの施設で通算で5回くらいは行ってます。
								<br />
								<br />
								ヘルシンキマーケットスクエア（カウッパトリ）やオールドマーケットホールが近くにありますので、合わせてお買い物も楽しめます。
								<br />
								<br />
								また、すぐ近くからスオメンリンナ島行きのフェリーがでています。
								<br />
								ぜひ行ってみてください。
								<br />
								<br />
								周辺にレストランも多いですね。
								<br />
								<br />
								<br />
							</Typography>
							<Box sx={{ mt: 2 }}>
								<Link href='https://allasseapool.fi/'>Allas Sea Pool</Link>
								<br />
								<br />
								<Link href='https://gastrogrillmure.fi/'>
									近くのステーキやさん。サウナ飯にどうぞ。
								</Link>
								<br />
								<MyImg
									src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fallas4.jpeg?alt=media&token=7f8c87ac-febd-47ce-9129-f6f0a11f0226'
									alt='ステーキ'
								/>
								<br />
								<Link href='https://kiitos.shop/blog/archive/market-square-nordic-finland-helsinki-sightseeing-spot.html'>
									ヘルシンキマーケットスクエア（カウッパトリ）
								</Link>
								<br />
								<br />
								<Link href='https://vanhakauppahalli.fi/tarina/'>
									オールドマーケットホール
								</Link>
								<br />
								<br />
								<Link href='https://www.suomenlinna.fi/ja/'>
									スオメンリンナ島
								</Link>
								<br />

								<br />
							</Box>
						</Contents>
						<Contents>
							<H3>Kotiharjun Sauna（コティハルユ・サウナ）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKotiharjun1.jpeg?alt=media&token=123d6e19-bd38-47a9-a6a6-309b028c6d0f'
								alt='外観'
							/>
							<Typography>
								<br />
								Kotiharjun
								Saunaは歴史ある公衆サウナで、長年地元の人に愛され続けています。
								<br />
								昔ながらの伝統的なフィンランドサウナの雰囲気を体験することができますよ。
								<br />
								年季の入った木製のインテリアがしぶい。
								<br />
								<br />
								Kotiharjun
								Saunaの特徴は、伝統的な薪ストーブのサウナが体験できることです。
								<br />
								薪の香りと熱が広がるサウナ室は、最高のととのい体験を提供します。
								<br />
								また、地元の人々との交流の場としても機能しており、フィンランドのサウナ文化をより深く理解することができます。
								<br />
								水風呂はなくシャワーで汗を流してお店の前で外気浴。
								<br />
								<br />
							</Typography>

							<Typography>
								<br />
								私はここが一番好きで何度も通いました。何回行ったかわかりません。笑
								<br />
								地元のおじさんにチェスを挑まれたり、サウナの入り方を教えてもらったり、
								伝統的なサウナとともに地元の方との交流も楽しめます。
								<br />
								最上段がおすすめです。サウナ室に入ってすぐすのこが置いてありますので、手に取って階段を上がってください。
								<br />
								※ロウリュしたいときは声をかけましょう。
								<br />
								<br />
								サウナ後に食事とお酒を楽しむならharuju8がおすすめ。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKotiharjun3.jpeg?alt=media&token=06dd5e8e-1e7a-46b4-92f5-15d02c927fd7'
								alt='haruju8'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKotiharjun4.jpeg?alt=media&token=60027bd2-b704-4e13-8231-5328cb11d448'
								alt='サウナ飯'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKotiharjun5.jpeg?alt=media&token=6bea9c21-14f6-447c-8bf4-4892c4c1b0bb'
								alt='サウナ飯'
							/>
							<Box sx={{ mt: 2 }}>
								<Link href='https://www.kotiharjunsauna.fi/'>
									Kotiharujun Sauna
								</Link>
								<br />
								<br />
								<Link href='https://harju8.fi/'>haruju8</Link>
								<br />
								<br />
							</Box>
						</Contents>
						<Contents>
							<H3>uusiSauna（ウーシサウナ）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fuusi_sauna_3.jpeg?alt=media&token=0ce65869-7a3e-428e-a150-02f12e61c593'
								alt='外観'
							/>
							<Typography>
								<br />
								uusiSaunaは、ヘルシンキの中心部に位置するモダンなサウナ施設です。サウナ室は広く、最新の設備が整っており、快適なサウナ体験を楽しむことができます。
								<br />
								<br />
								水風呂がありました。フィンランドでは珍しいですね。
								<br />
								<br />
								uusiSaunaの施設内にはカフェもあり、サウナ後にビールでも飲みながらリラックスしてください。
								室内で内気浴を楽しんだり、中庭が外気浴スペースになっているので外に出て雪の中外気浴するのも良いですね。
								ヘルシンキで新しいサウナ体験を楽しみたい方には、ぜひ訪れていただきたい施設です。
								<br />
								<br />
								Tシャツが売っていたので買って帰りました。
								結構お気に入りでよく着ます。
								<br />
								<br />
							</Typography>

							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fuusi_sauna_5.jpeg?alt=media&token=2cb8e22c-6331-4896-9579-bb7310ff1bb2'
								alt='ロッカールーム'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fuusi_sauna_1.jpeg?alt=media&token=e65518df-ac98-4338-aea3-ade8e2bde4a6'
								alt='中庭'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fuusi_sauna_2.jpeg?alt=media&token=a6de421a-87b4-4b62-a577-bf6ed45e3121'
								alt='カフェ'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2Fuusi_sauna_4.jpeg?alt=media&token=04306542-eeea-47da-b53e-8090b91ecb52'
								alt='カフェ'
							/>
							<Box sx={{ mt: 2 }}>
								<Link href='https://www.uusisauna.fi/'>
									uusiSauna（ウーシサウナ）
								</Link>
								<br />
								<br />
							</Box>
						</Contents>
						<Contents>
							<H3>Kulttuurisauna Public Sauna（クルツトゥーリサウナ）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKulttuurisauna1.jpeg?alt=media&token=cbb20d1c-65f9-4334-a19b-ebc38b6e9850'
								alt='外観'
							/>
							<Typography>
								<br />
								Kulttuurisaunaは、ヘルシンキの公衆サウナで、現代的なデザインと伝統的なサウナ体験を融合させた施設です。このサウナは、地元の建築士が設計しており、洗練された雰囲気が魅力です。
								<br />
								<br />
								このサウナは燃料にペレットを使用しているのが特徴的。シンプルでありながらも美しい空間を楽しめます。また、施設内には落ち着いたラウンジスペースがあり、リラックスしながら現地の方と交流することができます。クールダウンにはアイススイミングと外気浴ができます。
								Kulttuurisaunaは、北欧の建築デザインなどちょっと変わった視点で楽しみたい方におすすめのスポットです。
								<br />
								<br />
								アイススイミングを楽しんでいたら、おじさんにサムズアップされました。
								<br />
								<br />
							</Typography>

							<Box sx={{ mt: 2 }}>
								<Link href='https://kulttuurisauna.fi/'>
									Kulttuurisauna Public Sauna（クルツトゥーリサウナ）
								</Link>
								<br />
								<br />
							</Box>
						</Contents>

						<Contents>
							<H3>
								Kuusijärvi Old Smoke
								Sauna（クーシヤルヴィ・オールド・スモーク・サウナ）
							</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuusija%CC%88rviSauna1.jpeg?alt=media&token=28f7c74d-7be3-4d84-abe9-c850bcba5fc9'
								alt='外観'
							/>
							<Typography>
								<br />
								Kuusijärvi Old Smoke
								Saunaは、伝統的なスモークサウナが楽しめる施設です。ヘルシンキから近く、自然に囲まれた湖のほとりにあります。湖でのクールダウンを体験できます。
								<br />
								<br />
								スモークサウナの独特の香りと温かみのある空間は、他のサウナでは味わえない特別な体験です。
								また、湖にすぐアクセスできるため、サウナ後には冷たい湖水でクールダウンできます。
								Kuusijärvi Old Smoke
								Saunaは、フィンランドの自然と伝統的なスモークサウナを満喫するのに最適な場所。
								<br />
								<br />
								スモークサウナは朝一番に熱々に温めて、煙を抜いてから入ります。
								オープン直後はかなり煙たく、かなーり熱いです。初心者の方はオープン直後は避けましょう。
								帰り道、ととのうと店主は背中がヒリヒリしてたとか。
								ロウリュする際はかなり少量の水で試してください。スプーンが大きいからか、想像以上に高音の蒸気が発生します。かなり長いラドルでなれるまでは制御が難しかも。現地の人たちは上手なロウリュの方法を知っています。よく観察しましょう。
								<br />
								<br />
								結構歩いた記憶があります。スモークサウナに入るならそれくらいはしょうがない。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuusija%CC%88rviSauna2.jpeg?alt=media&token=af7abdac-001e-4552-8353-2af2c39cc163'
								alt='サウナ室'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuusija%CC%88rviSauna4.jpeg?alt=media&token=fe527361-7b06-4e43-b94a-c9f0954e4b35'
								alt='サウナストーブ'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuusija%CC%88rviSauna3.jpeg?alt=media&token=6c99be07-8243-486c-9669-acebeb9c6a7c'
								alt='外'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuusija%CC%88rviSauna5.jpeg?alt=media&token=cb4311c2-86a1-4d19-b115-d74398862f03'
								alt='湖'
							/>
							<Box sx={{ mt: 2 }}>
								<Link href='https://www.cafekuusijarvi.fi/'>
									Kuusijärvi Old Smoke
									Sauna（クーシヤルヴィ・オールド・スモーク・サウナ）
								</Link>
								<br />
								<br />
							</Box>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>タンペレ周辺</H2>
						<Contents>
							<H3>Rajaportin Sauna（ラヤポルティン・サウナ）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FRajaportin1.jpeg?alt=media&token=ee1e2a18-8e11-4f25-96d9-3ecd16330e76'
								alt='外観'
							/>
							<Typography variant='body1'>
								<br />
								Rajaportin
								Saunaはタンペレにあり、フィンランド最古の公衆サウナとして知られています。歴史的な雰囲気を感じられるのが魅力的。薪ストーブサウナを体験するとともに地元の方との交流もでき、フィンランドのサウナ文化について深く知ることができます。
								<br />
								<br />
								Rajaportin
								Saunaは、1906年に開業され、以来多くの人々に愛され続けています。
								サウナ室の温度は高く、体を深く温めることができます。タンペレを訪れる際にはぜひ訪れてたいスポットです。
								<br />
								<br />
								サウナは今でもほとんど当時のままのつくりで、1トン以上のサウナストーンが乗った3立米もの石造りのサウナストーブがあり、1度薪をくべたら1日中あたたかいと言われています。
								<br />
								<br />
								ここのサウナの特徴は、はじめのうちは鋭く乾いたロウリュが、次第に柔らかで潤ったロウリュが噴き出てくること。
								<br />
								<br />
								サウナ室は男女別ですがサウナストーブ外気浴用の庭は男女共用です。
								<br />
								貴重品を受付にて預けられます。飲料を購入したり、タオルやマットのレンタルもできるとか。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FRajaportin3.jpeg?alt=media&token=aa8e8760-46d0-488d-8f99-33d798343ab8'
								alt='サウナ室'
							/>

							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FRajaportin2.jpeg?alt=media&token=580487b2-4ef0-43cf-b4d6-f0fade3106ee'
								alt='ロッカールーム'
							/>

							<Box sx={{ mt: 2 }}>
								<Link href='https://www.rajaportti.fi/index.ja.php'>
									Rajaportin Sauna（ラヤポルティン・サウナ）
								</Link>

								<br />

								<br />
							</Box>
						</Contents>
						<Contents>
							<H3>Suolijärvi sauna（スオリヤルヴィ・サウナ）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FSuolija%CC%88rvi1.jpeg?alt=media&token=6b91fff1-d507-4b12-913d-572493666757'
								alt='外観'
							/>
							<Typography>
								<br />
								Suolijärvi
								saunaは、タンペレにある施設です。湖のほとりにあり、フィンランドの自然を感じながらリラックスできるサウナ。
								<br />
								<br />
								Suolijärvi
								saunaのサウナは、ストーブに風車がついていたり、ベンチの背もたれに木を挟んで一段高いところに座れたりする独特な造りのサウナコテージでした。もちろん湖で泳げます。また、熱源は薪。お店の方が定期的にストーブに薪を追加してくれます。気さくな方で色々お話を聞かせていただき、フィンランドのサウナ文化をより理解することができます。
								<br />
								<br />
								フィンランドのサウナはサンダルが必要なところが多いですが、ここでは特に重要なポイント。
								ロッカーが少し離れていますので、冬場は雪の上を歩くことになります。
								<br />
								<br />
								私が行った時は予約が必要でした。事前に最新の情報を確認してください。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FSuolija%CC%88rvi2.jpeg?alt=media&token=07d00d79-7b98-4acf-a338-be09b904142d'
								alt='湖'
							/>
							<Box sx={{ mt: 2 }}>
								<Link href='https://juttusauna.fi/suolijarven-sauna/'>
									Suolijärvi sauna（スオリヤルヴィ・サウナ）
								</Link>
								<br />
								<br />
							</Box>
						</Contents>
						<Contents>
							<H3>Sauna Restaurant Kuuma（サウナ・レストラン・クーマ）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuuma1.jpeg?alt=media&token=10ef0dc2-1966-4995-8051-78b91c67f2c6'
								alt='サウナ室'
							/>
							<Typography>
								<br />
								Sauna Restaurant
								Kuumaは、タンペレにあるモダンなサウナ施設です。レストランとサウナが一体となっており、食事を楽しみながらサウナを満喫することができます。この施設は、地元の人々や観光客に人気で、特にサウナ後の食事が絶品です。
								<br />
								<br />
								Sauna Restaurant
								Kuumaの魅力は、美味しい食事とサウナ体験の融合です。地元の食材を使った料理は、サウナ後のリフレッシュに最適です。また、モダンなデザインのサウナ室は快適で、リラックス効果が高まります。ヘルシンキを訪れる際には、ぜひこのサウナレストランを体験してみてください。
								<br />
								<br />
								営業時間前に行きましたが、すでにサウナ待ちをしてる地元の方が。。。
								レストランのレジでサウナ用リストバンドを購入して更衣室へ向かいます。
								<br />
								<br />
								テラスでクールダウンしたり、湖で泳ぐことができます。テラスから飲み物を購入し、
								景色を眺めながら楽しむことができます。
								サウナの後は、併設のレストランでランチやディナーをお楽しみいただけます。
								<br />
								<br />
							</Typography>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuuma2.jpeg?alt=media&token=141e2852-5158-413c-9b0c-85c1319867cf'
								alt='湖'
							/>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FKuuma3.jpeg?alt=media&token=ee21c4ee-d306-4ae9-8337-f2db0075c8ff'
								alt='カフェ'
							/>
							<Box sx={{ mt: 2 }}>
								<Link href='https://www.saunaravintolakuuma.fi/'>
									Sauna Restaurant Kuuma（サウナ・レストラン・クーマ）
								</Link>
								<br />
								<br />
							</Box>
						</Contents>
						<Contents>
							<H3>Rauhaniemi Folk Spa（ラウハニエミ・フォーク・スパ）</H3>
							<MyImg
								src='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2Fothers%2Farticle8%2FRauhaniemi1.jpeg?alt=media&token=e5695c9c-3785-49a4-b2d3-383f74c8298f'
								alt='外観'
							/>
							<Typography>
								<br />
								Rauhaniemi Folk
								Spaは、タンペレに位置する歴史あるサウナ施設です。自然に囲まれた環境で、伝統的なフィンランドサウナを体験することができます。この施設は、地元の人々や観光客に愛され続けています。
								<br />
								<br />
								Rauhaniemi Folk
								Spaの特徴は、自然と調和したサウナ体験です。湖のほとりに位置しており、サウナ後には冷たい湖水でクールダウンすることができます。冬は湖が凍るので穴をあけて入ります。
								熱源はオイルかなって感じの見た目でした。お店の人に確認はしてないです。
								タンペレを訪れる際にはぜひ訪れてみたいスポットです。
								<br />
								<br />
							</Typography>

							<Box sx={{ mt: 2 }}>
								<Link href='https://rauhaniemi.net/en/'>
									Rauhaniemi Folk Spa（ラウハニエミ・フォーク・スパ）
								</Link>
								<br />
								<br />
							</Box>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>フィンランドのサウナの種類とその特徴</H2>
						<Contents>
							<Typography>
								フィンランドには様々な種類のサウナが存在します。それぞれのサウナに特徴があり、違った体験が楽しめます。
							</Typography>
							<H3>スモークサウナ</H3>

							<Typography variant='body1'>
								<br />
								スモークサウナは、フィンランドの伝統的なサウナの一つです。薪を燃やしてサウナストーンを熱して、室内が温まると共にその煙が部屋全体に充満します。煙が十分に行き渡った後に換気を行い、サウナ室に入ると、独特の香りと共に深いリラックス効果が得られます。スモークサウナは、自然の中に建てられることが多く、周囲の風景と一体となった体験が楽しめます。
								<br />
								<br />
								スモークサウナの体験は、自然をより強く感じさせます。多くの場合、湖や海の近く、森の中に位置しておりサウナの後には冷たい湖水や海水でのクールダウンが楽しめます。
								<br />
								スモークサウナは薪を燃やしてから経過した時間が浅いとかなり煙たく、室内、サウナストーンもかなり熱くなります。施設の開店直後に行ったり、閉店間際に行くなどお好みに合わせて利用するのがおすすめです。{' '}
								<br />
								<br />
							</Typography>
						</Contents>
						<Contents>
							<H3>電気サウナ</H3>

							<Typography>
								<br />
								日本でも一般的な電気ストーブ。電気サウナは温度管理がしやすく、都市部のサウナ施設やホテルでよく見られます。フィンランドではほとんどの家庭にサウナがあり、民泊やコテージを利用すると、自分でサウナの温度調節ができるなど、日本ではあまりない貴重な体験ができることもあります。
								私は民泊を利用することが多いのですが、一般家庭のサウナでプライベートな体験することができますし、自分の好きな料理を楽しんだりとフィンランドの文化に興味がある方やなんでも自分でやってみたい方におすすめです。私はいつも民泊のホストにおすすめのサウナ施設を聞きます。ローカルなサウナを発掘できるかも。{' '}
								<br />
								<br />
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>フィンランドのサウナ文化</H2>
						<Contents>
							<Typography>
								フィンランドはサウナ発祥の地。フィンランドではサウナは単なるリラックスの場ではなく、社会的な交流の場でもあります。サウナは家族や友人と一緒に過ごす時間を大切にし、会話を楽しむ場所としても利用されます。日本でいうところの銭湯と同じような位置付けでしょうか。また、フィンランドの多くの家庭にはサウナがあり、日常生活の一部となっています。自宅にサウナがある暮らし。日本でお家に風呂があるのと同じ感じなのかな。
								<br />
								<br />
								サウナの文化は、フィンランドの人々の生活に深く根付いています。家族や友人との絆を深める場として、また心身の健康を保つための重要な場所として、サウナは多くのフィンランド人にとって欠かせない存在です。
							</Typography>
						</Contents>
					</WrapH2>
					<WrapH2>
						<H2>サウナ体験のすすめ</H2>
						<Contents>
							<Typography>
								フィンランドを訪れる際には、ぜひサウナ体験をしてみてください。フィンランドのサウナは、心身のリフレッシュに最適であり、また現地の文化を深く知ることができる貴重な体験です。今回紹介したサウナ施設を訪れることで、フィンランドのサウナ文化を存分に楽しむことができます。
								<br />
								<br />
								フィンランドのサウナ体験を通じて、リラックスしたひとときを過ごし、心身の健康を取り戻しましょう。フィンランドの美しい自然とともに、サウナの魅力を堪能してください。
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
