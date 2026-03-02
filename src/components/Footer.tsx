const Footer = () => {
  return (
    <>
      <style>
        {`
          @keyframes slideUpFade {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          .short-footer-text {
            font-size: clamp(2rem, 10vw, 7rem); 
            font-family: 'Outfit', sans-serif;
            font-weight: 950;
            text-align: center;
            line-height: 1;
            letter-spacing: -3px;
            margin: 0 auto;
            text-transform: uppercase;
            background: linear-gradient(180deg, #ff9d00 0%, #ff4d00 45%, #e11d1d 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 
              -1px -1px 0px #ffd700, 
              1px 1px 0px #000, 
              2px 2px 0px #7b0000, 
              3px 3px 0px #6b0000, 
              4px 4px 15px rgba(0,0,0,0.5);
            opacity: 1;
          }

          .footer-copyright {
            opacity: 0.3;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 3px;
            margin-top: 2rem;
            text-transform: uppercase;
          }

          .footer-minimal-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .minimal-link {
            color: rgba(255, 255, 255, 0.5);
            text-decoration: none;
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: 2px;
            transition: color 0.3s ease;
          }

          .minimal-link:hover {
            color: #ff0000;
          }
        `}
      </style>

      <footer
        style={{
          background: '#000000',
          color: '#ffffff',
          padding: '60px 6% 40px',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          borderTop: 'none'
        }}
      >
        <div className="footer-minimal-links">
          <a href="https://www.instagram.com/svce_highways" target="_blank" rel="noopener noreferrer" className="minimal-link">INSTAGRAM</a>
          <a href="mailto:highways@svce.ac.in" className="minimal-link">CONTACT</a>
        </div>

        <h1 className="short-footer-text">HIGHWAYS'26</h1>

        <div className="footer-copyright">
          © 2026 HIGHWAYS
        </div>
      </footer>
    </>
  );
};

export default Footer;