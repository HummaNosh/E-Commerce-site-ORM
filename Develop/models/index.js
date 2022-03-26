// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// added below hn
Product.belongsTo(Category, {
  foreignKey: 'product_id',
  // havent referenced it yet on products hn
})

// Categories have many Products


Category.hasMany(Product, {
  foreignKey: 'category_id',

})
// Products belongToMany Tags (through ProductTag)


Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  }),

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: Product,
  foreignKey: 'tag_id',
  });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
