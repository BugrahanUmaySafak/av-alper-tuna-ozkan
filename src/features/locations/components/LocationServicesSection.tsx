import Section from "@/components/section/Section";
import Container from "@/components/container/Container";

type LocationServicesSectionProps = {
  id: string;
  services: { title: string; description: string }[];
};

export default function LocationServicesSection({
  id,
  services,
}: LocationServicesSectionProps) {
  return (
    <div id={id}>
      <Section>
        <Container>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Hizmetlerimiz
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
