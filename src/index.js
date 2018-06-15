import app from './app'
import {} from 'dotenv/config'

app.listen(process.env.APP_PORT, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log(`App on ${process.env.APP_PORT}`)
	}
});