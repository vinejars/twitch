import Sequelize from "sequelize";
import Post from "../Post";
import ProfileInfo from "../ProfileInfo";

export interface UserAttributes {
  id: string;

  firebaseID: string | null;

  email: string;

  username: string;

  // hasOne: Sequelize.HasManyAddAssociationMixin<Post>

  readonly createdAt?: Date;

  readonly updatedDate?: Date;
}
