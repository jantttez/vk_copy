import { Theme } from "./Theme";

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
  status: string;
  email: string;
  password: string;
  token: string;
  userTheme: Theme;
  isPostView: visibility;
}
