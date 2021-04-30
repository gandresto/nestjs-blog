export class CreateUserDto {
  _id: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}