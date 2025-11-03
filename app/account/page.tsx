"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import s from "./account.module.css";

type Tab = "dashboard" | "orders" | "logout";

export default function AccountPage() {
  const router = useRouter();
  const [active, setActive] = useState<Tab>("dashboard");

  // purely for display right now — no auth required
  const email = "customer@demo.ae";

  function logout() {
    // no auth to clear yet; just navigate to sign-in for now
    router.replace("/sign-in");
  }

  return (
    <main className={s.wrap}>
      <div className={s.container}>
        {/* Mobile Tabs */}
        <div className={s.mobileTabs} role="tablist" aria-label="Account sections">
          <button
            className={`${s.tabBtn} ${active === "dashboard" ? s.tabBtnActive : ""}`}
            onClick={() => setActive("dashboard")}
            role="tab"
            aria-selected={active === "dashboard"}
          >
            Dashboard
          </button>
          <button
            className={`${s.tabBtn} ${active === "orders" ? s.tabBtnActive : ""}`}
            onClick={() => setActive("orders")}
            role="tab"
            aria-selected={active === "orders"}
          >
            Orders
          </button>
          <button className={`${s.tabBtn} ${s.logout}`} onClick={logout}>
            Log out
          </button>
        </div>

        <aside className={s.sidebar}>
          <div className={s.sideTitle}>My Account</div>
          <nav className={s.nav} aria-label="Account navigation">
            <button
              className={`${s.navItem} ${active === "dashboard" ? s.navItemActive : ""}`}
              onClick={() => setActive("dashboard")}
            >
              <span className={s.icon}>🏠</span> Dashboard
            </button>
            <button
              className={`${s.navItem} ${active === "orders" ? s.navItemActive : ""}`}
              onClick={() => setActive("orders")}
            >
              <span className={s.icon}>🧾</span> Orders
            </button>
            <button className={`${s.navItem} ${s.logout}`} onClick={logout}>
              <span className={s.icon}>⎋</span> Log out
            </button>
          </nav>
        </aside>

        <section className={s.content}>
          {active === "dashboard" && (
            <div className={s.card}>
              <div className={s.cardHead}>
                <h1 className={s.h1}>Welcome, {email}</h1>
                <p className={s.muted}>
                  From your dashboard you can check recent orders and manage your details.
                </p>
              </div>

              <div className={s.kpis}>
                <div className={s.kpi}>
                  <div className={s.kpiNum}>0</div>
                  <div className={s.kpiLabel}>Open Orders</div>
                </div>
                <div className={s.kpi}>
                  <div className={s.kpiNum}>AED 0.00</div>
                  <div className={s.kpiLabel}>Total Spent</div>
                </div>
                <div className={s.kpi}>
                  <div className={s.kpiNum}>—</div>
                  <div className={s.kpiLabel}>Last Order</div>
                </div>
              </div>

              <div className={s.quick}>
                <button className={s.primary} onClick={() => setActive("orders")}>
                  View Orders
                </button>
              </div>
            </div>
          )}

          {active === "orders" && (
            <div className={s.card}>
              <div className={s.cardHead}>
                <h2 className={s.h2}>Your Orders</h2>
                <p className={s.muted}>You haven’t placed any orders yet.</p>
              </div>
              <div className={s.tableWrap}>
                <table className={s.table}>
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} style={{ textAlign: "center", padding: 20, color: "#6b7280" }}>
                        No orders yet.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
