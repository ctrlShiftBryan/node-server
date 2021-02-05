import express from 'express';
import UsersApi from './stubs/test-api/test-api';
const app = express();
const PORT = 8000;

app.get('/', UsersApi.user)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
