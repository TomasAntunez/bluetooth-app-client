
export type User = {
  name: string;
  email: string;
  password: string;
}

export type LoginUserScheme = Omit< User, 'name' >

export type RegisterUserSchema = User & {
  repeatPassword: string;
}
