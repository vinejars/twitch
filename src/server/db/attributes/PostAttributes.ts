export interface PostAttributes {
  id: number;

  text: string | null;

  imageUrl: string | null;

  userId: string | null;

  readonly createdAt?: Date;

  readonly updatedDate?: Date;
}
