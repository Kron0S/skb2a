import express from 'express'
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', async (req, res) => {
	const a = parseFloat(req.query.a || 0);
	const b = parseFloat(req.query.b || 0);
	const sum = a + b;
	return res.send('' + sum);
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
