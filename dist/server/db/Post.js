"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
const post = db_1.default.define("post", {
  id: {
    type: sequelize_1.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  text: {
    type: sequelize_1.DataTypes.TEXT,
  },
  imageUrl: {
    type: sequelize_1.DataTypes.TEXT,
  },
  userId: {
    type: sequelize_1.DataTypes.STRING,
  },
});
exports.default = post;
