"use client";

import { useState, useTransition } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    startTransition(async () => {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message: string };
      setMessage(data.message);

      if (response.ok) {
        setEmail("");
      }
    });
  }

  return (
    <div className="newsletter-card">
      <p className="eyebrow">Newsletter</p>
      <h3>Thoughtful writing, sent occasionally</h3>
      <p className="muted">
        Join the list for new essays on growth, perspective, and the inner life.
      </p>

      <form onSubmit={onSubmit} className="newsletter-form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Joining..." : "Join"}
        </button>
      </form>

      {message ? <p className="form-note">{message}</p> : null}
    </div>
  );
}
