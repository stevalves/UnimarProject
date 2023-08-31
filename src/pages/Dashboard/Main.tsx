import PostsList from "./PostsList";
import Publish from "./Publish";

const Main = () => {
  return (
    <main className="rounded-top w-full xl:w-4/6 bg-black p-2 text-forest-50">
      <Publish />
      <PostsList />
      <div className="flex flex-col my-8 w-full items-center">
        <h6>Parece que você chegou ao fim!</h6>
        <a href="#" className="w-max text-center hover:underline">
          Voltar ao topo
        </a>
      </div>
    </main>
  );
};

export default Main;
