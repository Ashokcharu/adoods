"use client";
import { useState } from "react";

const socialLinkStyle = {
  color: "#4a148c",
  textDecoration: "none",
  padding: "8px 15px",
  border: "1px solid #4a148c",
  borderRadius: "50px",
  transition: "all 0.3s ease",
  fontSize: "0.9rem",
  display: "inline-block"
};

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      // Show success message
      setShowSuccess(true);
      form.reset();
      
      // Hide success message after 30 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 30000);
      
      // Clean up timer
      return () => clearTimeout(timer);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: "60px 20px" }}>
      {/* Top Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "10px" }}>Get in Touch</h1>
        <p style={{ color: "#555", maxWidth: "700px", margin: "0 auto" }}>
          Have questions about our products or want to collaborate?  
          We're here to help. Fill out the form or visit us at our store location.
        </p>
      </div>

      {/* Contact Info Section */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        padding: "0 20px"
      }}>
        <div style={{
          background: "#f8f9fa",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          textAlign: "center"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px"
          }}>
            <span style={{ fontSize: "1.8rem" }}>📍</span>
          </div>
          <h3 style={{ color: "#2d3748", marginBottom: "15px" }}>Our Location</h3>
          <p style={{ color: "#4a5568", lineHeight: "1.6", margin: 0 }}>
            No 784/1 A1A Near Vakil layout Hosur,<br />
            Hosur, Tamil Nadu 635109
          </p>
        </div>

        <div style={{
          background: "#f8f9fa",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          textAlign: "center"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px"
          }}>
            <span style={{ fontSize: "1.8rem" }}>📞</span>
          </div>
          <h3 style={{ color: "#2d3748", marginBottom: "15px" }}>Contact Us</h3>
          <p style={{ color: "#4a5568", lineHeight: "1.6", margin: 0 }}>
            <a href="tel:09514109080" style={{ color: "#4a148c", textDecoration: "none" }}>+91 95141 09080</a><br />
            <a href="mailto:adoodshosur@gmail.com" style={{ color: "#4a148c", textDecoration: "none" }}>adoodshosur@gmail.com</a>
          </p>
        </div>

        <div style={{
          background: "#f8f9fa",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          textAlign: "center"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #4a148c 0%, #e91e63 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px"
          }}>
            <span style={{ fontSize: "1.8rem" }}>⏰</span>
          </div>
          <h3 style={{ color: "#2d3748", marginBottom: "15px" }}>Working Hours</h3>
          <p style={{ color: "#4a5568", lineHeight: "1.8", margin: 0 }}>
            Monday - Saturday: 10:00 AM - 9:00 PM<br />
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        {/* Left: Contact Form */}
        <div
          style={{
            flex: "1 1 350px",
            maxWidth: "500px",
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "25px" }}>Location</h2>

          <iframe
            title="Adoods Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.197208509887!2d77.8417250749653!3d12.71709598760128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQzJzAxLjYiTiA3N8KwNTAnMzkuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ borderRadius: "10px", marginTop: "15px", border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right: Contact Form */}
        <form
          action="mailto:adoodshosur@gmail.com"
          method="POST"
          encType="text/plain"
          onSubmit={handleSubmit}
          style={{
            flex: "1 1 350px",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Send Us a Message</h2>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="phone" type="text" placeholder="Phone Number (optional)" />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              background: isSubmitting ? "#888" : "#111",
              color: "#fff",
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "6px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.8 : 1,
              transition: "all 0.3s ease"
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Success Message Popup */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '4px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          animation: 'slideIn 0.3s ease-out',
          maxWidth: '90%',
          textAlign: 'center',
          fontSize: '0.95rem'
        }}>
          <span style={{ fontSize: '1.2rem' }}>✓</span>
          <span>Your message has been sent successfully! We'll get back to you soon.</span>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translate(-50%, -20px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
