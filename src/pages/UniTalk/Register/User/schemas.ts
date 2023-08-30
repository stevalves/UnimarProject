import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().nonempty("Nome é obrigatório."),
    email: z
      .string()
      .nonempty("Email é obrigatório.")
      .email("Formato de email inválido."),
    password: z.string().nonempty("Senha é obrigatória."),
    confirm: z.string().nonempty("Repita a senha."),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["confirm"],
  });

export type tRegisterUser = z.infer<typeof registerUserSchema>;
