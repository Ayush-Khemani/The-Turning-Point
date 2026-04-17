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
      <h3>New essays, sent with restraint</h3>
      <p className="muted">
        Join for thoughtful letters on perspective, growth, and the complicated
        work of becoming.
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
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message ? <p className="form-note">{message}</p> : null}
    </div>
  );
}
