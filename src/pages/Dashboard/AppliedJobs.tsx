import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";
import useJob from "../../hooks/useJob";

const AppliedJobs = () => {
  const { apliJobs } = useJob();

  return (
    <main className="rounded-top z-10 w-full min-h-screen xl:w-4/6 lg:px-32 bg-black p-2 text-forest-50">
      <ul className="p-4 flex flex-col gap-16">
        {apliJobs.length ? (
          apliJobs.map((post) => <PostCard post={post} key={post.id} isJob />)
        ) : (
          <div className="py-4 flex justify-center items-center flex-col">
            <h6 className="text-center">Nenhuma vaga encontrada!</h6>
            <Link to="/dashboard/jobs">Explorar!</Link>
          </div>
        )}
      </ul>
      {Boolean(apliJobs.length) && (
        <div className="flex flex-col my-8 w-full items-center">
          <h6>Parece que você chegou ao fim!</h6>
          <a href="#" className="w-max text-center hover:underline">
            Voltar ao topo
          </a>
        </div>
      )}
    </main>
  );
};

export default AppliedJobs;
