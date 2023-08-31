import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Post, PostsData } from "../../data";

interface iPostProviderProps {
  children: React.ReactNode;
}
interface iPostContextProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  addPost: (job: Post) => void;
  removePost: (job: Post) => void;
}

export const PostContext = createContext<iPostContextProps>(
  {} as iPostContextProps
);

export const PostProvider = ({ children }: iPostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>(PostsData);

  const addPost = (newPost: Post) => {
    setPosts(posts => [newPost, ...posts])
    toast.success("Post adicionado.");
  };

  const removePost = (post: Post) => {
    const newJobs = [...posts];
    const indexJob = posts.findIndex((value) => value.id === post.id);
    newJobs.splice(indexJob, 1);
    setPosts(newJobs);
    toast.success("Post removido.");
  };

  return (
    <PostContext.Provider
      value={{ addPost, posts, setPosts, removePost }}
    >
      {children}
    </PostContext.Provider>
  );
};
