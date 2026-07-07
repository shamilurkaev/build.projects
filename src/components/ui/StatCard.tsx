interface StatCardProps {
  value: string;
  title: string;
}

export default function StatCard({
  value,
  title,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-gray-800 bg-[#1F2937] p-10 text-center transition hover:border-orange-500 hover:-translate-y-1">

      <h3 className="text-5xl font-bold text-orange-500">
        {value}
      </h3>

      <p className="mt-4 text-gray-400 text-lg">
        {title}
      </p>

    </div>
  );
}