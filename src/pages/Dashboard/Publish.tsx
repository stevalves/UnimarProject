import { BsFillImageFill, BsCameraVideo } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import usePost from "../../hooks/usePost";

const schema = z.object({
  title: z.string().nonempty(),
  desc: z.string().nonempty()
})

type tPost = z.infer<typeof schema>

const Publish = () => {
  const { user } = useAuth();
  const { setPosts } = usePost()

  const { register, handleSubmit } = useForm<tPost>({ resolver: zodResolver(schema) })

  const addPost = (data: tPost) => {
    setPosts(jobs => [{ id: jobs.length + 1 + "", user: user, desc: data.desc, title: data.title }, ...jobs])
  }

  return (
    <form onSubmit={handleSubmit(addPost)} className="border-b border-forest-50 p-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center mb-2 w-full">
        <span className="w-8 h-8 flex items-center justify-center text-3xl p-6 rounded-full border">
          {user.split("")[0]}
        </span>
        <h6>{user}</h6>
      </div>
      <input type="text" required {...register("title")} placeholder="Insira um título" className="bg-forest-800 p-2 text-forest-50 resize-none placeholder:text-forest-50/75 w-full rounded" />
      <textarea
        id="publi"
        className="bg-forest-800 p-2 text-forest-50 resize-none placeholder:text-forest-50/75 w-full rounded min-h-[150px]"
        placeholder="Iniciar um assunto"
        required
        {...register("desc")}
      />
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <button type="button" className="w-max border p-2 rounded flex items-center gap-2">
            <BsFillImageFill />
            <span className="hidden sm:inline">Imagem</span>
          </button>
          <button type="button" className="w-max border p-2 rounded flex items-center gap-2">
            <BsCameraVideo />
            <span className="hidden sm:inline">Vídeo</span>
          </button>
        </div>
        <button type="submit" className="w-max border p-2 rounded">Publicar</button>
      </div>
    </form>
  );
};

export default Publish;
