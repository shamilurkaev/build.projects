interface Props {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mb-16 text-center">

      <span className="uppercase tracking-[6px] text-orange-500 font-semibold">
        {subtitle}
      </span>

      <h2 className="mt-5 text-5xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-gray-400 leading-8">
          {description}
        </p>
      )}

    </div>
  );
}