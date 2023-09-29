module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'Category',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'categories',
        timestamps: false,
        underscored: true,
      }
    );
    return Category;
  };