import { DataTypes, Model, Optional } from "sequelize";
import { PostAttributes } from "./attributes/PostAttributes";
import db from "./db";

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

interface PostInstance
  extends Model<PostAttributes, PostCreationAttributes>,
    PostAttributes {}

const post = db.define<PostInstance>("post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
  },
  imageUrl: {
    type: DataTypes.TEXT,
  },
  userId: {
    type: DataTypes.STRING,
  },
});

export default post;
