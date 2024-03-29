import mongoose from 'mongoose';
import config from './config.js';

(async () => {
	try {
		const db = await mongoose.connect(config.mongodbURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`Connected to '${db.connection.name}' database`);
	} catch (error) {
		console.error(error);
	}
})();
