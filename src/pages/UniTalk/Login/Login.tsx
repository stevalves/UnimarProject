import { Link, useNavigate } from "react-router-dom";
import { loginSchema, tLogin } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import Form from "../../../components/Form";

const Login = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: tLogin) => {
    // login function
    localStorage.setItem("@USERNAME", data.name)
    navigate("/unitalk/dashboard")
    console.log(data);

  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-forest-700 to-forest-800 flex flex-col font-logo">
      <Form title="Bem vindo de volta!" onSubmit={handleSubmit(handleLogin)}>
        <Input
          id="nome"
          label="Nome"
          placeholder="Digitar Nome"
          type="text"
          errorMessage={errors.name?.message}
          {...register("name")}
          required
        />
        <Input
          id="password"
          label="Senha"
          placeholder="Digitar Senha"
          type="password"
          className={errors.password ? "err" : ""}
          errorMessage={errors.password?.message}
          {...register("password")}
          required
        />
        <button type="submit" className="w-max py-1 px-6 border-2 border-forest-900 rounded hover:text-white hover:bg-forest-900 duration-300 transition-colors">Entrar</button>
        <span>Ainda não tem conta?</span>
        <Link to="/unitalk/register" className="underline">
          Cadastrar
        </Link>
      </Form>
    </main>
  )
}

export default Login