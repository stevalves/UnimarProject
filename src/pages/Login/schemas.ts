import { z } from "zod"

export const loginSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório.").min(4, "Insira no mínimo 4 digitos.").max(16, "Insira no máximo 16 digitos."),
  password: z.string().nonempty("Senha é obrigatória.")
})

export type tLogin = z.infer<typeof loginSchema>