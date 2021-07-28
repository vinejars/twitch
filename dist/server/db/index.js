"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileInfo = exports.Post = exports.db = exports.User = void 0;
const db_1 = __importDefault(require("./db"));
exports.db = db_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Post_1 = __importDefault(require("./Post"));
exports.Post = Post_1.default;
const ProfileInfo_1 = __importDefault(require("./ProfileInfo"));
exports.ProfileInfo = ProfileInfo_1.default;
User_1.default.belongsToMany(User_1.default, { as: "friends", through: "friendship" });
User_1.default.hasMany(Post_1.default);
Post_1.default.belongsTo(User_1.default);
User_1.default.hasOne(ProfileInfo_1.default);
