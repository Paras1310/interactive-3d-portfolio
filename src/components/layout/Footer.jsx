import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-zinc-400">
          Built as a personal portfolio focused on growth, projects, and direction.
        </p>
        <p className="text-sm text-zinc-500">© 2026 Paras Sharma</p>
      </Container>
    </footer>
  );
}

export default Footer;