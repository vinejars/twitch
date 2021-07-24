
export interface UserAttributes {
  id: number;

  firebaseID: string;

  email: string;

  username: string;

  aboutMe: string | null;

  faveBook: string | null;

  faveChar: string | null;

  readonly 'createdAt'?: Date;

  readonly 'updatedDate'?: Date;
}
