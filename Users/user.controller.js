const { User } = require('./user.model');

const create = async (req, res) => {
  try {
    const data = req.body;

    const newUser = await User.create(data);

    res
      .status(201)
      .json({ code: 201, isCreated: true, data: newUser.toJSON() });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      code: 400,
      isCreated: false,
      msg: 'invalid data or invalid syntax',
    });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log('All users:', JSON.stringify(users, null, 2));
    res.status(200).json({ code: 200, isFound: true, userData: users });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      code: 400,
      isFound: false,
      msg: 'something went wrong',
    });
  }
};

const findByName = async (req, res) => {
  try {
    const { name } = req.body;
    const user = User.findAll({
      where: {
        name: name,
      },
    });
    res.status(200).json({ code: 200, isFound: 200, userData: user });
  } catch (e) {
    console.log(e);
    res.status(400).json({ code: 400, isFound, msg: 'something went wrong' });
  }
};

module.exports = {
  create,
  findAll,
  findByName,
};
