import PostCard from "../../components/PostCard";
import useJob from "../../hooks/useJob";
import JobPublish from "./JobPublish";

const Jobs = () => {

  const { jobs } = useJob()

  return (
    <main className="rounded-top z-10 w-full xl:w-4/6 lg:px-32 bg-black p-2 text-forest-50">
      <JobPublish />
      <ul className="p-4 flex flex-col gap-16">
        {jobs.map((post) => (
          <PostCard post={post} key={post.id} isJob />
        ))}
      </ul>
      <div className="flex flex-col my-8 w-full items-center">
        <h6>Parece que você chegou ao fim!</h6>
        <a href="#" className="w-max text-center hover:underline">
          Voltar ao topo
        </a>
      </div>
    </main>
  );
};

export default Jobs;
