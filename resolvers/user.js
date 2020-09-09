const { users, tasks } = require('../constants');

module.exports = {
    //Request equal method GET - 
    Query: {
        //get users list
        users: () => users,
        //get user by id
        user: (_, { id }) => users.find(user => user.id === id)
    },
    //create task mutation. is the same that methods POST-DELETE-PUT
    Mutation: {},

    User: {
        tasks: ({ id }) => {
            //get task for user
            return tasks.filter(task => task.userId === id)
        }
    }

}