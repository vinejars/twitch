export interface ProfileInfoAttributes {
  id: string;

  aboutMe: string | null;

  ring: string | null;

  destination: string | null;

  userId: string | null;

  readonly createdAt?: Date;

  readonly updatedDate?: Date;
}
