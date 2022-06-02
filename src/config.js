import { config } from 'dotenv';

config();

export default {
	mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
	port: process.env.PORT || 6000,
};
