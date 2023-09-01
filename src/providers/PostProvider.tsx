import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Post, PostsData } from "../../data";
import { DeepPartial } from "react-hook-form";

interface iPostProviderProps {
  children: React.ReactNode;
}
interface iPostContextProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  addPost: (job: Post) => void;
  removePost: (job: Post) => void;
  editPost: (post: Post, data: DeepPartial<Post>) => void;
}

export const PostContext = createContext<iPostContextProps>(
  {} as iPostContextProps
);

export const PostProvider = ({ children }: iPostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>(PostsData);

  const addPost = (newPost: Post) => {
    setPosts((posts) => [newPost, ...posts]);
    toast.success("Post adicionado.");
  };

  const removePost = (post: Post) => {
    const newPosts = [...posts]
    const indexJob = posts.findIndex((value) => value.id === post.id);
    newPosts.splice(indexJob, 1);
    setPosts(newPosts)
    toast.success("Post removido.");
  };

  const editPost = (post: Post, data: DeepPartial<Post>) => {
    const newPosts = [...posts]
    const jobIndex = posts.findIndex((posts) => posts.id === post.id);
    newPosts[jobIndex] = { ...newPosts[jobIndex], ...data };
    setPosts(newPosts)
    toast.success("Post editado.");
  };

  return (
    <PostContext.Provider
      value={{ addPost, editPost, posts, setPosts, removePost }}
    >
      {children}
    </PostContext.Provider>
  );
};
