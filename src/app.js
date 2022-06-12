import express from 'express';
import cors from 'cors';
// import morgan from 'morgan';
import helmet from 'helmet';

import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/index.js';

import config from './config.js';

// import TaskRoutes from './routes/tasks.routes.js';

const app = express();

//settings
app.set('port', config.port);

//middlewares
app.use(cors());

const isDevelopment = config.env === 'development';

app.use(
	helmet({
		crossOriginEmbedderPolicy: !isDevelopment,
		contentSecurityPolicy: !isDevelopment,
	})
);
//app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

//Starting the server
await server.start();

server.applyMiddleware({ app });

//routes
// app.get('/', (req, res) => {
// 	res.json({ message: 'Welcome to my app!' });
// });

// app.use('/api/tasks', TaskRoutes);

export default app;
