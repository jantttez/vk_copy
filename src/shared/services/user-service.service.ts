import { User } from "@shared/types";
import axios from "axios";

class UserService {
  private URL = "http://localhost:3000/Users";

  async getUsers() {}
  async getUsersWithParams() {}
  async getUserById() {}
  async addUser(user: User) {
    axios.post(this.URL, { ...user }).catch((e) => console.error(e));
  }
  async updateUser() {}
  async removeUser() {}
}

export const userService = new UserService();
