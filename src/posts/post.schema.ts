
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  _id: string;

  @Prop()
  title: string;

  @Prop()
  content: string;
  
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  author: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);