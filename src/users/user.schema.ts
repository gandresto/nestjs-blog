// Modelo que usa Mongoose como schema
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Post } from './../posts/post.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop()
  lastName?: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  posts?: Post[];

}

export const UserSchema = SchemaFactory.createForClass(User);