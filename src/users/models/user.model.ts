
// Schema de User para GraphQL
import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from "./../../posts/models/post.model";

@ObjectType()
export class User {
  @Field(type => String)
  _id: string;

  @Field(type => String, { nullable: true })
  firstName?: string;

  @Field(type => String, { nullable: true })
  lastName?: string;

  @Field(type => String, { nullable: true })
  email?: string;

  @Field(type => String, { nullable: true })
  password?: string;

  @Field(type => [Post], { nullable: true })
  posts?: Post[];
}
