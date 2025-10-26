import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "#111", color: "#fff" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px", // reduced height
        }}
      >
        <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Adoods</h2>
        <div style={{ display: "flex", gap: "20px", fontSize: "1rem" }}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
