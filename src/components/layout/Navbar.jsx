import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const homeSectionLinks = [
    { label: "Timeline", href: isHomePage ? "#timeline" : "/#timeline" },
    { label: "Skills", href: isHomePage ? "#skills" : "/#skills" },
    { label: "Future", href: isHomePage ? "#future" : "/#future" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-400/10 bg-black/45 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-white"
          onClick={handleClose}
        >
          <Globe size={15} className="text-blue-400" />
          <span>Paras</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {homeSectionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-300 transition duration-300 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

          <Link
            to="/projects"
            className="text-sm text-zinc-300 transition duration-300 hover:text-blue-400"
          >
            Projects
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-blue-400/15 bg-blue-400/[0.04] p-2 text-white transition hover:bg-blue-400/[0.08] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-blue-400/10 bg-black/80 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col py-4">
            {homeSectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm text-zinc-300 transition duration-300 hover:bg-blue-400/[0.05] hover:text-blue-400"
                onClick={handleClose}
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/projects"
              className="rounded-xl px-3 py-3 text-sm text-zinc-300 transition duration-300 hover:bg-blue-400/[0.05] hover:text-blue-400"
              onClick={handleClose}
            >
              Projects
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;