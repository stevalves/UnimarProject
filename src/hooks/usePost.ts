import { useContext } from "react";
import { PostContext } from "../providers/PostProvider";

const usePost = () => {
  const postContext = useContext(PostContext);

  return postContext;
};

export default usePost;
