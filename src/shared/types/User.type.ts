import { Theme } from "./Theme.type";
import { Friend } from "./Friend.type";
import { Subscription } from "./Subscription.type";

export enum visibility {
  all = "all",
  friends = "friends",
}

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  userPhoto: string;
  name: string;
  userName: string;
  friends: Friend[];
  subscription: Subscription[];
  status: string;
  email: string;
  password: string;
  token: string;
  userTheme: Theme;
  isPostView: visibility;
  isProfileView: visibility;
}
