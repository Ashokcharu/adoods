import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ 
      background: "#111", 
      color: "#fff",
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ 
            fontSize: "1.8rem", 
            margin: 0, 
            fontWeight: 700,
            color: "#fff",
            cursor: 'pointer',
            transition: 'opacity 0.3s ease'
          }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
             onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
            Adoods
          </h1>
        </Link>
        <div style={{ display: "flex", gap: "25px", fontSize: "1rem" }}>
          <Link href="/" style={{ 
            color: "#fff", 
            textDecoration: 'none',
            padding: '5px 0',
            borderBottom: '2px solid transparent',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
             onMouseOut={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>
            Home
          </Link>
          <Link href="/shop" style={{ 
            color: "#fff", 
            textDecoration: 'none',
            padding: '5px 0',
            borderBottom: '2px solid transparent',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
             onMouseOut={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>
            Shop
          </Link>
          <Link href="/contact" style={{ 
            color: "#fff", 
            textDecoration: 'none',
            padding: '5px 0',
            borderBottom: '2px solid transparent',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
             onMouseOut={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
