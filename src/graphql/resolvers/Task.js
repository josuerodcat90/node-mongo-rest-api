import Task from '../../models/Task.js';
import { UserInputError } from 'apollo-server-express';

export default {
	Query: {
		async getTasks() {
			try {
				const tasks = await Task.findAll({
					order: [['createdAt', 'ASC']],
				});

				return tasks;
			} catch (error) {
				throw new Error(
					error.message || 'An error occurred while retrieving tasks'
				);
			}
		},
		async getDoneTasks() {
			try {
				const tasks = await Task.findAll({
					where: { done: true },
					order: [['createdAt', 'ASC']],
				});

				return tasks;
			} catch (error) {
				throw new Error(
					error.message || 'An error occurred while retrieving done tasks'
				);
			}
		},
		async getTaskById(_, { id }) {
			try {
				const task = await Task.findByPk(id);

				if (!task) {
					throw new UserInputError(`Task with id: ${id} does not exists`);
				}

				return task;
			} catch (error) {
				throw new Error(
					error.message ||
						`An error occurred while retrieving task with id: ${id}`
				);
			}
		},
	},
	Mutation: {
		async createTask(_, { input }) {
			try {
				const task = await Task.create({
					...input,
					done: input.done || false,
				});

				return task;
			} catch (error) {
				throw new Error(
					error.message || 'An error occurred while creating task'
				);
			}
		},
		async updateTask(_, { id, input }) {
			try {
				const task = await Task.findByPk(id);

				if (!task) {
					throw new UserInputError(`Task with id: ${id} does not exists`);
				}

				await task.update({
					...input,
					done: input.done || false,
				});

				return task;
			} catch (error) {
				throw new Error(
					error.message ||
						`An error occurred while updating task with id: ${id}`
				);
			}
		},
		async deleteTask(_, { id }) {
			try {
				const task = await Task.findByPk(id);

				if (!task) {
					throw new UserInputError(`Task with id: ${id} does not exists`);
				}

				await task.destroy();

				return `Task with id: ${id} was deleted!`;
			} catch (error) {
				throw new Error(
					error.message ||
						`An error occurred while deleting task with id: ${id}`
				);
			}
		},
	},
};
