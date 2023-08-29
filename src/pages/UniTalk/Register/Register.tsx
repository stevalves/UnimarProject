import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "../../../components/Form";
import { registerSchema, tRegister } from "./schemas";
import Input from "../../../components/Input/Input";

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegister>({
    resolver: zodResolver(registerSchema),
  });

  const signIn = (data: tRegister) => {
    // Função Registro
    console.log(data);

  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-forest-700 to-forest-800 flex flex-col font-logo">
      <Form title="Seja bem vindo(a)!" onSubmit={handleSubmit(signIn)}>
        <Input
          id="name"
          label="Nome"
          placeholder="Digitar Nome"
          type="text"
          errorMessage={errors.name?.message}
          {...register("name")}
          required
        />
        <Input
          id="email"
          label="Email"
          placeholder="Digitar Email"
          type="email"
          errorMessage={errors.email?.message}
          {...register("email")}
          required
        />
        <Input
          id="password"
          label="Senha"
          placeholder="Digitar Senha"
          type="password"
          errorMessage={errors.password?.message}
          {...register("password")}
          required
        />
        <Input
          id="confirm"
          label="Confirmar Senha"
          placeholder="Confirmar Senha"
          type="password"
          errorMessage={errors.confirm?.message}
          {...register("confirm")}
          required
        />
        <button type="submit" className="w-max py-1 px-6 border-2 border-forest-900 rounded hover:text-white hover:bg-forest-900 duration-300 transition-colors">Cadastrar</button>
        <span>Já tem conta?</span>
        <Link to="/unitalk/login" className="underline">
          Login
        </Link>
      </Form>
    </main>
  )
}

export default Register