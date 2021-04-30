import { Field, ObjectType } from '@nestjs/graphql';
import { User } from "./../../users/models/user.model";

@ObjectType()
export class Post {
  @Field(type => String)
  _id: string;

  @Field(type => String)
  title: string;

  @Field({ nullable: true })
  content: string;
  
  @Field(type => User)
  author: User;
}
