import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: false,
			trim: true,
		},
		done: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default mongoose.model('Task', TaskSchema);
