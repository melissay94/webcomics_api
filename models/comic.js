'use strict';
module.exports = (sequelize, DataTypes) => {
  const comic = sequelize.define('comic', {
    creatorName: DataTypes.STRING,
    comicUrl: DataTypes.STRING,
    supportUrl: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    updated: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    isFree: DataTypes.BOOLEAN
  }, {});
  comic.associate = function(models) {
    // associations can be defined here
  };
  return comic;
};