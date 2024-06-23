import axios from "axios";
import { Post } from "@shared/types";

class PostService {
  private URL = "http://localhost:3000/Posts";

  async getPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>(this.URL);
    return response.data;
  }

  async getUserPostsWithPagination(limit: number, page: number, userId: string) {
    try {
      const response = await axios.get(this.URL, {
        params: {
          _per_page: limit,
          _page: page,
          authorId: userId,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user posts with pagination:", error);
      return null;
    }
  }

  async getPostsWithParams(): Promise<Post[]> {
    const response = await axios.get<Post[]>(this.URL);
    return response.data;
  }

  async addPost(post: Post): Promise<Post> {
    const response = await axios.post<Post>(this.URL, {
      ...post,
    });
    return response.data;
  }
}

export const postService = new PostService();
