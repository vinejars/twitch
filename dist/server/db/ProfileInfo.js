"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
const profileinfo = db_1.default.define("profileinfo", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    aboutMe: {
        type: sequelize_1.DataTypes.TEXT,
    },
    ring: {
        type: sequelize_1.DataTypes.STRING,
    },
    destination: {
        type: sequelize_1.DataTypes.STRING,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = profileinfo;
