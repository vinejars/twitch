import db from './db';
import User from './User'
import Post from './Post'

User.belongsToMany(User, { as: 'friends', through: 'friendship' })
User.hasMany(Post);
Post.belongsTo(User);


export { User, db, Post };