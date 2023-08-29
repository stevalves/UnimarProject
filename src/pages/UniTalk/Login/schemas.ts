import { z } from "zod"

export const loginSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório."),
  password: z.string().nonempty("Senha é obrigatória.")
})

export type tLogin = z.infer<typeof loginSchema>