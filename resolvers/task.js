const { users, tasks } = require('../constants');
const uuid = require('uuid');

module.exports = {
    //Request equal method GET - 
    Query: {
        tasks: () => { // task list 
            return tasks;
        },
        task: (_, { id }) => {
            //Get task by id query
            //for request number, the server change to a string 
            return tasks.find(task => task.id === id)
        }
    },
    //create task mutation. is the same that methods POST-DELETE-PUT
    Mutation: {
        createTask: (_, { input }) => {
            const task = {...input, id: uuid.v4() };
            tasks.push(task);
            return task;
        }
    },
    Task: {
        user: ({ userId }) => {
            //user child of task, userId is the parent. Field Level Resolver
            return users.find(user => user.id === userId)
        }
    }

}