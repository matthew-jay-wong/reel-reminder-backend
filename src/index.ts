import express from 'express';
import environment from '@utils/environment';

const { port } = environment;

const app = express();

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(port, () =>
	console.log(`NodeJS TypeScript Starter: Listening on port ${port}`)
);
