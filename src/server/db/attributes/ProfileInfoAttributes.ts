
export interface ProfileInfoAttributes {
  id: number;

  aboutMe: string | null;

  ring: string | null;

 destination: string | null;

  userId: string | null
  
  readonly 'createdAt'?: Date;

  readonly 'updatedDate'?: Date;
}