/* const jwt = require('jsonwebtoken'); */
const { Category } = require('../models');

const createCategory = async (name) => {
  const existingCategory = await Category.findOne({ where: { name } });
  
  if (existingCategory) {
    const error = new Error('User already registered');
    error.statusCode = 409;
    throw error;
  }

  const result = await Category.create({ name });

  return result;
};

module.exports = {
  createCategory,
};