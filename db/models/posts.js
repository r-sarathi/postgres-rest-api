"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
module.exports = sequelize.define(
  "posts",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    caption: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Caption canot be null.",
        },
        notEmpty: {
          msg: "Caption cannot be empty.",
        },
      },
    },
    media: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Media cannot be null",
        },
      },
    },
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Tags cannot be null",
        },
      },
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: "posts",
  }
);
