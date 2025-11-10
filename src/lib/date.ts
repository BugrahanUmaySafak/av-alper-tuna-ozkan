export function formatDateTR(iso?: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function getDisplayDate(
  createdAt: string,
  updatedAt?: string | null
): { text: string; isUpdated: boolean } {
  if (updatedAt) {
    return {
      text: `Güncellendi: ${formatDateTR(updatedAt)}`,
      isUpdated: true,
    };
  }
  return { text: formatDateTR(createdAt), isUpdated: false };
}
