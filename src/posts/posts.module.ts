import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { PostResolver } from './post.resolver';
import { Post, PostSchema } from './post.schema';
import { PostsService } from './posts.service';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  providers: [
    PostsService, 
    PostResolver, 
    UsersService,
  ],
  exports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    PostsService,
  ],
})
export class PostsModule {}
