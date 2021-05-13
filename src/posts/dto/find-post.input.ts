import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FindPostInput {
  @Field(type => String, { nullable: true })
  _id?: string;

  @Field(type => String, { nullable: true })
  title?: string;

  @Field(type => String, { nullable: true })
  content?: string;
  
  @Field(type => String, { nullable: true })
  authorId?: String;
}
