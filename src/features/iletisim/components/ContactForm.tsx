// src/features/iletisim/components/ContactForm.tsx
"use client";

import { useRef, useEffect } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { useContactSubmit } from "@/features/iletisim/hooks/useContactSubmit";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";

interface ContactFormProps {
  onSuccess?: (message: string) => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const { isSubmitting, submit } = useContactSubmit();

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    defaultValues: { name: "", email: "", phone: "", title: "", content: "" },
  });

  const email = form.watch("email");
  const phone = form.watch("phone");
  useEffect(() => {
    if (email || phone) form.clearErrors(["email", "phone"]);
  }, [email, phone, form]);

  const onInvalid = (errors: FieldErrors<ContactInput>) => {
    const order: (keyof ContactInput)[] = [
      "name",
      "email",
      "phone",
      "title",
      "content",
    ];
    for (const key of order) {
      const msg = errors[key]?.message as string | undefined;
      if (msg) {
        if (
          key === "email" &&
          !form.getValues("email") &&
          !form.getValues("phone")
        ) {
          form.setError("phone", { type: "manual", message: msg });
        }
        toast.error(msg);
        form.setFocus(key);
        return;
      }
    }
    toast.error("Lütfen zorunlu alanları kontrol edin.");
  };

  const onSubmit = async (data: ContactInput) => {
    const res = await submit(data);
    if (!res.ok) {
      toast.error(res.message);
      return;
    }

    const message =
      "Mesajınız başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.";
    toast.success(message);
    onSuccess?.(message);
    form.reset();
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const invalidOverride =
    "data-[invalid=true]:border-input aria-[invalid=true]:border-input " +
    "data-[invalid=true]:ring-0 aria-[invalid=true]:ring-0 " +
    "focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <Container>
      <div id="iletisim-form">
        <Section>
        <div
          ref={formRef}
          className="rounded-xl shadow-xl overflow-hidden border border-border/50 bg-card h-full"
        >
          <div className="bg-primary/10 text-primary font-medium text-center py-3 border-b border-border/50 px-2">
            Hukuki sorularınız için formu doldurun, kısa sürede dönüş yapalım.
          </div>

          <div className="p-8 lg:p-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                className="space-y-6"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Adınız Soyadınız *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={`${invalidOverride} h-11 bg-background/50`}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          E-posta
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className={`${invalidOverride} h-11 bg-background/50`}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Telefon
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            {...field}
                            className={`${invalidOverride} h-11 bg-background/50`}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Konu *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={`${invalidOverride} h-11 bg-background/50`}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground">
                        Mesajınız *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          {...field}
                          className={`${invalidOverride} bg-background/50 resize-none`}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  variant="default"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 gap-2 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Mesajı Gönder
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        </Section>
      </div>
    </Container>
  );
}
