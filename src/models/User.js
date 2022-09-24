const UserModel = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "users",
    }
  );
  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "posts",
    });
  };
  return UsersTable;
};

module.exports = UserModel;
