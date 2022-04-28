import { Exclude } from "class-transformer";

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastname: string;
}

export class SerializedUser {
  id: number;
  email: string;

  @Exclude()
  password: string;

  firstName: string;
  lastname: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this.email, partial);
  }
}
  