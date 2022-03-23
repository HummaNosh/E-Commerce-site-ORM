// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// added below hn
Product.belongsTo(Category, {
  foreignKey: 'product_id',
  // havent referenced it yet hn
})

// Categories have many Products

// WHATS SOMETHING
Category.hasMany(Product, {

})
// Products belongToMany Tags (through ProductTag)

//should i put unique in?product_id key??
Product.belongsToMany(Tag, {
  through: {
  model: ProductTag,
  },
}),

// Tags belongToMany Products (through ProductTag)

// added below what to put inside???????????????is the through right?
Tag.belongsToMany(Product, {
  through: {
    model:ProductTag
  },
}),







module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
