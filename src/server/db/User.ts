import { DataTypes, Model, Optional } from "sequelize";
import { UserAttributes } from "./attributes/UserAttributes";
import db from "./db";

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

const user = db.define<UserInstance>("user", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  firebaseID: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

export default user;
