const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      return UserModel.findOne({ email, password })
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' });
          }
          return cb(null, user, { message: 'Logged In Successfully' });
        })
        .catch((err) => cb(err));
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret',
    },
    function (jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return UserModel.findOneById(jwtPayload.id)
        .then((user) => {
          return cb(null, user);
        })
        .catch((err) => {
          return cb('err');
        });
    }
  )
);

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
