import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = User.findAll();

    return res.json(users);
  }
}

export default new UserController();
