import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";
import useJob from "../../hooks/useJob";

const AppliedJobs = () => {
  const { jobs } = useJob();

  return (
    <main className="rounded-top bg-black p-2 w-full xl:4/6 min-h-screen z-10 lg:px-32 text-forest-50">
      <ul className="p-4 flex flex-col gap-16">
        {jobs.length ? (
          jobs.map((post) => <PostCard post={post} key={post.id} isJob />)
        ) : (
          <div className="py-4 flex justify-center items-center flex-col">
            <h6 className="text-center">Nenhuma vaga encontrada!</h6>
            <Link to="/dashboard/jobs">Explorar!</Link>
          </div>
        )}
      </ul>
      {Boolean(jobs.length) && (
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
