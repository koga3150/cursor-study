export default function Header() {
  return (
    <header style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      padding: "20px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 28 }}>&#9776;</span>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: "-0.3px" }}>
          Task Dashboard
        </h1>
      </div>
      <nav style={{ display: "flex", gap: 24, fontSize: 15 }}>
        <a href="#" style={{ color: "#fff", textDecoration: "none", opacity: 0.9 }}>Home</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", opacity: 0.9 }}>Projects</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", opacity: 0.9 }}>Settings</a>
      </nav>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: 600,
      }}>
        U
      </div>
    </header>
  );
}
