const users = [{id: 1, username: 'Peter', age: 25}];

const createUser = (input) => {
  const id = Date.now();
  return {
    id, ...input
  }
}

const root = {
  getAllUsers: () => {
    return users
  },
  getUser: ({id}) => {
    return users.find(user => user.id == id)
  },
  createUser: ({input}) => {
    const user = createUser(input);
    users.push(user);
    return user;
  }
}

module.exports = root;
