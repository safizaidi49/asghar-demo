"use client";

import styles from "./Shipping.module.css";
import { useState } from "react";

export default function ShippingForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: send to /api/contact or a service
    setTimeout(() => setSubmitting(false), 800); // demo
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row2}>
        <input className={styles.input} type="text" placeholder="Name" required />
        <input className={styles.input} type="email" placeholder="Email" required />
      </div>
      <div className={styles.row2}>
        <input className={styles.input} type="tel" placeholder="Telephone" />
        <input className={styles.input} type="text" placeholder="Subject" />
      </div>
      <textarea className={styles.textarea} placeholder="Your question here..." />
      <button className={styles.btn} type="submit" disabled={submitting}>
        {submitting ? "S E N D I N G" : "S E N D"}
      </button>
    </form>
  );
}
