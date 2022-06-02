import { Router } from 'express';
import {
	createTask,
	deleteTask,
	findAllDoneTasks,
	findAllTasks,
	findOneTask,
	updateTask,
} from '../controllers/task.controller';

const router = Router();

router.get('/', findAllTasks);

router.get('/done', findAllDoneTasks);

router.post('/', createTask);

router.get('/:id', findOneTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

export default router;
