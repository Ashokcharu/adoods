export default function Contact() {
    return (
      <div style={{padding:'40px',maxWidth:'600px',margin:'auto'}}>
        <h1>Contact Us</h1>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{display:'flex',flexDirection:'column',gap:'15px'}}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="phone" type="text" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" style={{background:'#111',color:'#fff',padding:'10px'}}>Send Message</button>
        </form>
      </div>
    )
  }
  