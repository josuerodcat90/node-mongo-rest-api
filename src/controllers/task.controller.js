import Task from '../models/Task.js';

export const findAllTasks = async (req, res) => {
	try {
		const tasks = await Task.findAll({
			order: [['createdAt', 'ASC']],
		});

		res.json({
			count: tasks.length,
			tasks,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message || 'An error occurred while retrieving tasks',
		});
	}
};

export const findAllDoneTasks = async (req, res) => {
	try {
		const tasks = await Task.findAll({
			where: { done: true },
			order: [['createdAt', 'ASC']],
		});

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

		const task = await Task.findAll({
			where: { id },
		});

		// tambien se puede hacer asi:
		/**
		 * const task = await Task.findByPk(id); // findByPk busca por primary key
		 */

		if (!task) {
			return res.status(404).json({
				message: `Task with id: ${id} does not exists`,
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

	await Task.sync({ force: false });

	const { title, description, done } = req.body;

	try {
		const task = await Task.create({ title, description, done });

		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({
			message: error.message || 'An error occurred while creating the task',
		});
	}
};

export const updateTask = async (req, res) => {
	const { id } = req.params;
	const { title, description, done } = req.body;

	try {
		const task = await Task.findByPk(id);

		if (!task) {
			return res.status(404).json({
				message: `Task with id: ${id} does not exists`,
			});
		} else {
			await Task.update(
				{
					title,
					description,
					done,
				},
				{
					where: { id },
				}
			);

			res.json({
				message: `Task with id: ${id} updated!`,
			});
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || 'An error occurred while updating the task',
		});
	}
};

export const deleteTask = async (req, res) => {
	const { id } = req.params;

	try {
		const task = await Task.findByPk(id);

		if (!task) {
			return res.status(404).json({
				message: `Task with id: ${id} does not exists`,
			});
		} else {
			await Task.destroy();

			res.json({
				message: `Task with id: ${id} was deleted!`,
			});
		}
	} catch (error) {
		res.status(500).json({
			message:
				error.message ||
				`An error occurred while deleting the task with id: ${id}`,
		});
	}
};
