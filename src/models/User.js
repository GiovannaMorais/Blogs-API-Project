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
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "users",
    }
  );

  return UsersTable;
};

module.exports = UserModel;
