import { ObjectType, ID, Field, Mutation, InputType } from "type-graphql";
import { Query, Resolver, ArgsType, Int, Args, Arg } from "type-graphql";
import { Min, Max } from "class-validator";
import { Post } from "../objectType/PostType";
import {
  CreatePostArgs,
  CreatePostInputType,
} from "../argsType/createPostArgs";

@Resolver()
export class PostResolver {
  @Query(() => String)
  async helloWorld() {
    return "this.helloWorld";
  }

  @Mutation(() => Post)
  async createPostByArgs(
    @Args() allArgs: CreatePostArgs
  ): Promise<Post | void> {
    const returnPost = new Post();
    returnPost.description = allArgs.description;
    returnPost.ownerId = allArgs.ownerId;
    return returnPost;
  }

  @Mutation(() => Post)
  async createPostByInput(
    @Arg('singleParametr') singleParametr: CreatePostInputType
  ): Promise<Post | void> {
    const returnPost = new Post();
    returnPost.description = singleParametr.description;
    returnPost.ownerId = singleParametr.ownerId;
    return returnPost;
  }
}
