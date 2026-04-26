import { CheckCircle2, FolderKanban, Globe, Layers3 } from "lucide-react";

function FeaturedProjectPanel({
  type,
  category,
  title,
  previewLabel,
  description,
  tech = [],
  highlights = [],
  githubLink,
  liveLink,
  status,
  year,
  alignment = "left",
}) {
  const isReversed = alignment === "right";

  return (
    <article className="rounded-[2rem] border border-blue-400/10 bg-gradient-to-b from-blue-400/[0.05] to-white/[0.02] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-6 lg:p-8">
      <div
        className={`grid gap-8 lg:grid-cols-2 lg:gap-10 ${
          isReversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 text-zinc-400">
                <FolderKanban size={16} />
                <span className="text-xs uppercase tracking-[0.25em] sm:text-sm">
                  {type}
                </span>
              </div>

              {category ? (
                <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300">
                  {category}
                </span>
              ) : null}

              {status ? (
                <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300">
                  {status}
                </span>
              ) : null}

              {year ? (
                <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300">
                  {year}
                </span>
              ) : null}
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              {description}
            </p>

            {tech.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}

            {highlights.length ? (
              <div className="mt-6">
                <p className="text-sm font-medium text-white">Key points</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-blue-400"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {githubLink ? (
              <a
                href={githubLink}
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 px-4 py-2 text-sm text-white transition hover:bg-blue-400 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={16} />
                <span>GitHub</span>
              </a>
            ) : null}

            {liveLink ? (
              <a
                href={liveLink}
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 px-4 py-2 text-sm text-white transition hover:bg-blue-400 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={16} />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative flex min-h-[260px] items-end overflow-hidden rounded-[1.75rem] border border-blue-400/10 bg-black/40 p-5 sm:min-h-[320px] lg:min-h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-zinc-300">
            <Layers3 size={14} className="text-blue-400" />
            <span>{previewLabel || "Project"}</span>
          </div>

          <div className="relative z-10 max-w-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              System Panel
            </p>
            <h4 className="mt-3 text-2xl font-semibold text-white">{title}</h4>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              A featured panel designed to highlight project structure,
              implementation direction, and technical identity.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedProjectPanel;