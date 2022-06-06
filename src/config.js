import { config } from 'dotenv';

config();

const msSQLConfig = {
	HOST: process.env.DB_HOST || 'localhost',
	PORT: process.env.DB_PORT || 1433,
	USER: process.env.DB_USER || 'sa',
	PASSWORD: process.env.DB_PASSWORD || '',
	DB: process.env.DB_NAME || '',
	dialect: 'mssql',
	dialectOptions: {
		encrypt: true,
		useUTC: false,
		dateFirst: 1,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};

export default {
	mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
	port: process.env.PORT || 6000,
	msSQLConfig,
};
