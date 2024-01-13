import app from './app';
import 'dotenv/config';

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`\x1b[33m[Server] listening on ${PORT}`, '\x1b[0m');
});
