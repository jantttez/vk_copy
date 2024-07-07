export interface Post {
  id: string;
  createdAt: number;
  authorId: string;
  authorPhoto: string;
  authorName: string;
  postContent: string;
  postImage?: string | null;
  likes: string[];
}
