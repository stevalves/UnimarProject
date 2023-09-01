import { useState } from "react";
import RandomNumber from "../../utils/RandomNumber";

const usePostCard = () => {
  const [likeCount, setLikeCount] = useState<number>(RandomNumber(1, 20));

  const [openImgModal, setOpenImgModal] = useState<boolean>(false);
  const toggleImgModal = () => setOpenImgModal((value) => !value);

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const toggleEditModal = () => setOpenEditModal((value) => !value);

  const [liked, setLiked] = useState<boolean>(false);

  const [showDesc, setShowDesc] = useState<boolean>(false);
  const toggleDesc = () => setShowDesc((value) => !value);

  const like = () => {
    setLikeCount(likeCount + 1);
    setLiked(true);
  };

  const unLike = () => {
    setLikeCount(likeCount - 1);
    setLiked(false);
  };

  return {
    openEditModal,
    toggleEditModal,
    like,
    likeCount,
    liked,
    toggleImgModal,
    showDesc,
    toggleDesc,
    unLike,
    openImgModal,
  };
};

export default usePostCard;
