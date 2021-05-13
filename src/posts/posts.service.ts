import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-post.input';
import { Post, PostDocument } from './post.schema';
import { FindPostInput } from './dto/find-post.input';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>
  ) {}
  
  async create(createPostInput: CreatePostInput): Promise<Post> {
    const createdPost = new this.postModel(createPostInput);
    return createdPost.save();
  }
  
  async findOneById(_id: string): Promise<Post> {
    return this.postModel.findById(_id).exec();
  } 
  
  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  } 
  
  async find(findPostInput: FindPostInput): Promise<Post[]> {
    return this.postModel.find(findPostInput).exec();
  } 
}
