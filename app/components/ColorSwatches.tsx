// app/components/ColorSwatches.tsx
"use client";

export default function ColorSwatches({
  colors,
}: {
  colors: { name: string; hex: string }[];
}) {
  return (
    <div style={{ margin: "8px 0 6px" }}>
      <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 6 }}>
        Color: <b style={{ color: "#111" }}>{colors[0]?.name ?? ""}</b>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {colors.map((c, i) => (
          <span
            key={i}
            title={c.name}
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              border: "1px solid #e5e7eb",
              background: c.hex,
              display: "inline-block",
            }}
          />
        ))}
      </div>
    </div>
  );
}
