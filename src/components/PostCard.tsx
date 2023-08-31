import { useState } from "react";
import { Modal } from "./Modal";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdOutlineShare } from "react-icons/md";
import { tv } from "tailwind-variants";
import useJob from "../hooks/useJob";
import { Post } from "../../data";

const PostCard = ({ post, isJob = false }: { post: Post; isJob?: boolean }) => {
  const { addApliJob, alreadyAplicated, removeApliJob } = useJob();

  const RandonLikeCount = () => {
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
  };
  const [likeCount, setLikeCount] = useState<number>(RandonLikeCount);

  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = () => setOpen((value) => !value);

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

  const tv_desc = tv({
    base: "line-clamp-3",
    variants: {
      show: {
        true: "line-clamp-none",
      },
    },
    defaultVariants: {
      show: false,
    },
  });

  return (
    <>
      <li className="flex gap-2 w-full relative after:absolute after:content-[''] after:w-6 after:h-6 after:border-r-2 after:border-b-2 after:bottom-0 after:right-0 after:border-forest-50 before:absolute before:content-[''] before:w-6 before:h-6 before:border-r-2 before:border-t-2 before:top-0 before:right-0 before:border-forest-50">
        <div className="flex flex-col items-center gap-2">
          <span className="border w-8 h-full max-h-8 rounded-full flex items-center justify-center">
            {post.user.split("")[0]}
          </span>
          <div className="w-[2px] border h-full" />
        </div>
        <div className="flex flex-col w-full gap-2 overflow-hidden">
          <h6 className="pb-4">{post.user}</h6>
          <h4 className="text-lg font-semibold">{post.title}</h4>
          <button onClick={toggleDesc} className="text-start">
            <p className={tv_desc({ show: showDesc })}>{post.desc}</p>
          </button>
          {post.img && (
            <button onClick={toggleModal}>
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[320px] rounded border border-forest-50 inset-0 bg-cover object-cover"
              />
            </button>
          )}
          <div className="flex items-center text-xl gap-2 py-2">
            {!liked ? (
              <button onClick={like}>
                <AiOutlineLike />
              </button>
            ) : (
              <button onClick={unLike}>
                <AiFillLike className="animate-likeAction" />
              </button>
            )}
            <span>{likeCount}</span>
            <button>
              <MdOutlineShare />
            </button>
            {isJob &&
              (!alreadyAplicated(post) ? (
                <button
                  onClick={() => addApliJob(post)}
                  className="border py-1 px-2 rounded"
                >
                  Aplicar
                </button>
              ) : (
                <button
                  onClick={() => removeApliJob(post)}
                  className="border py-1 px-2 rounded"
                >
                  Desaplicar
                </button>
              ))}
          </div>
        </div>
      </li>
      {open && (
        <Modal toggleModal={toggleModal} title={post.title}>
          <div className="p-4 bg-forest-950">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[320px] rounded border border-forest-50 inset-0 bg-cover object-contain"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default PostCard;
