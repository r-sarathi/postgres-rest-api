"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
const bcrypt = require("bcrypt");
const AppError = require("../../utils/appError");
const posts = require("./posts");

const user = sequelize.define(
  "user",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userRoleType: {
      type: Sequelize.ENUM("0", "1", "2"),
      allowNull: false,
      validate: {
        notNull: {
          msg: "User role cannot be null.",
        },
        notEmpty: {
          msg: "User role cannot be empty",
        },
      },
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "First name cannot be null.",
        },
        notEmpty: {
          msg: "First name cannot be empty",
        },
      },
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Last name cannot be null.",
        },
        notEmpty: {
          msg: "Last name cannot be empty",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email cannot be null.",
        },
        notEmpty: {
          msg: "Email cannot be empty",
        },
        isEmail: {
          msg: "Invalid Email ID.",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password cannot be null.",
        },
        notEmpty: {
          msg: "Password cannot be empty",
        },
      },
    },
    confirmPassword: {
      type: Sequelize.VIRTUAL,
      set(value) {
        if (this.password.length < 7) {
          throw new AppError("Password length must be grater than 7", 400);
        }
        if (value === this.password) {
          const hashPassword = bcrypt.hashSync(value, 10);
          this.setDataValue("password", hashPassword);
        } else {
          throw new AppError(
            "Password and confirm password must be the same",
            400
          );
        }
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
    deletedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: "user",
  }
);

user.hasMany(posts, {
  foreignKey: "createdBy",
});
posts.belongsTo(user, {
  foreignKey: "createdBy",
});

module.exports = user;
