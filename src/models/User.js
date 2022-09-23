const UserModel = (sequelize,DataTypes) => {
    const UsersTable = sequelize.define('User',{
        id:DataTypes.INTEGER,
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'users',
    });

    return UsersTable
}

module.exports = UserModel;