import express from 'express'
import webp from 'webp-converter'
import replaceExt from 'replace-ext'
import upload from './upload'

const app = express();

// view engine setup
app.set('view engine', 'ejs')

// public folder
app.use(express.static('./public'))

app.get('/', (req, res) => {
	res.render('index')
})

app.post('/images', (req, res) => {
	upload(req, res, (err) => {
		if(err) {
			res.render('index', {
				msg: err
			})
		} else {
			if(res.file == undefined) {
				res.render('index', {
					msg: 'Error no file selected'
				})
			} else {
				const image = './public' + req.file.filename
				const newImg = replaceExt(req.file.filename, '.webp')

				webp.cwebp(image, newImg, "-q 80", (status) => {
					res.render('index', {
						msg: status
					})
				})
			}
		}
	})
})

export default app