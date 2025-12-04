import { useState } from "react";
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
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (question: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  };

  return (
    <div id={id}>
      <Section>
        <Container>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            {city} İçin Sık Sorulan Sorular
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openItems.has(faq.question);

              return (
                <div
                  key={faq.question}
                  className="border border-gray-200 rounded-xl bg-white"
                >
                  <button
                    type="button"
                    className="w-full text-left px-4 py-3 font-semibold text-gray-900 flex justify-between items-center"
                    onClick={() => toggleItem(faq.question)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
