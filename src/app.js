import express from 'express'

const app = express();

// view engine setup
app.set('view engine', 'ejs')

// public folder
app.use(express.static('./public'))

app.get('/', (req, res) => {
	res.render('index')
});

export default app