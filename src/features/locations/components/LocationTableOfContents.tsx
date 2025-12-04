import Section from "@/components/section/Section";
import Container from "@/components/container/Container";

export type TocItem = { label: string; id: string };

export default function LocationTableOfContents({
  items,
}: {
  items: TocItem[];
}) {
  return (
    <Section>
      <Container>
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <p className="font-semibold text-sm text-gray-600 mb-3">
            İçindekiler
          </p>
          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm px-3 py-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
