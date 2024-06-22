import { Theme } from "./Theme";

enum visibility {
  all,
  friends,
}

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  userName: string;
  status: string;
  email: string;
  password: string;
  token: string;
  userTheme: Theme;
  isPostView: visibility;
}
