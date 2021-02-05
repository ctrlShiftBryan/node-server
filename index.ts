import express from 'express';
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  // console.log(req.params, req.query, req.body, req.headers);
  const { params, query, body, headers } = req;
  console.log({ params, query, body, headers })
  return res.send('Express + TypeScript Server');
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
