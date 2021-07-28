import db from "./db";
import User from "./User";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";

User.belongsToMany(User, { as: "friends", through: "friendship" });
User.hasMany(Post);
Post.belongsTo(User);
User.hasOne(ProfileInfo);

export { User, db, Post, ProfileInfo };
