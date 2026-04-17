import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">The Turning Point</p>
          <p className="muted">
            A thoughtful publication for readers interested in self-knowledge,
            emotional depth, relationships, and the inner architecture of a
            meaningful life.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <div className="footer-links">
            <div>
              <Link href="/blog">Latest essays</Link>
              <Link href="/tags/clarity">All themes</Link>
            </div>
            <div>
              <Link href="/#newsletter">Subscribe</Link>
              <Link href="/studio">Studio</Link>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow">Connect</p>
          <div className="footer-links">
            <div>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
              <a href="https://substack.com" target="_blank" rel="noopener noreferrer">
                Substack
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p className="footer-credit">
          © {currentYear} The Turning Point. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
