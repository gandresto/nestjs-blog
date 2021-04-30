
import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from "./../../posts/models/post.model";

@ObjectType()
export class User {
  @Field(type => String)
  _id: string;

  @Field(type => String)
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => String)
  email?: string;

  @Field(type => String)
  password?: string;

  @Field(type => [Post])
  posts?: Post[];
}
