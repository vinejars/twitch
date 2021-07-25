
export interface ProfileInfoAttributes {
  id: number;

  aboutMe: string | null;

  faveBook: string | null;

  faveChar: string | null;

  readonly 'createdAt'?: Date;

  readonly 'updatedDate'?: Date;
}