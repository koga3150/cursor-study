interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  color: string;
}

export default function StatsCard({ title, value, subtitle, color }: StatsCardProps) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      padding: "24px 20px",
      borderTop: `4px solid ${color}`,
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      textAlign: "left",
    }}>
      <p style={{ margin: 0, fontSize: 13, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.5px" }}>
        {title}
      </p>
      <p style={{ margin: "8px 0 4px", fontSize: 32, fontWeight: 700, color: "#111827" }}>
        {value}
      </p>
      <p style={{ margin: 0, fontSize: 13, color: "#9ca3af" }}>
        {subtitle}
      </p>
    </div>
  );
}
