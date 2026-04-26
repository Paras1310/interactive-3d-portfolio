import { ArrowUpRight } from "lucide-react";

function RoadmapCard({ title, description }) {
  return (
    <article className="group h-full rounded-[1.75rem] border border-blue-400/10 bg-gradient-to-b from-blue-400/[0.05] to-white/[0.02] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:from-blue-400/[0.08] hover:to-white/[0.03] sm:p-6">
      <div className="flex items-center gap-2 text-zinc-400">
        <ArrowUpRight size={16} className="text-blue-400" />
        <span className="text-xs uppercase tracking-[0.25em]">Next Step</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-zinc-300">{description}</p>
    </article>
  );
}

export default RoadmapCard;