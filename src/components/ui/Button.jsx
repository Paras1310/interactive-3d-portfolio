function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300";

  const variantClasses =
    variant === "secondary"
      ? "border border-blue-400/20 bg-blue-400/[0.04] text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-400/[0.08]"
      : "border border-blue-400/30 bg-blue-400 text-white shadow-[0_0_24px_rgba(59,130,246,0.18)] hover:-translate-y-0.5 hover:bg-blue-500";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;