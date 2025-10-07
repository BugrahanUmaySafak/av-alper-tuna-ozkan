import { z } from "zod";

export const contactSchema = () =>
  z
    .object({
      name: z
        .string()
        .min(1, { message: "Lütfen adınızı ve soyadınızı girin" })
        .max(100, { message: "Ad soyad en fazla 100 karakter olabilir" }),
      email: z
        .string()
        .email({ message: "Lütfen geçerli bir e-posta adresi girin" })
        .or(z.literal(""))
        .optional(),
      phone: z
        .string()
        .regex(/^\+?[0-9\s\-()]{7,15}$/, {
          message: "Lütfen geçerli bir telefon numarası girin",
        })
        .or(z.literal(""))
        .optional(),
      title: z
        .string()
        .min(1, { message: "Lütfen konuyu girin" })
        .max(200, { message: "Konu en fazla 200 karakter olabilir" }),
      content: z
        .string()
        .min(10, { message: "Mesajınız en az 10 karakter olmalıdır" })
        .max(2000, { message: "Mesaj en fazla 2000 karakter olabilir" }),
    })
    .refine((data) => data.email || data.phone, {
      message:
        "Lütfen e-posta adresi veya telefon numarasından en az birini girin",
      path: ["email"],
    });

const schemaInstance = contactSchema();
export type WizardSchema = z.infer<typeof schemaInstance>;
