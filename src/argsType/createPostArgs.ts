import { ArgsType, Field, InputType } from "type-graphql";

@ArgsType()
export class CreatePostArgs {
  @Field()
  description!: string;

  @Field()
  ownerId!: number;
}



@InputType()
export class CreatePostInputType {
  @Field()
  description!: string;

  @Field()
  ownerId!: number;
}