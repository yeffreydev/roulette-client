export interface UserI {
  id?: string | number;
  username: string;
  email: string;
  age: number;
  password?: string;
  confirmPassword?: string;
}
