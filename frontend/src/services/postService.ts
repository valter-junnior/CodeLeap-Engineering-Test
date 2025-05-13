import axios from "axios";
import { store } from "@/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export interface Page<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Post {
  id: number;
  username: string;
  title: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

const postService = {
  async getAll(): Promise<Page<Post>> {
    const response = await api.get("/posts/");
    return response.data as Page<Post>;
  },

  async create(title: string, content: string): Promise<Post> {
    const state = store.getState();
    const username = state.auth.username;

    const response = await api.post("/posts/", { title, content, username });
    return response.data;
  },

  async update(id: number, title: string, content: string): Promise<Post> {
    const state = store.getState();
    const username = state.auth.username;

    const response = await api.put(`/posts/${id}/`, { title, content, username });
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/posts/${id}/`);
  },
};

export default postService;
