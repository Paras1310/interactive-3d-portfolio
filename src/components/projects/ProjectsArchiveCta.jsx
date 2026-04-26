import { ArrowRight, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectsArchiveCta({ totalProjects, featuredCount }) {
  const additionalCount = totalProjects - featuredCount;

  return (
    <article className="rounded-[2rem] border border-blue-400/10 bg-gradient-to-b from-blue-400/[0.05] to-white/[0.02] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-zinc-400">
            <FolderOpen size={16} className="text-blue-400" />
            <span className="text-xs uppercase tracking-[0.25em] sm:text-sm">
              Archive Ready
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            More Projects
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            The homepage shows selected featured work only. Explore the full
            archive to view {additionalCount} more project
            {additionalCount > 1 ? "s" : ""} and future additions as the
            portfolio grows.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300">
              {totalProjects} Total Project{totalProjects > 1 ? "s" : ""}
            </span>
            <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300">
              {featuredCount} Featured
            </span>
            <span className="rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1 text-xs text-zinc-300">
              {additionalCount} More in Archive
            </span>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/35 hover:bg-blue-400/[0.12]"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="text-blue-400" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectsArchiveCta;