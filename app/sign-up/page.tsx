"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import s from "@/app/components/auth.module.css";
import { useRouter } from "next/navigation";

const emailRE = /\S+@\S+\.\S+/;

export default function SignUpPage() {
  const router = useRouter();

  // values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");

  // UI state
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  // touched flags
  const [tName, setTName] = useState(false);
  const [tEmail, setTEmail] = useState(false);
  const [tPwd, setTPwd] = useState(false);
  const [tPwd2, setTPwd2] = useState(false);

  // errors (only after blur)
  const nameErr  = tName  && name.trim().length < 2 ? "Please enter your full name." : "";
  const emailErr = tEmail && !emailRE.test(email)    ? "Enter a valid email." : "";
  const pwdErr   = tPwd   && pwd.length < 8          ? "Password must be at least 8 characters." : "";
  const matchErr = tPwd2  && pwd2 !== pwd            ? "Passwords do not match." : "";

  const valid = useMemo(
    () => name.trim().length >= 2 && emailRE.test(email) && pwd.length >= 8 && pwd2 === pwd,
    [name, email, pwd, pwd2]
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTName(true); setTEmail(true); setTPwd(true); setTPwd2(true);
    if (!valid) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 700)); // fake request
    router.push("/sign-in");
  }

  return (
    <main className={s["af-auth-wrap"]}>
      <div className={s["af-auth-card"]}>
        <h1 className={s["af-title"]}>Create Account</h1>
        <p className={s["af-sub"]}>Join Asghar Furniture</p>

        <form onSubmit={onSubmit} noValidate>
          {/* Name */}
          <div className={s["af-field"]}>
            <label className={s["af-label"]} htmlFor="name">Full Name</label>
            <input
              id="name"
              className={`${s["af-input"]} ${nameErr ? s["af-input--error"] : ""}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTName(true)}
              placeholder="Your name"
              required
              minLength={2}
              maxLength={80}
            />
            {nameErr && <div className={s["af-error"]}>{nameErr}</div>}
          </div>

          {/* Email */}
          <div className={s["af-field"]}>
            <label className={s["af-label"]} htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={`${s["af-input"]} ${emailErr ? s["af-input--error"] : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTEmail(true)}
              placeholder="you@email.com"
              required
            />
            {emailErr && <div className={s["af-error"]}>{emailErr}</div>}
          </div>

          {/* Password */}
          <div className={s["af-field"]}>
            <label className={s["af-label"]} htmlFor="password">Password</label>
            <div className={s["af-input-row"]}>
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                className={`${s["af-input"]} ${pwdErr ? s["af-input--error"] : ""}`}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                onBlur={() => setTPwd(true)}
                placeholder="Minimum 8 characters"
                required
                minLength={8}
                maxLength={32}
              />
              <span className={s["af-eye"]} onClick={() => setShowPwd((v) => !v)}>
                {showPwd ? "Hide" : "Show"}
              </span>
            </div>
            {pwdErr && <div className={s["af-error"]}>{pwdErr}</div>}
          </div>

          {/* Confirm */}
          <div className={s["af-field"]}>
            <label className={s["af-label"]} htmlFor="password2">Confirm Password</label>
            <input
              id="password2"
              type={showPwd ? "text" : "password"}
              className={`${s["af-input"]} ${matchErr ? s["af-input--error"] : ""}`}
              value={pwd2}
              onChange={(e) => setPwd2(e.target.value)}
              onBlur={() => setTPwd2(true)}
              placeholder="Re-enter password"
              required
              minLength={8}
              maxLength={32}
            />
            {matchErr && <div className={s["af-error"]}>{matchErr}</div>}
          </div>

          <button type="submit" className={s["af-btn"]} disabled={loading /* visual remains solid */}>
            {loading ? "Creating…" : "Sign Up"}
          </button>

          <p className={s["af-help"]}>
            Already have an account? <Link href="/sign-in" className={s["af-link"]}>Sign In</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
