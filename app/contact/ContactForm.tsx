"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send to API (/app/api/contact/route.ts) or an external service.
    alert("Thanks! We received your message.");
  };

  return (
    <form className="afc-form" onSubmit={onSubmit}>
      <div className="afc-row">
        <input required placeholder="Name" />
        <input required type="email" placeholder="Email" />
      </div>
      <div className="afc-row">
        <input required placeholder="Telephone" />
        <input required placeholder="Subject" />
      </div>
      <textarea rows={8} placeholder="Your question here..." />
      <button className="afc-send" type="submit">SEND</button>
    </form>
  );
}
