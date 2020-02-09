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

  async show(req, res) {
    const user = await Recipient.findByPk(req.params.id);

    return res.json(user);
  }

  async update(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    } = await recipient.update(req.body, { where: req.params.id });

    return res.json({
      name,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    });
  }
}

export default new RecipientController();
