import express from 'express'

const app = express();
app.get('/', async (req, res) => {
	const a = parseFloat(req.query.a || 0);
	const b = parseFloat(req.query.b || 0);
	const sum = a + b;
	return res.json({
		sum: sum
	});
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
