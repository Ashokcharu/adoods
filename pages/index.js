"use client";
import BannerSlider from "../components/BannerSlider";

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <BannerSlider />

      {/* About Section */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1>Welcome to Garentz</h1>
        <p style={{ marginTop: "10px", fontSize: "1.1rem", color: "#555" }}>
          We design and sell premium quality t-shirts for men that combine
          comfort, style, and durability. Each shirt is crafted with love and
          made to make you stand out.
        </p>
      </section>

      {/* Featured Products */}
      <section
        style={{
          background: "#f9f9f9",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>Featured Collection</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1000px",
            margin: "40px auto",
          }}
        >
          {["tshirt1.jpg", "tshirt2.jpg", "tshirt3.jpg"].map((img, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#fff",
                padding: "15px",
              }}
            >
              <img
                src={`/${img}`}
                alt="tshirt"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ marginTop: "15px" }}>
                {["Classic Tee", "Streetwear Tee", "Printed Tee"][i]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h2>Why Choose Garentz?</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          <div>
            <h4>💎 Premium Fabric</h4>
            <p>Only high-quality cotton used for lasting comfort.</p>
          </div>
          <div>
            <h4>🧵 Perfect Fit</h4>
            <p>Designed for real people — fitted, but never tight.</p>
          </div>
          <div>
            <h4>🚚 Fast Shipping</h4>
            <p>Quick delivery right to your doorstep, no delays.</p>
          </div>
        </div>
      </section>

      {/* About Garentz */}
      <section
        style={{
          background: "#fff",
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>About Garentz</h2>
        <p style={{ marginTop: "15px", fontSize: "1.1rem", color: "#555" }}>
          Garentz was founded with one mission — to redefine comfort and fashion
          for men’s wear in India. Our team focuses on premium fabrics,
          sustainable production, and minimalist design to help you look and
          feel your best every day.
        </p>
      </section>

      {/* Customer Reviews */}
      <section
        style={{
          background: "#f9f9f9",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>What Our Customers Say</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1000px",
            margin: "40px auto",
          }}
        >
          {[
            {
              text: "Amazing quality! The shirt feels great and the fit is perfect.",
              name: "Rahul, Chennai",
            },
            {
              text: "Loved the design and packaging. Definitely buying more soon!",
              name: "Priya, Bangalore",
            },
            {
              text: "Comfortable fabric, stylish look — worth every rupee!",
              name: "Arjun, Hyderabad",
            },
          ].map((review, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "8px",
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              }}
            >
              <p>“{review.text}”</p>
              <strong>– {review.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2>Join Our Community</h2>
        <p style={{ marginTop: "10px", color: "#ccc" }}>
          Subscribe to get updates on new collections and exclusive offers!
        </p>
        <form
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            style={{
              padding: "12px 15px",
              borderRadius: "6px",
              border: "none",
              width: "250px",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#fff",
              color: "#111",
              padding: "12px 25px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
