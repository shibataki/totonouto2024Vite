import { Box, Typography, Container } from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme'
import Divider from '@mui/material/Divider'

import Link from '@mui/material/Link'
import Grid from '@mui/material/Unstable_Grid2'

interface WordItemProps {
	word: string
	text: string[]
	linkUrls: string[]
	linkText: string[]
	imgUrl: string
	alt: string
}

function WordItem({
	word,
	text,
	linkUrls,
	linkText,
	imgUrl,
	alt,
}: WordItemProps) {
	return (
		<Box sx={{ my: 5 }}>
			<Typography variant='h3'>{word}</Typography>
			<Divider sx={{ background: '#FFF', mb: 1 }} />
			<Box>
				{text.map((text) => (
					<Typography variant='body1' key={text}>
						{text}
					</Typography>
				))}
			</Box>

			<Box component='img' width='100%' src={imgUrl} alt={alt} />

			{linkUrls.map((url, i) => (
				<Link href={url} key='{url}' sx={{ color: '#99CCFF' }} color='inherit'>
					<Typography variant='body1'>{linkText[i]}</Typography>
				</Link>
			))}
		</Box>
	)
}

const wordList: WordItemProps[] = [
	{
		word: 'サウナストーブ',
		text: [
			'サウナ室を温めるストーブ。',
			'貸切サウナととのうとのサウナストーブは電気式です。他にも薪、ガスなどを熱源とするものもあります。フィンランドにはオイル式もありました。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari.jpeg?alt=media&token=3968d423-4f60-4dbe-a688-3214f2262d7b',
		alt: '貸切サウナととのうとのサウナストーブ',
	},
	{
		word: 'サウナストーン',
		text: [
			'サウナストーブの上で熱した石。',
			'サウナストーンにはサウナ室の温度を保つ効果があります。大きい石ほど熱しにくく冷めにくい。熱した石からの輻射熱、、、気持ち良いですよね。また、サウナストーンはロウリュにも利用されます。ロウリュの際は水をかけ過ぎないでください。サウナ室の温度が下がるだけでなく、ストーブの故障にもつながります。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Firori2.jpeg?alt=media&token=44376ac3-aa29-40b1-99d4-66afaabc395d',
		alt: '貸切サウナととのうとのサウナストーン',
	},
	{
		word: 'ロウリュ',
		text: [
			'熱したサウナストーンに水をかけることで発生する蒸気を楽しむこと。',
			'体感温度がグッと上がり発汗を促します',
			'日本では熱波を送るサービスのことを指すこともありますね。フィンランドのおじいさんに教えてもらったロウリュの極意では、体感温度の上昇と下降の波を楽しむのだとか。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'セルフロウリュ',
		text: [
			'自分でサウナストーンに水などをかけて蒸気を発生させること。',
			'貸切サウナととのうとではセルフロウリュが楽しめます！',
			'オプションでロウリュ用のアロマをご用意しております',
			'水をかけ過ぎないでください。サウナ室の温度が下がるだけでなく、ストーブの故障にもつながります。',
			'一度水をかけたら少し時間を空けてくださいね。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'アウフグース',
		text: [
			'ロウリュで発生させた蒸気を、タオルなどを使いサウナ室中に蒸気を広げ、一人一人に向かってあおぐサービス。',
			'熱いのがお好きな方におすすめ。',
			'発祥はドイツ。店主はドイツには行ったことがないです。ドイツ行ったことあるよって方お話し聞かせてください',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '熱波',
		text: ['アウフグースの意味'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '休憩',
		text: [
			'サウナや水風呂の後に座ったり寝転がったりしながら身体を休めること。',
			'体の水気を拭いてから休憩するのがおすすめ。貸切サウナととのうとでは外気浴をお勧めしています。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '外気浴',
		text: [
			'外で休憩すること。外の景色や風を楽しむことができる。',
			'貸切サウナととのうとでは外気浴を楽しむ場所としてお庭をご用意しております。通称だるまの庭。植物たちを眺めながら風にあたると格別です。椅子に座ったり、レンガに寝転んだり各々のやり方でお楽しみください。',
			'ととのうとのお庭を作った人：だるまと店主とその仲間たち',
		],
		linkUrls: ['https://www.instagram.com/daruma.244/'],
		linkText: ['ニワダルマ'],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Fdaruma.jpeg?alt=media&token=3f53663c-505d-49e7-99f7-a0279a6d723e',
		alt: '貸切サウナととのうとの外気浴場',
	},
	{
		word: '水風呂',
		text: [
			'水のお風呂。銭湯とかだと18度くらいが多い。',
			'貸切サウナととのうとでも水風呂をお楽しみいただけます。',
			'水風呂に入る前には必ずシャワー等で汗を流しましょう。',
			'フィンランドの水風呂はほとんどが湖でした。カモとおじいさんいっしょに泳いでいました。冬場は表面が凍っています。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl:
			'https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FIntroduction%2Ffutari2.jpeg?alt=media&token=40a51b52-b757-4e8f-91a0-6d72a4d357a1',
		alt: '貸切サウナととのうとの水風呂',
	},
	{
		word: 'チラー',
		text: [
			'水を冷やすための冷却装置。',
			'貸切サウナととのうとでは2024年夏導入予定です。',
			'フィンランドではチラーなしでも十分冷たい水に入れます。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'シングル（グルシン）',
		text: ['10度未満の水風呂のこと。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '汗流しカットマン',
		text: [
			'サウナ室でかいた汗を水などで流さずにそのまま水風呂に入る人。',
			'マナー違反です。',
			'絶対にやめてください。',
			'施設のルールやマナーはきちんと守りましょう。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},

	{
		word: '下茹で',
		text: ['サウナに入る前にお湯につかって体を温めること'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ととのう',
		text: [
			'サウナ、水風呂、休憩を繰り返すことでその域に到達するとされている状態。',
			'整うと感じで書く人もいます。',
			'温冷交代浴により「β-エンドルフィン」「オキシトシン」「セロトニン」の3つの物質が脳内で分泌され、ストレス緩和や鬱症状の改善、精神の安定に効果があるとか。',
			'百聞は一見にしかず。ご来店お待ちしております。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ととのい椅子',
		text: [
			'休憩をするときに座る椅子。',
			'プラスチック製のものが多い。リクライニングタイプや、ベンチタイプなど種類は様々。貸切サウナととのうとではリクライニングタイプのととのい椅子や、レンガに寝転ぶなど自分なりの楽しみ方でお過ごしください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'あまみ',
		text: [
			'サウナと水風呂を楽しんでいる時に、皮膚に赤いまだら模様が現れたことないですか？それ、あまみです。 血行が良くなっている証拠だとか。怖がらなくて良いみたい。',
			'語源は何なんでしょうか？',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'イオンウォーター',
		text: [
			'休憩の時に飲むと美味しい。サウナーの定番ドリンク。',
			'貸切サウナととのうとでは、グラスで提供しております。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'オロポ',
		text: [
			'オロナミンCとポカリスエットを混ぜた飲み物。これまたサウナーの定番ドリンク。',
			'貸切サウナととのうとでは、グラスで提供しております。',
			'オロポカと呼ばれることもあるらしい',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'シャリシャリオロポ',
		text: [
			'貸切サウナととのうと店主が考案した新オロポ。',
			'凍らせたポカリスエットをかき氷にして、オロナミンCをかける。最高。サウナライフしょーへいさんとの会話中に思いついた。',
		],
		linkUrls: ['https://neverjp.com/'],
		linkText: ['しょーへいさんの会社'],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ヴィヒタ',
		text: [
			'白樺の枝葉を束ねたもの。',
			'フィンランドではこれで身体を叩いたりする。血行促進や殺菌効果があるとかないとか。フィンランドの山奥で使った時は気持ちよかったなぁ。。。良い香りがするんですよね。',
			'貸切サウナととのうとではヴィヒタは使用できませんのでご注意ください。配管が詰まります。絶対にやめてください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ウィスキング',
		text: [
			'ヴィヒタで身体を叩いたりしながらマッサージを楽しむサービス。白樺の良い香りと共にリラックスできるとか。店主はウィスキングやったことないです。感想お待ちしております。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '温度の羽衣',
		text: [
			'水風呂に入ってしばらくジッとしてると、冷たさを感じにくくなります。それ、温度の羽衣です。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: '公衆浴場',
		text: [
			'一般的な入浴施設のこと。 普通公衆浴場その他公衆浴場があります。',
			'貸切サウナととのうとはその他公衆浴場の営業許可を取得しています。保健所の指導のもと運営しておりますので安心してご利用ください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナー',
		text: ['サウナ愛好家のこと。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナマット',
		text: [
			'サウナ室でベンチに座る際にお尻の下に敷くもの。タオルやビート板などが一般的。',
			'貸切サウナととのうとでは小さなすのこをマットがわりにご利用いただけます。フタリサウナのサウナマットは背もたれにちょうどハマるとか、お試しあれ。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナハット',
		text: [
			'サウナで頭を熱からまもる帽子。髪の毛が痛みにくくなったり、のぼせにくくなったりします。',
			'貸切サウナととのうとではサウナハットのレンタルがございます。ぜひご利用ください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'サウナ飯',
		text: [
			'サウナのあとにとる食事。',
			'サ飯と略されることもあります。',
			'貸切サウナととのうとの近隣のサウナ飯については店主にお問合せください。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'スモークサウナ',
		text: [
			'サウナ室の中で薪を燃やしてサウナストーンを温める。サウナ室に煙が充満するがサウナ室が十分に温まったあと煙を排出する。',
			'フィンランドで体験しました。激熱でした。やんちゃなおじいさんのロウリュが過激。',
			'日本では岡山県の久米屋さんで体験できます。ととのうとを作る時にサウナのことを色々と教えていただきました。施設の方も良い方ばかりでイチオシです。',
		],
		linkUrls: ['https://nakaute.com/'],
		linkText: ['久米屋'],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'テントサウナ',
		text: [
			'テント内をストーブで温めて入るサウナ。テント内でストーブを使う際は火災と一酸化炭素中毒に気をつけてくださいね。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'トントゥ',
		text: ['小さい妖精。北欧の森やサウナなどに住んでいるらしい。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'バイブラ',
		text: [
			'下から泡がぶくぶく出てくるお風呂のこと。血行促進によいとか、水が拡散されて良いとか、、、',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ドライサウナ',
		text: [
			'高温で湿度が低い乾燥したタイプのサウナ室。乾燥肌の人は少し肌を濡らして入ってくださいね。',
		],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'バーニャ',
		text: ['ロシア式サウナ。店主は入ったことないです。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ハマーム',
		text: ['東アジア浴場。綺麗な内観のものが多いですね。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ホームサウナ',
		text: [
			'お気に入りサウナ施設のこと。店主のホームサウナはヘルシーバスニュー栄です。',
		],
		linkUrls: ['https://newsakae.com/'],
		linkText: ['ヘルシーバスニュー栄'],
		imgUrl: '',
		alt: '',
	},
	{
		word: 'ラドル',
		text: ['ロウリュで水をかけるのに使われる柄杓。'],
		linkUrls: [''],
		linkText: [''],
		imgUrl: '',
		alt: '',
	},
]

export default function SaunaWords() {
	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					p: 0,
				}}
			>
				<Container sx={{ mt: '60px', mb: '70px', color: '#FFF', p: 2 }}>
					<Box>
						<Typography variant='h1' sx={{ my: 2 }}>
							貸切サウナととのうと店主がまとめたサウナ用語集。
						</Typography>
						<Typography variant='body2'>
							ととのうとの店主がサウナに関連する用語を紹介・解説します。
							<br />
							初心者からベテランの方までいまさら聞けないサウナ用語をチェック！
						</Typography>
					</Box>
					<Box sx={{ px: 2 }}>
						<Grid container spacing={4}>
							{wordList.map((Item) => (
								<Grid xs={12} md={6} lg={4}>
									<WordItem
										word={Item.word}
										text={Item.text}
										linkUrls={Item.linkUrls}
										linkText={Item.linkText}
										imgUrl={Item.imgUrl}
										alt={Item.alt}
										key={Item.word}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box>
						<Typography variant='body2'>
							今回ご紹介したもの以外にも載せて欲しい言葉や誤りあれば店主まで。
						</Typography>
						<Typography variant='body2'>
							サウナタイム様の記事を参考にさせていただきました。
						</Typography>
						<Link
							href='https://saunatime.jp/sauna-wiki/'
							sx={{ color: '#99CCFF' }}
							color='inherit'
						>
							<Typography variant='body2'>
								これで全てがわかる！サウナ用語集【サウナWiki】
							</Typography>
						</Link>
					</Box>
				</Container>
			</Container>
		</ThemeProvider>
	)
}
