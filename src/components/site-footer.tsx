import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">The Turning Point</p>
          <p className="muted">
            A reflective publication about meaning, inner growth, relationships,
            and the human experience.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/blog">Browse articles</Link>
          <Link href="/studio">Open CMS</Link>
        </div>
      </div>
    </footer>
  );
}
