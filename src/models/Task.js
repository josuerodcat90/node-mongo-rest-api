import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

const Task = sequelize.define(
	'Task',
	{
		id: {
			type: 'UNIQUEIDENTIFIER',
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(400),
			allowNull: true,
		},
		done: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		timestamps: true,
		freezeTableName: true,
		tableName: 'Task',
	}
);

export default Task;
