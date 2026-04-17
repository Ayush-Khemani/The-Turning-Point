"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const article = document.querySelector("[data-article-body]");
      if (!article) {
        setProgress(0);
        return;
      }

      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight - window.innerHeight;
      const travelled = window.scrollY - (window.scrollY + rect.top);

      if (total <= 0) {
        setProgress(100);
        return;
      }

      const nextProgress = Math.max(0, Math.min(100, (travelled / total) * 100));
      setProgress(nextProgress);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="reading-progress">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}
