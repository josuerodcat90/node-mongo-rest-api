import app from './app';
import './database';

import 'dotenv/config';

app.listen(app.get('port'), () => {
	console.log(`Server is running on port ${app.get('port')}`);
});
