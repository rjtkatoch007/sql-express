const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Posts = sequelize.define(
  'Posts',
  {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
  },  
);

module.exports=Posts;