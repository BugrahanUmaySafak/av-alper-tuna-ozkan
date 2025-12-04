import Section from "@/components/section/Section";
import Container from "@/components/container/Container";

type LocationProcessSectionProps = {
  id: string;
  steps: { title: string; description: string }[];
};

export default function LocationProcessSection({
  id,
  steps,
}: LocationProcessSectionProps) {
  return (
    <div id={id}>
      <Section>
        <Container>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Süreç ve Yol Haritası
          </h2>
          <ol className="space-y-4">
            {steps.map((step, idx) => (
              <li key={step.title} className="flex gap-4">
                <span className="text-blue-700 font-semibold text-xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </div>
  );
}
