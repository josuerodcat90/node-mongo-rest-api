import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import TaskRoutes from './routes/tasks.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to my app!' });
});

app.use('/api/tasks', TaskRoutes);

export default app;
