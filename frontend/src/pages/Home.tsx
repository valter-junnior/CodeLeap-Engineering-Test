import PostForm from "@/components/PostForm";
import PostCard from "@/components/PostCard";
import { useEffect, useState } from "react";
import postService, { type Post } from "@/services/postService";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getAll();
        setPosts(data.results);
      } catch (err) {
        console.error("Failed to load posts", err);
      }
    };
    fetchPosts();
  }, []);

  const handleCreate = async (title: string, content: string) => {
    try {
      const newPost = await postService.create(title, content);
      setPosts([newPost, ...posts]);
    } catch (err) {
      console.error("Failed to create post", err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await postService.delete(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Failed to delete post", err);
    }
  };

  const handleEdit = async (id: number, title: string, content: string) => {
    try {
      const updatedPost = await postService.update(id, title, content);
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updatedPost } : p))
      );
    } catch (err) {
      console.error("Failed to update post", err);
    }
  };

  const getTimeAgo = (dateStr: string | Date) => {
    const date = new Date(dateStr);
    const diff = (Date.now() - date.getTime()) / 1000 / 60;
    return `${Math.floor(diff)} minutes ago`;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-xl font-bold bg-primary text-white p-4 rounded-t-md">
        CodeLeap Network
      </div>
      <div className="border rounded-b-md p-4 bg-white">
        <div className="bg-white p-4 border rounded-md mb-6">
          <h2 className="text-lg font-bold mb-4">What's on your mind?</h2>
          <PostForm onSubmit={handleCreate} />
        </div>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.username}
            timeAgo={getTimeAgo(post.created_at ?? new Date())}
            onDelete={() => handleDelete(post.id)}
            onEdit={(newTitle, newContent) =>
              handleEdit(post.id, newTitle, newContent)
            }
          />
        ))}
      </div>
    </div>
  );
}
