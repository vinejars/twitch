
import {
  DataTypes,
  Model,
  Optional,
} from 'sequelize';

import {ProfileInfoAttributes} from './attributes/ProfileInfoAttributes'
import db from "./db"

interface ProfileInfoCreationAttributes extends Optional<ProfileInfoAttributes, 'id'>{}


interface ProfileInfoInstance
  extends Model<ProfileInfoAttributes, ProfileInfoCreationAttributes>,
   ProfileInfoAttributes {}

   const profileinfo= db.define<ProfileInfoInstance>('profileinfo', 
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
       aboutMe: {
            type: DataTypes.TEXT
        }, 
        faveChar: {
            type: DataTypes.STRING
        },
        faveBook: {
            type: DataTypes.STRING
        }
    }
)

export default profileinfo