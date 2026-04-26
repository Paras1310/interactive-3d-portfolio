import { Globe, Mail } from "lucide-react";

function ContactLinkCard({ label, href }) {
  const isExternal = href.startsWith("http");
  const isMail = href.startsWith("mailto:");

  const iconMap = {
    GitHub: Globe,
    LinkedIn: Globe,
    Email: Mail,
  };

  const Icon = iconMap[label] || Globe;

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.04] px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.08]"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={isMail ? `Send email via ${label}` : `Open ${label}`}
    >
      <Icon size={16} className="text-blue-400" />
      <span>{label}</span>
    </a>
  );
}

export default ContactLinkCard;