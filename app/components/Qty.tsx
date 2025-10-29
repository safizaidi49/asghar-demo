// app/components/Qty.tsx
"use client";

import { useState } from "react";

export default function Qty() {
  const [q, setQ] = useState(1);
  return (
    <div style={{
      display:"inline-flex", alignItems:"center", border:"1px solid #e5e7eb",
      borderRadius:8, overflow:"hidden"
    }}>
      <button onClick={()=>setQ(q=>Math.max(1,q-1))} style={{padding:"8px 12px"}}>-</button>
      <div style={{padding:"8px 14px", minWidth:32, textAlign:"center"}}>{q}</div>
      <button onClick={()=>setQ(q=>q+1)} style={{padding:"8px 12px"}}>+</button>
    </div>
  );
}
