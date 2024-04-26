const { DataTypes, Model } = require('sequelize');
const client = require('../db/client')

class Team extends Model { }

Team.init(
  {
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coach: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize: client,
    modelName: 'team',
    timestamps: false
  }
)

module.exports = Team