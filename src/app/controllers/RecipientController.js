import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async index(req, res) {
    const users = await Recipient.findAll();

    return res.json(users);
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new RecipientController();
