import config from './config.js';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
	config.msSQLConfig.DB,
	config.msSQLConfig.USER,
	config.msSQLConfig.PASSWORD,
	{
		host: config.msSQLConfig.HOST,
		port: config.msSQLConfig.PORT,
		dialect: config.msSQLConfig.dialect,
		pool: {
			max: config.msSQLConfig.pool.max,
			min: config.msSQLConfig.pool.min,
			acquire: config.msSQLConfig.pool.acquire,
			idle: config.msSQLConfig.pool.idle,
		},
	}
);

export const dbConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log('>>Connection to MSSQL has been established successfully.<<');
	} catch (error) {
		console.error('Unable to connect to the MSSQL database:', error);
	}
};
