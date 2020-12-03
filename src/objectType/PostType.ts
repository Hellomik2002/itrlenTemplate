import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Post {
  @Field()
  description!: string;

  @Field()
  ownerId!: number
}
