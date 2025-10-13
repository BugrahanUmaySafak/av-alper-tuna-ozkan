"use client";

import { useCallback, useState } from "react";
import type { ContactInput } from "@/lib/validation/contact";
import {
  postContactClient,
  pickFirstZodError,
} from "../actions/contact.client";

export function useContactSubmit() {
  const [isSubmitting, setSubmitting] = useState(false);

  const submit = useCallback(async (data: ContactInput) => {
    setSubmitting(true);
    try {
      const res = await postContactClient(data);
      if (!res.ok) {
        return { ok: false as const, message: pickFirstZodError(res.error) };
      }
      return { ok: true as const, data: res.data };
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { isSubmitting, submit };
}
