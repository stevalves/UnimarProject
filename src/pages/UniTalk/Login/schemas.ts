import { z } from "zod"

export const loginSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório.").min(4, "Insira no mínimo 4 digitos.").max(12, "Insira no máximo 12 digitos."),
  password: z.string().nonempty("Senha é obrigatória.")
})

export type tLogin = z.infer<typeof loginSchema>