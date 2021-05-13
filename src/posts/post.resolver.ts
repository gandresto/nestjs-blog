import { Args, Resolver, Query, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { FindPostInput } from "./dto/find-post.input";
import { Post } from "./models/post.model";
import { PostsService } from "./posts.service";
// import { UsersService } from "./users.service";

@Resolver(of => Post)
export class PostResolver {
  constructor(
    private postsService: PostsService,
  ) {}

  @Query(returns => [Post], { name: 'posts' })
  async getPosts() {
    return this.postsService.findAll();
  }
  
  // @Query(returns => [Post], { name: 'posts' })
  // async getPosts(@Args('authorId', {nullable:true}) authorId?: string) {
  //   const filterFields : FindPostInput = {authorId};
  //   return this.postsService.find(filterFields);
  // }

}