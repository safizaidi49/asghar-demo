// app/components/Accordion.tsx
"use client";

import { useState } from "react";

export default function Accordion({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{border:"1px solid #e5e7eb", borderRadius:10}}>
      <button
        onClick={()=>setOpen(o=>!o)}
        style={{
          width:"100%", textAlign:"left", padding:"12px 14px",
          fontWeight:700, background:"#fff", border:0, borderRadius:10
        }}
      >
        {title} {open ? "▾" : "▸"}
      </button>
      {open && (
        <div style={{padding:"12px 14px", background:"#fff"}}>
          {children}
        </div>
      )}
    </div>
  );
}
