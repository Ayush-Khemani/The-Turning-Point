import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand">
          <span className="brand-kicker">The Turning Point</span>
          <span className="brand-title">
            Essays on life, psychology, meaning, and growth
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link href="/blog">Journal</Link>
          <Link href="/tags/clarity">Themes</Link>
          <Link href="/#newsletter">Newsletter</Link>
        </nav>
      </div>
    </header>
  );
}
