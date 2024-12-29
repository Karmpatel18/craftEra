import React from 'react';
import './about.css'
function AboutUs() {
  const features = [
    { title: "🎨 Artist Profiles", description: "Personalized profiles for artists to showcase their bio and art journey." },
    { title: "🛍️ Art Marketplace", description: "A platform to sell paintings, sculptures, and other artworks easily." },
    { title: "🌍 Global Exposure", description: "Showcase your art to a worldwide audience for maximum visibility." },
    { title: "🖌️ Custom Art Commissions", description: "Allow buyers to request personalized artwork directly from artists." },
    { title: "💳 Secure Payments", description: "Safe and easy transactions for both buyers and sellers." },
    { title: "💬 Community & Feedback", description: "Ratings and reviews help artists build trust and improve." },
    { title: "💰 Affordable for Artists", description: "Minimal fees to ensure artists maximize their profits." },
    { title: "📢 Marketing Tools", description: "Promotes your artwork through newsletters and social media." },
    { title: "🖼️ Virtual Art Exhibitions", description: "Host online galleries to showcase and sell collections." },
    { title: "🌱 Eco-Friendly Art Support", description: "Highlights and supports sustainable, eco-friendly art." },
  ]

  return (
    <>
      <div>
        {/* About Us Section header */}
        <div className="photo">
          <h1>Group Photo 📸</h1>
        </div>

        <div className="about-container">

          {/* Our Story */}
          <div className="section card">
            <h3>Our Story ✨</h3>
            <p>CraftEra was built to satisfy the need for an online platform for artists.</p>
          </div>

          {/* Team Members */}
          <div className="section card">
            <h3>Team Members 👥</h3>
            <p>Yash Mevada, Patel Karm, Rathod Krish, Parmar Yuvrajsinh, Patel Harsh</p>
          </div>

          {/* Our Mission */}
          <div className="section card">
            <h3>Our Mission 🎯</h3>
            <p>To promote local artists and their art to newer audiences.</p>
          </div>

        </div>




        <div className="feature-about-container">
          <h2 className="feature-about-title">CraftEra Features</h2>
          <div className="feature-about-cards">
            {features.map((feature, index) => (
              <div className="feature-about-card" key={index}>
                <h2 className="feature-about-card-title">{feature.title}</h2>
                <p className="feature-about-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>     {/* Social media links (optional) */} <div className="title">
          <h2>Our Social media</h2>
        </div>

        <div className="social-media">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src='/assets/insta.png' alt="Instagram" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src='/assets/whatsapp.png' alt="WhatsApp" />
          </a>
        </div>

      </div>
    </>



  );
}

export default AboutUs;