import Task from '../models/Task.js';

export const findAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find();

		res.json(tasks);
	} catch (error) {
		res.status(500).json({
			message: error.message || 'An error occurred while retrieving tasks',
		});
	}
};

export const findAllDoneTasks = async (req, res) => {
	try {
		const tasks = await Task.find({ done: true });

		res.json(tasks);
	} catch (error) {
		res.status(500).json({
			message: error.message || 'An error occurred while retrieving done tasks',
		});
	}
};

export const findOneTask = async (req, res) => {
	try {
		const { id } = req.params;

		const task = await Task.findById(id);

		if (!task) {
			return res.status(404).json({
				message: `Task with ${id} does not exists`,
			});
		}

		res.json(task);
	} catch (error) {
		res.status(500).json({
			message:
				error.message ||
				`An error occurred while retrieving task with id: ${id}`,
		});
	}
};

export const createTask = async (req, res) => {
	if (!req.body.title) {
		return res.status(400).json({ message: 'Title is required' });
	}

	try {
		const newTask = new Task({
			title: req.body.title,
			description: req.body.description,
			done: req.body.done ? req.body.done : false,
		});

		const taskSaved = await newTask.save();

		res.json({
			message: 'New task created!',
			taskCreated: taskSaved,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message || 'An error occurred while creating the task',
		});
	}
};

export const updateTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndUpdate(
			req.params.id,
			{
				title: req.body.title,
				description: req.body.description,
				done: req.body.done,
			},
			{ new: true }
		);

		res.json({
			message: 'Task updated!',
			taskUpdated: task,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message || 'An error occurred while updating the task',
		});
	}
};

export const deleteTask = async (req, res) => {
	const { id } = req.params;

	try {
		const task = await Task.findByIdAndDelete(id);

		res.json({
			message: 'Task deleted!',
			taskDeleted: task,
		});
	} catch (error) {
		res.status(500).json({
			message:
				error.message ||
				`An error occurred while deleting the task with id: ${id}`,
		});
	}
};
