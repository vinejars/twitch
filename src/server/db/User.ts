
import {
//   HasManyAddAssociationMixin,
//   HasManyAddAssociationsMixin,
//   HasManyCreateAssociationMixin,
//   HasManyCountAssociationsMixin,
//   HasManyGetAssociationsMixin,
//   HasManyHasAssociationMixin,
//   HasManyHasAssociationsMixin,
//   HasManyRemoveAssociationMixin,
//   HasManyRemoveAssociationsMixin,
//   HasManySetAssociationsMixin,
  DataTypes,
  Model,
  Optional,
} from 'sequelize';
import {UserAttributes} from './attributes/UserAttributes'
import {PostAttributes} from './attributes/PostAttributes'
import db from "./db"


interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}


interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
   UserAttributes {}
// class user extends Model<UserAttributes, UserCreationAttributes>
// implements UserAttributes{
//     public id: number;
//     firebaseID!: string;
//     username!: string;
//     email!: string;
//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;

//   public static associations: {
//     User: Association<User>;
//   };
//}
//associations:
//many to many 
//   public getUsers: HasManyGetAssociationsMixin<UserAttributes>;
//   public setUsers: HasManySetAssociationsMixin<UserAttributes, number>;
//   public addUser: HasManyAddAssociationMixin<UserAttributes, number>;
//   public addUsers: HasManyAddAssociationsMixin<UserAttributes, number>;
//   public removeUser: HasManyRemoveAssociationMixin<UserAttributes, number>;
//   public removeUsers: HasManyRemoveAssociationsMixin<UserAttributes, number>;
//   public hasUser: HasManyHasAssociationMixin<UserAttributes, number>;
//   public hasUsers: HasManyHasAssociationsMixin<UserAttributes, number>;
//   public countUsers: HasManyCountAssociationsMixin;
//   public createUser: HasManyCreateAssociationMixin<UserAttributes>; 

//   //one to many 
//   public getPosts : HasOneGetAssociationsMixin<PostAttributes>;
//   public setPosts: HasOneSetAssociationsMixin<PostAttributes, number>;
//   public addPost: HasOneAddAssociationMixin<PostAttributes, number>;
//   public addPosts: HasOneAddAssociationsMixin<PostAttributes, number>;
//   public removePost: HasOneRemoveAssociationMixin<PostAttributes, number>;
//   public removeUsers: HasOneRemoveAssociationsMixin<PostAttributes, number>;
//   public createPost: HasOneCreateAssociationMixin<PostAttributes>; 

//}

const user= db.define<UserInstance>('user', 
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        firebaseID: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                unique: true,
            }
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    },
)

export default user

