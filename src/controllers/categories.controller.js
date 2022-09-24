const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const category = await categoryService.createCategory(name);
    const { code, message } = category;
    
    if (message) return res.status(code).json({ message });

    return res.status(201).json(category);
};

const getCategories = async (req, res) => {
    const categories = await categoryService.getCategories();
    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getCategories,
};