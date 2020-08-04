module.exports = (sequelize, DataTypes) => {
    const Notas = sequelize.define('notas', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: DataTypes.STRING(200),
      texto: DataTypes.TEXT,
      cover: DataTypes.STRING
    },
      {
        freezeTableName: true,
        timestamps: false
      });
  
    Notas.associate = (models) => {
      Notas.belongsTo(models.autor);
    };
  
    return Notas;
}