interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative bg-[#fff7ee] py-24 border-b border-gray-200 text-gray-900">
      <div className="absolute top-10 left-0 h-32 w-1 bg-yellow-600 rounded-r-lg" />
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
        <div className="h-1 w-15 bg-yellow-600 mx-auto rounded mb-6" />
        {description && (
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
      <div className="absolute bottom-10 right-0 h-32 w-1 bg-yellow-600 rounded-r-lg" />
    </section>
  );
}
