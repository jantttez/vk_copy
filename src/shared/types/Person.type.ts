import { Friend } from "./Friend.type";

export interface Person extends Friend {
  friends: string[];
}
