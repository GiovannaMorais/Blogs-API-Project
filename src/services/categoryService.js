const { Category } = require('../models');

const createCategory = async (category) => {
    if (!category) {
 return {
        code: 400,
        message: '"name" is required',
    }; 
}
    const getCategory = await Category.create({ name: category });

    return getCategory;
};

module.exports = {
    createCategory,
};