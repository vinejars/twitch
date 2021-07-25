
export interface UserAttributes {
  id: number;

  firebaseID: string | null;

  email: string;

  username: string;



  readonly 'createdAt'?: Date;

  readonly 'updatedDate'?: Date;
}
