"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import s from "@/app/components/auth.module.css";
import { useRouter } from "next/navigation";

const emailRE = /\S+@\S+\.\S+/;

export default function SignInPage() {
  const router = useRouter();

  // values
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // UI state
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  // touched flags (to show messages only after blur)
  const [tEmail, setTEmail] = useState(false);
  const [tPwd, setTPwd] = useState(false);

  // field errors
  const emailErr = tEmail && !emailRE.test(email) ? "Enter a valid email." : "";
  const pwdErr   = tPwd   && pwd.length < 8       ? "Password must be at least 8 characters." : "";

  const valid = useMemo(() => emailRE.test(email) && pwd.length >= 8, [email, pwd]);

  useEffect(() => {
    const remembered = localStorage.getItem("af_auth_demo");
    if (remembered) {
      try { setEmail(JSON.parse(remembered).email ?? ""); } catch {}
    }
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTEmail(true); setTPwd(true);           // force show if user didn't blur
    if (!valid) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600)); // fake request
    if (remember) localStorage.setItem("af_auth_demo", JSON.stringify({ email }));
    router.push("/");
  }

  return (
    <main className={s["af-auth-wrap"]}>
      <div className={s["af-auth-card"]}>
        <h1 className={s["af-title"]}>Welcome Back</h1>
        <p className={s["af-sub"]}>Sign in to continue shopping</p>

        <form onSubmit={onSubmit} noValidate>
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

          <div className={s["af-row"]}>
            <label className={s["af-remember"]}>
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              Remember me
            </label>
            <Link href="/forgot-password" className={s["af-link"]}>Forgot password?</Link>
          </div>

          <button type="submit" className={s["af-btn"]} disabled={loading /* keep solid style */}>
            {loading ? "Signing in…" : "Sign In"}
          </button>

          <p className={s["af-help"]}>
            Don’t have an account? <Link href="/sign-up" className={s["af-link"]}>Sign Up</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
