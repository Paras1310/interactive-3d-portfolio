function SectionHeading({ title, subtitle, description, align = "left" }) {
  const alignmentClasses =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${alignmentClasses}`}>
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
        {title}
      </p>

      <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {subtitle}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:mt-5 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;