export interface Post {
  id: string;
  createdAt: string;
  authorId: string;
  authorPhoto: string;
  authorName: string;
  postContent: string;
  postImage?: string | null;
  likes: string;
}
