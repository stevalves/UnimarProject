import { z } from "zod";
import { Modal } from "..";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";

interface iEditUserModal {
  toggleModal: () => void;
  title: string;
}

const schema = z.object({
  name: z.string().nonempty(),
});
type tUser = z.infer<typeof schema>;

const EditUserModal = ({ title, toggleModal }: iEditUserModal) => {
  const { editUser, user } = useAuth();

  const { register, handleSubmit, setValue } = useForm<tUser>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("name", user);
  }, []);

  const submit = (data: tUser) => {
    editUser(data.name);
    toggleModal();
  };

  return (
    <Modal title={title} toggleModal={toggleModal}>
      <form
        className="p-8 bg-forest-950 text-forest-50 flex flex-col gap-2"
        onSubmit={handleSubmit(submit)}
      >
        <label htmlFor="userName">Novo nome:</label>
        <input
          id="userName"
          type="text"
          required
          {...register("name")}
          placeholder="Insira um título"
          className="bg-forest-800 p-2 text-forest-50 resize-none placeholder:text-forest-50/75 w-full rounded"
        />
        <button
          type="submit"
          className="border p-2 rounded border-forest-50 hover:border-forest-950 duration-300 hover:bg-forest-50 hover:text-forest-950"
        >
          Salvar
        </button>
      </form>
    </Modal>
  );
};

export default EditUserModal;
