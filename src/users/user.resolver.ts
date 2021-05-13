import { Args, Resolver, Query, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { FindPostInput } from "src/posts/dto/find-post.input";
import { Post } from "src/posts/models/post.model";
import { PostsService } from "src/posts/posts.service";
import { CreateUserInput } from "./dto/create-user.input";
import { User } from "./models/user.model";
import { UsersService } from "./users.service";

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  @Query(returns => [User], { name: 'users' })
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query(returns => User, { name: 'user' })
  async getUserById(
    @Args('id', { type: () => String }) id: string,
  ) {
    return this.usersService.findOneById(id);
  }
  
  @Mutation(returns => User, { name: 'user' })
  async createUser(
    @Args('firstName', { type: () => String }) firstName: string,
    @Args('lastName', { type: () => String }) lastName: string,
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    const newUser : CreateUserInput = { firstName, lastName, email, password }
    return this.usersService.create(newUser);
  }

  // @Query(returns => User, { name: 'user' })
  // async getUserByEmail(
  //   @Args('email', { type: () => String }) email: string,
  // ) {
  //   return this.usersService.findOneByEmail(email);
  // }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() user: User) {
    const { _id } = user;
    return (await this.usersService.findOneById(_id)).posts;;
  }
}