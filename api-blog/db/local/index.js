const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], users: [] }).write();

// Add a post
// db.get('posts').push({ id: 1, title: 'lowdb is awesome' }).write();

console.log(_getLastUserId());
function _getLastUserId() {
  const last = db.get('users').last().value();
  return last ? last.id || 0 : 0;
}

class UserModel {
  static users = [
    {
      id: 0,
      name: 'Mano 0',
      email: 'mano0@email.com',
      password: 'mano0',
    },
    {
      id: 1,
      name: 'Mano 1',
      email: 'mano1@email.com',
      password: 'mano1',
    },
    {
      id: 2,
      name: 'Mano 2',
      email: 'mano2@email.com',
      password: 'mano2',
    },
  ];

  static findOneById(searchId) {
    const user = UserModel.users.find(({ id }) => id === searchId);
    if (user) return Promise.resolve(user);
    return Promise.reject(Error('User not found'));
  }

  static findOne({ email, password }) {
    const user = UserModel.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) return Promise.resolve(user);
    return Promise.reject(Error('User not found'));
  }
}
module.exports = {
  User(data) {
    return {
      value() {
        return data;
      },
      save() {
        return db
          .get('users')
          .push({ ...data, id: _getLastUserId() + 1, createdAt: Date.now() })
          .write();
      },
      findByEmailAndPassword(email, password) {
        const user = db.get('users').find({ email, password }).value();
        return user
          ? Promise.resolve(user)
          : Promise.reject(Error('User not found...'));
      },
      findById(id) {
        return db.get('users').find({ id }).value();
      },
    };
  },
  UserModel,
};
