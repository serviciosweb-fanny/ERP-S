const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook/frontend', (req, res) => {
  console.log('[webhook/frontend] received:', JSON.stringify(req.body));
  res.json({status: 'ok', path: '/webhook/frontend', received: req.body});
});

app.post('/webhook/backend', (req, res) => {
  console.log('[webhook/backend] received:', JSON.stringify(req.body));
  res.json({status: 'ok', path: '/webhook/backend', received: req.body});
});

app.get('/health', (req, res) => res.send('ok'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend listening on http://localhost:${port}`));
