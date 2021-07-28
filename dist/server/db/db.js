"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/twitch", {
    logging: false,
});
exports.default = db;
