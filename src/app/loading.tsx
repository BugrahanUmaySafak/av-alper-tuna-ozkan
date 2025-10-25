export default function Loading() {
  return (
    <div
      className="min-h-dvh grid place-items-center bg-[#fdf8f2]"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center">
        <div
          className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"
          aria-hidden="true"
        />
        <p className="mt-3 text-sm text-gray-700">Yükleniyor…</p>
      </div>
    </div>
  );
}
