
export interface UserAttributes {
  id: string;

  firebaseID: string | null;

  email: string;

  username: string;



  readonly 'createdAt'?: Date;

  readonly 'updatedDate'?: Date;
}
