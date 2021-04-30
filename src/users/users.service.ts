import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  
  async findOneByEmail(email: string): Promise<User>  {
    console.log(email);
    return this.userModel.findOne({email: email}).exec();
  }
  
  async findOneById(_id: string): Promise<User> {
    return this.userModel.findById(_id).exec();
  } 
  
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  } 
}
