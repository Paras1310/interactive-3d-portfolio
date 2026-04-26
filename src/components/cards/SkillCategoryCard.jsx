import { Cpu } from "lucide-react";

function SkillCategoryCard({ title, items = [] }) {
  return (
    <article className="group h-full rounded-[1.75rem] border border-blue-400/10 bg-gradient-to-b from-blue-400/[0.05] to-white/[0.02] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:from-blue-400/[0.08] hover:to-white/[0.03] sm:p-6">
      <div className="flex items-center gap-2">
        <Cpu size={17} className="text-blue-400" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-sm text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillCategoryCard;