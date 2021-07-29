import db from "./db";
import User from "./User";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";

User.hasMany(Post);
Post.belongsTo(User);
User.hasOne(ProfileInfo);

export { User, db, Post, ProfileInfo };
