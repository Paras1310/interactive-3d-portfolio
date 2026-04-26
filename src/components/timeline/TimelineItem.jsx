function TimelineItem({ phase, title, description, isLast = false }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.35)]" />

      {!isLast ? (
        <div className="absolute left-[5px] top-5 h-[calc(100%-8px)] w-px bg-blue-400/15" />
      ) : null}

      <div className="rounded-[1.5rem] border border-blue-400/10 bg-gradient-to-b from-blue-400/[0.05] to-white/[0.02] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
          {phase}
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TimelineItem;