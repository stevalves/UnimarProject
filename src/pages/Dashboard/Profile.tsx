import { AiOutlineEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";
import EditModal from "../../components/Modal/Modals/EditModal";
import { useState } from "react";
import useJob from "../../hooks/useJob";
import EditUserModal from "../../components/Modal/Modals/EditUserModal";

const Profile = () => {
  const { user, deleteUser } = useAuth();
  const { posts, removePost } = usePost();
  const { jobs, removeJob } = useJob();

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleOpenEditModal = () => setOpenEditModal((value) => !value);

  const [openEditUserModal, setOpenEditUserModal] = useState<boolean>(false);
  const handleOpenEditUserModal = () => setOpenEditUserModal((value) => !value);

  const myPosts = posts.filter((post) => post.user === user);
  const myJobs = jobs.filter((job) => job.user === user);

  return (
    <>
      <main className="rounded-top z-10 w-full xl:w-4/6 flex flex-col gap-6 lg:px-32 bg-black p-2 text-forest-50 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl">
            <span className="w-12 h-12 font-bold text-2xl border flex justify-center items-center rounded-full">
              {user.split("")[0]}
            </span>
            <h6 className="font-medium">{user}</h6>
          </div>
          <div className="text-2xl flex gap-2">
            <button onClick={handleOpenEditUserModal}>
              <AiOutlineEdit />
            </button>
            <button onClick={deleteUser}>
              <BsTrashFill />
            </button>
          </div>
        </div>
        <h4 className="text-2xl">Meus posts:</h4>
        <ul className="flex flex-col gap-2">
          {myPosts.length ? (
            myPosts.map((post) => (
              <li key={post.id} className="flex justify-between">
                <h6 className="truncate w/1/4">{post.title}</h6>
                <div className="flex gap-2">
                  <button onClick={handleOpenEditModal}>
                    <AiOutlineEdit />
                  </button>
                  <button onClick={() => removePost(post)}>
                    <BsTrashFill />
                  </button>
                </div>
                {openEditModal && (
                  <EditModal post={post} toggleModal={handleOpenEditModal} />
                )}
              </li>
            ))
          ) : (
            <h5 className="">Nenhum post encontrado.</h5>
          )}
        </ul>
        <h4 className="text-2xl">Minha vagas:</h4>
        <ul className="flex flex-col gap-2">
          {myJobs.length ? (
            myJobs.map((post) => (
              <li key={post.id} className="flex justify-between">
                <h6 className="truncate w/1/4">{post.title}</h6>
                <div className="flex gap-2">
                  <button onClick={handleOpenEditModal}>
                    <AiOutlineEdit />
                  </button>
                  <button onClick={() => removeJob(post)}>
                    <BsTrashFill />
                  </button>
                </div>
                {openEditModal && (
                  <EditModal
                    post={post}
                    toggleModal={handleOpenEditModal}
                    isJob
                  />
                )}
              </li>
            ))
          ) : (
            <h5>Nenhuma vaga encontrada.</h5>
          )}
        </ul>
      </main>
      {openEditUserModal && (
        <EditUserModal
          title="Editar Usuário"
          toggleModal={handleOpenEditUserModal}
        />
      )}
    </>
  );
};

export default Profile;
