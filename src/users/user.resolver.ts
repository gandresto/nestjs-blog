import { Args, Resolver, Query, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { Post } from "src/posts/models/post.model";
import { PostsService } from "src/posts/posts.service";
import { User } from "./models/user.model";
import { UsersService } from "./users.service";

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    // private postsService: PostsService,
  ) {}

  @Query(returns => [User], { name: 'users' })
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query(returns => User, { name: 'user' })
  async getUserById(
    @Args('_id', { type: () => String }) _id: string,
  ) {
    return this.usersService.findOneById(_id);
  }
  
  // @Mutation(returns => User, { name: 'user' })
  // async getUserById(
  //   @Args('id', { type: () => String }) id: string,
  // ) {
  //   return this.usersService.findOneById(id);
  // }

  // @Query(returns => User, { name: 'user' })
  // async getUserByEmail(
  //   @Args('email', { type: () => String }) email: string,
  // ) {
  //   return this.usersService.findOneByEmail(email);
  // }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() user: User) {
    const { _id } = user;
    // return this.postsService.findAll({ userId: id });
    return _id;
  }
}