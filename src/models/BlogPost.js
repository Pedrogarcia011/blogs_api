module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },
      userId: DataTypes.INTEGER,
    }, {
      tableName: 'blog_posts',
      timestamps: false,
      underscored: true,
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
     /*  BlogPost.belongsToMany(models.Category, {
        through: models.PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
        as: 'categories',
      }); */
    };
    return BlogPost;
  };
  