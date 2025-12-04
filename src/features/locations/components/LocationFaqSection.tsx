import Section from "@/components/section/Section";
import Container from "@/components/container/Container";

type LocationFaqSectionProps = {
  id: string;
  city: string;
  faqs: { question: string; answer: string }[];
};

export default function LocationFaqSection({
  id,
  city,
  faqs,
}: LocationFaqSectionProps) {
  return (
    <div id={id}>
      <Section>
        <Container>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            {city} İçin Sık Sorulan Sorular
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="border border-gray-200 rounded-xl bg-white"
              >
                <summary className="cursor-pointer px-4 py-3 font-semibold text-gray-900">
                  {faq.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
