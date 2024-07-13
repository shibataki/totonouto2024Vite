import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'

export default function Blog() {
	return (
		<>
			<Box sx={{ color: '#FFF', mx: 3 }}>
				<Typography variant='h1'>貸切サウナととのうと/店主のブログ</Typography>
				<Grid container spacing={3} sx={{ mt: 3 }}>
					<Grid xs={12} md={6}>
						<Link href='/blog/saunaWords/' sx={{ textDecoration: 'none' }}>
							<Card
								sx={{
									maxWidth: 345,
									backgroundColor: '#000',
									color: '#FFF',
									border: 'solid white 1px',
								}}
							>
								<CardActionArea>
									<CardMedia
										component='img'
										height='140'
										image='https://firebasestorage.googleapis.com/v0/b/totonouto.appspot.com/o/img%2FTopLogo%2F%E3%83%AD%E3%82%B3%E3%82%99%E7%99%BD.png?alt=media&token=949aa7e8-886c-4a7b-a790-9be2b2716a28'
										alt='green iguana'
									/>
									<CardContent>
										<Typography
											align='center'
											gutterBottom
											variant='h3'
											component='div'
										>
											サウナ用語集
										</Typography>
										<Typography variant='body2'>
											ととのうと店主がサウナ用語をまとめました。今更聞けないサウナ用語！ぜひチェックしてみてください。誤りのご指摘や追記してほしい用語など募集中です。気軽に店主にお声がけください。
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
