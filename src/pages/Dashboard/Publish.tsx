import { BsFillImageFill, BsCameraVideo } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

const Publish = () => {
  const { user } = useAuth();

  return (
    <section className="border-b border-forest-50 p-4 flex flex-col gap-4">
      <div className="flex gap-2 items-center mb-2 w-full">
        <span className="w-8 h-8 flex items-center justify-center text-3xl p-6 rounded-full border">
          {user.split("")[0]}
        </span>
        <h6>{user}</h6>
      </div>
      <textarea
        name="post"
        id="publi"
        className="bg-forest-800 p-2 text-forest-50 resize-none placeholder:text-forest-50/75 w-full rounded min-h-[150px]"
        placeholder="Iniciar um assunto"
      />
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <button className="w-max border p-2 rounded flex items-center gap-2">
            <BsFillImageFill />
            Imagem
          </button>
          <button className="w-max border p-2 rounded flex items-center gap-2">
            <BsCameraVideo />
            Vídeo
          </button>
        </div>
        <button className="w-max border p-2 rounded">Publicar</button>
      </div>
    </section>
  );
};

export default Publish;
