import { gql } from 'apollo-server-express';

export default gql`
	type Task {
		id: ID!
		title: String!
		description: String
		done: Boolean!
		createdAt: String!
		updatedAt: String!
	}

	type Query {
		getTasks: [Task]!
		getDoneTasks: [Task]
		getTaskById(id: ID!): Task
	}

	input TaskInput {
		title: String!
		description: String
		done: Boolean!
	}

	type Mutation {
		createTask(input: TaskInput): Task!
		updateTask(id: ID!, input: TaskInput): Task!
		deleteTask(id: ID!): String!
	}
`;
