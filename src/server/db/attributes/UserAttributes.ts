
export interface UserAttributes {
  id: number;

  firebaseID: string;

  email: string;

  username: string;

  readonly 'createdAt'?: Date;

  readonly 'updatedDate'?: Date;
}
