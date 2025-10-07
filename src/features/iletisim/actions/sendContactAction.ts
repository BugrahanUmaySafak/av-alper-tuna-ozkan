import { contactSchema, WizardSchema } from "../components/Form";

export async function sendContactMessage(data: WizardSchema) {
  const validated = contactSchema().safeParse(data);

  if (!validated.success) {
    throw new Error("Geçersiz form verisi.");
  }

  const response = await fetch(`http://localhost:3000/api/iletisim`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validated.data),
  });

  if (!response.ok) {
    const result = await response.json();
    throw new Error(result?.message || "Mesaj gönderilemedi");
  }

  return await response.json();
}
