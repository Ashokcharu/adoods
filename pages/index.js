"use client";
import Link from "next/link";
import BannerSlider from "../components/BannerSlider";

const sectionHeaderStyle = {
  fontSize: '2.5rem',
  color: '#1a1a1a',
  margin: '0 0 20px 0',
  fontWeight: '700',
  lineHeight: '1.3',
  position: 'relative',
  display: 'inline-block',
  paddingBottom: '15px'
};

const sectionHeaderLine = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80px',
  height: '4px',
  background: '#4a148c',
  borderRadius: '2px'
};

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <BannerSlider />
      
      {/* Spacer to push content below fixed banner */}
      <div style={{ height: 'calc(100vh - 60px)' }}></div>

      {/* Banner Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '50px 20px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 style={sectionHeaderStyle}>
            Welcome to Adoods - Your Style Destination
            <div style={sectionHeaderLine} />
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4a4a4a',
            lineHeight: '1.8',
            margin: '0 auto',
            maxWidth: '800px'
          }}>
            Discover our exclusive collection of premium school uniforms and trendy fashion wear, 
            designed for comfort, durability, and style that lasts all day long.
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <section
        style={{
          background: "#f9f9f9",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={sectionHeaderStyle}>
          Featured Collection
          <div style={sectionHeaderLine} />
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1000px",
            margin: "40px auto",
          }}
        >
          {["img/Design_7.jpeg", "img/Design_10.jpeg", "img/Design_11.jpeg"].map((img, i) => (
            <Link 
              key={i} 
              href="/shop"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                borderRadius: '8px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  background: "#fff",
                  padding: "15px",
                  height: "100%",
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <img
                    src={`/${img}`}
                    alt="Featured T-Shirt"
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <h3 style={{ margin: "15px 0 10px", color: '#333' }}>Premium T-Shirt {i + 1}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1
        }}>
          <h2 style={sectionHeaderStyle}>
            Why Choose Adoods?
            <div style={sectionHeaderLine} />
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "40px"
            }}
          >
            {[
              {
                icon: "✨",
                title: "Premium Quality",
                description: "Only the finest fabrics and materials for ultimate comfort and durability."
              },
              {
                icon: "👕",
                title: "Perfect Fit",
                description: "Designed to flatter every body type with attention to detail and comfort."
              },
              {
                icon: "⚡",
                title: "Fast Shipping",
                description: "Quick and reliable delivery to your doorstep, with real-time tracking."
              }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  background: "white",
                  padding: "40px 25px",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0,0,0,0.05)",
                  cursor: "default"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "20px"
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                  color: "#2d3748"
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "#4a5568",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(233,30,99,0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0
        }}></div>
      </section>

      {/* About Adoods */}
      <section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    className="about-grid"
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center",
    }}
  >
    {/* Left Content */}
    <div>
      <h2
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "15px",
          color: "#1a202c",
        }}
      >
        About <span style={{ color: "#e91e63" }}>Adoods</span>
      </h2>

      <div
        style={{
          height: "4px",
          width: "80px",
          background: "linear-gradient(90deg, #4a148c 0%, #e91e63 100%)",
          marginBottom: "30px",
          borderRadius: "2px",
        }}
      ></div>

      <p
        style={{
          color: "#4a5568",
          lineHeight: "1.8",
          marginBottom: "25px",
          fontSize: "1.05rem",
        }}
      >
        At Adoods, we believe that great style starts with great basics. Founded in 2017, we've been dedicated to creating premium quality t-shirts that combine comfort, style, and sustainability.
      </p>

      <p
        style={{
          color: "#4a5568",
          lineHeight: "1.8",
          marginBottom: "35px",
          fontSize: "1.05rem",
        }}
      >
        Our mission is simple: to provide you with wardrobe essentials that look good, feel amazing, and last longer. Every stitch tells a story of quality and attention to detail.
      </p>

      <button
        onClick={() => (window.location.href = "/shop")}
        style={{
          background: "linear-gradient(90deg, #4a148c 0%, #7b1fa2 100%)",
          color: "white",
          border: "none",
          padding: "14px 35px",
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(74, 20, 140, 0.3)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 7px 20px rgba(74, 20, 140, 0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 15px rgba(74, 20, 140, 0.3)";
        }}
      >
        Explore Our Collection
      </button>
    </div>

    {/* Right Image */}
    <div
      style={{
        position: "relative",
        height: "500px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="/img/aboutus.jpeg"
        alt="About Adoods"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  </div>

  {/* ✅ Responsive Fix */}
  <style>
    {`
      @media (max-width: 900px) {
        .about-grid {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
          text-align: center;
        }

        .about-grid div:first-child {
          padding: 0 10px;
        }

        .about-grid img {
          height: 350px !important;
        }

        section {
          padding: 60px 15px !important;
        }
      }

      @media (max-width: 480px) {
        .about-grid img {
          height: 280px !important;
        }

        .about-grid h2 {
          font-size: 1.8rem !important;
        }
      }
    `}
  </style>
</section>



{/* ✅ School Uniforms Section - Fully Responsive */}
<section
  style={{
    padding: "80px 5%",
    backgroundColor: "#ffffff",
  }}
>
  <div
    className="uniform-grid"
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      gap: "50px",
    }}
  >
    {/* Left Text Content */}
    <div style={{ flex: 1, textAlign: "left" }}>
      <h2
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "15px",
          color: "#1a202c",
        }}
      >
        Premium School Sports Uniforms
        <div
          style={{
            height: "4px",
            width: "80px",
            background: "linear-gradient(90deg, #4a148c 0%, #e91e63 100%)",
            marginTop: "10px",
            borderRadius: "2px",
          }}
        />
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#4a148c",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        Excellence in Uniforms, Excellence in Education
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          color: "#4a4a4a",
          lineHeight: "1.8",
          marginBottom: "25px",
        }}
      >
        At Adoods, we understand the importance of quality school uniforms that combine comfort,
        durability, and style. Our uniforms are designed to withstand the rigors of daily school life
        while keeping students comfortable throughout the day.
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginBottom: "35px",
        }}
      >
        {[
          "Premium quality fabrics for all-day comfort",
          "Durable stitching for long-lasting wear",
          "Wrinkle-resistant and easy to maintain",
          "Available in various sizes and custom fittings",
          "Compliant with school dress codes",
        ].map((item, index) => (
          <li
            key={index}
            style={{
              padding: "8px 0",
              color: "#4a4a4a",
              position: "relative",
              paddingLeft: "30px",
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "#4a148c",
              }}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <button
        style={{
          background: "linear-gradient(90deg, #4a148c 0%, #7b1fa2 100%)",
          color: "white",
          border: "none",
          padding: "14px 35px",
          borderRadius: "50px",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(74, 20, 140, 0.3)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 7px 20px rgba(74, 20, 140, 0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 15px rgba(74, 20, 140, 0.3)";
        }}
      >
        View Uniform Collection
      </button>
    </div>

    {/* Right Image */}
    <div
      style={{
        flex: 1,
        position: "relative",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        height: "500px",
      }}
    >
      <img
        src="/img/schooluniform.png"
        alt="Premium School Uniforms"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  </div>

  {/* ✅ Responsive Design */}
  <style>
    {`
      @media (max-width: 900px) {
        .uniform-grid {
          flex-direction: column !important;
          text-align: center !important;
          gap: 40px !important;
        }

        .uniform-grid div:first-child {
          padding: 0 10px;
        }

        .uniform-grid img {
          height: 350px !important;
        }

        section {
          padding: 60px 15px !important;
        }
      }

      @media (max-width: 480px) {
        .uniform-grid img {
          height: 280px !important;
        }

        .uniform-grid h2 {
          font-size: 1.8rem !important;
        }
      }
    `}
  </style>
</section>

      {/* Testimonials */}
      <section
        style={{
          padding: "100px 20px",
          background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
          textAlign: "center"
        }}
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            marginBottom: "15px",
            color: "#2d3748"
          }}>
            What Our Customers Say
          </h2>
          <p style={{
            color: "#718096",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.6"
          }}>
            Don't just take our word for it. Here's what our customers have to say about their Adoods experience.
          </p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "40px"
          }}>
            {[
              {
                name: "Rahul Sharma",
                role: "Frequent Shopper",
                avatar: "👨‍💼",
                review: "The quality of Adoods t-shirts is unmatched. They're my go-to for both casual and semi-formal looks.",
                rating: "★★★★★"
              },
              {
                name: "Priya Patel",
                role: "Fashion Blogger",
                avatar: "👩‍💻",
                review: "I've tried many brands, but Adoos stands out for their perfect fit and durability. Highly recommend!",
                rating: "★★★★★"
              },
              {
                name: "Amit Kumar",
                role: "First-time Buyer",
                avatar: "👨‍🎓",
                review: "Impressed with the fabric quality and stitching. Will definitely be buying more colors!",
                rating: "★★★★☆"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                style={{
                  background: "white",
                  padding: "35px 30px",
                  borderRadius: "12px",
                  boxShadow: "0 5px 25px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  textAlign: "left",
                  position: "relative",
                  border: "1px solid rgba(0,0,0,0.03)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 25px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{
                  fontSize: "2.5rem",
                  position: "absolute",
                  top: "-20px",
                  left: "30px",
                  background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}>
                  {testimonial.avatar}
                </div>
                <p style={{
                  color: "#4a5568",
                  lineHeight: "1.8",
                  fontStyle: "italic",
                  marginBottom: "25px",
                  position: "relative",
                  paddingTop: "10px"
                }}>
                  "{testimonial.review}"
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <h4 style={{
                      margin: "0 0 5px 0",
                      color: "#2d3748",
                      fontSize: "1.1rem"
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      margin: 0,
                      color: "#718096",
                      fontSize: "0.9rem"
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                  <div style={{
                    color: "#f6b01e",
                    fontSize: "1.2rem"
                  }}>
                    {testimonial.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Newsletter */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "2.5rem",
            marginBottom: "15px"
          }}>Join Our Community</h2>
          <p style={{ 
            margin: "0 auto 30px", 
            color: "#ccc",
            maxWidth: "600px",
            lineHeight: "1.6"
          }}>
            Subscribe to get updates on new collections and exclusive offers!
          </p>
          <form
            action="mailto:adoodshosur@gmail.com"
            method="POST"
            encType="text/plain"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              maxWidth: "500px",
              margin: "0 auto"
            }}
          >
          <input
            type="email"
            placeholder="Enter your email"
            required
            style={{
              padding: "0 15px",
              borderRadius: "6px",
              border: "none",
              minWidth: "250px",
              flex: "1",
              height: "42px",
              boxSizing: "border-box",
              fontSize: "1rem"
            }}
          />
          <button
            type="submit"
            style={{
              background: "#fff",
              color: "#111",
              padding: "0 25px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              height: "42px",
              boxSizing: "border-box",
              fontSize: "0.95rem"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Subscribe
          </button>
        </form>
        </div>
      </section>
    </div>
  );
}
