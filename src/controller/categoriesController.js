const { CategoryService } = require('../service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const category = await CategoryService.createCategory(name);

  if (category.type) {
    return res.status(400).json({ message: category.message });
  }

  return res.status(201).json({ ...category.dataValues });
};

const getAllCategory = async (req, res) => {
  const category = await CategoryService.getAllCategory();
  return res.status(200).json(category);
};

module.exports = {
  createCategory,
  getAllCategory,
};