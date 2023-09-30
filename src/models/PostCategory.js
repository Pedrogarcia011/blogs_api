module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    }, {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: 'posts_categories',
        foreignKey: 'postId', // Nome correto da chave estrangeira
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'posts',
        through: 'posts_categories',
        foreignKey: 'categoryId', // Nome correto da chave estrangeira
        otherKey: 'postId',
      });
    };
    return PostCategory;
  };