import app from './app.js';
import { dbConnection } from './database.js';

app.listen(app.get('port'), () => {
	console.log(`Server is running on port ${app.get('port')}`);
	dbConnection();
});
