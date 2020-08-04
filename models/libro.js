module.exports = (sequelize, DataTypes) => {
    const Libro = sequelize.define('libro', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: DataTypes.STRING(200),
      info: DataTypes.STRING(200),
      cover: DataTypes.STRING
    },
      {
        freezeTableName: true,
        timestamps: false
      });
  
    Libro.associate = (models) => {
      Libro.belongsTo(models.autor);
    };
  
    return Libro;
}