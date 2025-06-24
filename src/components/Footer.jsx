import React from "react";

const Footer = () => {
  const footerStyles = {
    footer: {
      position: 'relative',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 50%, #312e81 100%)',
      padding: '48px 16px',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif'
    },
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.2,
      pointerEvents: 'none'
    },
    floatingShape1: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      width: '80px',
      height: '80px',
      background: '#ec4899',
      borderRadius: '50%',
      filter: 'blur(24px)',
      animation: 'pulse 2s infinite'
    },
    floatingShape2: {
      position: 'absolute',
      top: '128px',
      right: '80px',
      width: '64px',
      height: '64px',
      background: '#06b6d4',
      borderRadius: '50%',
      filter: 'blur(16px)',
      animation: 'bounce 3s infinite 1s'
    },
    floatingShape3: {
      position: 'absolute',
      bottom: '80px',
      left: '25%',
      width: '48px',
      height: '48px',
      background: '#facc15',
      borderRadius: '50%',
      filter: 'blur(12px)',
      animation: 'ping 1.5s infinite 0.5s'
    },
    floatingShape4: {
      position: 'absolute',
      bottom: '128px',
      right: '33%',
      width: '56px',
      height: '56px',
      background: '#4ade80',
      borderRadius: '50%',
      filter: 'blur(16px)',
      animation: 'pulse 2.5s infinite 0.7s'
    },
    container: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    },
    mainHeading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '16px',
      transform: 'scale(1)',
      transition: 'transform 0.5s ease-out',
      background: 'linear-gradient(45deg, #f472b6, #a855f7, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    mainHeadingHover: {
      transform: 'scale(1.05)'
    },
    heart: {
      color: '#ef4444',
      display: 'inline-block',
      animation: 'bounce 1s infinite'
    },
    nameLink: {
      background: 'linear-gradient(45deg, #facc15, #ec4899, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textDecoration: 'none',
      fontWeight: '800',
      position: 'relative',
      transition: 'all 0.3s ease'
    },
    socialText: {
      color: '#bfdbfe',
      fontSize: '20px',
      margin: '32px 0',
      fontWeight: '500'
    },
    socialContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '32px',
      flexWrap: 'wrap',
      margin: '32px 0'
    },
    socialLink: {
      display: 'block',
      transform: 'translateY(0) rotate(0deg)',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    socialLinkHover: {
      transform: 'translateY(-12px) rotate(3deg)'
    },
    githubIcon: {
      position: 'relative',
      padding: '16px',
      background: 'linear-gradient(135deg, #374151 0%, #000000 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      border: '1px solid #4b5563',
      transition: 'all 0.3s ease'
    },
    linkedinIcon: {
      position: 'relative',
      padding: '16px',
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(37,99,235,0.3)',
      border: '1px solid #3b82f6',
      transition: 'all 0.3s ease'
    },
    emailIcon: {
      position: 'relative',
      padding: '16px',
      background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(239,68,68,0.3)',
      border: '1px solid #f87171',
      transition: 'all 0.3s ease'
    },
    iconSvg: {
      width: '32px',
      height: '32px',
      color: 'white',
      transition: 'color 0.3s ease'
    },
    divider: {
      width: '100%',
      maxWidth: '384px',
      margin: '48px auto',
      position: 'relative'
    },
    dividerLine: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, #8b5cf6 50%, transparent 100%)',
      opacity: 0.5
    },
    dividerDot: {
      position: 'absolute',
      top: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '16px',
      height: '16px',
      background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    },
    copyright: {
      color: '#d1d5db',
      fontSize: '14px',
      fontWeight: '500'
    },
    bottomGradient: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #06b6d4 75%, #ec4899 100%)',
      animation: 'pulse 3s infinite'
    }
  };

  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  return (
    <footer style={footerStyles.footer}>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
            40%, 43% { transform: translateY(-10px); }
            70% { transform: translateY(-5px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes ping {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          
          .social-link:hover .github-icon {
            box-shadow: 0 20px 40px rgba(139,92,246,0.4) !important;
            border-color: #8b5cf6 !important;
          }
          .social-link:hover .github-icon svg {
            color: #c4b5fd !important;
          }
          
          .social-link:hover .linkedin-icon {
            box-shadow: 0 20px 40px rgba(6,182,212,0.4) !important;
            border-color: #06b6d4 !important;
          }
          .social-link:hover .linkedin-icon svg {
            color: #67e8f9 !important;
          }
          
          .social-link:hover .email-icon {
            box-shadow: 0 20px 40px rgba(251,191,36,0.4) !important;
            border-color: #fbbf24 !important;
          }
          .social-link:hover .email-icon svg {
            color: #fde68a !important;
          }

          @media (max-width: 640px) {
            .main-heading { font-size: 20px !important; }
            .social-text { font-size: 18px !important; }
            .social-container { gap: 24px !important; }
          }
        `}
      </style>

      {/* Animated background elements */}
      <div style={footerStyles.backgroundElements}>
        <div style={footerStyles.floatingShape1}></div>
        <div style={footerStyles.floatingShape2}></div>
        <div style={footerStyles.floatingShape3}></div>
        <div style={footerStyles.floatingShape4}></div>
      </div>

      {/* Main content */}
      <div style={footerStyles.container}>
        
        {/* Main heading section */}
        <div 
          className="main-heading"
          style={footerStyles.mainHeading}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Made with <span style={footerStyles.heart}>❤️</span> by{" "}
          <a
            href="thallaganeshgoud18@gmail.com"
            style={footerStyles.nameLink}
            target="_blank"
            rel="noreferrer"
          >
            Thalla Ganesh Goud
          </a>
        </div>
        
        <p className="social-text" style={footerStyles.socialText}>
          🌟 Connect with me on social media 🌟
        </p>

        {/* Social media links */}
        <div className="social-container" style={footerStyles.socialContainer}>
          <a
            href="https://github.com/ThallaGaneshGoud"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            style={{
              ...footerStyles.socialLink,
              ...(hoveredIcon === 'github' ? footerStyles.socialLinkHover : {})
            }}
            onMouseEnter={() => setHoveredIcon('github')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className="github-icon" style={footerStyles.githubIcon}>
              <svg style={footerStyles.iconSvg} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/thalla-ganeshgoud-16b0702a5"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            style={{
              ...footerStyles.socialLink,
              ...(hoveredIcon === 'linkedin' ? footerStyles.socialLinkHover : {})
            }}
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className="linkedin-icon" style={footerStyles.linkedinIcon}>
              <svg style={footerStyles.iconSvg} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </a>

          <a
            href="mailto:thallaganeshgoud18@gmail.com"
            className="social-link"
            style={{
              ...footerStyles.socialLink,
              ...(hoveredIcon === 'email' ? footerStyles.socialLinkHover : {})
            }}
            onMouseEnter={() => setHoveredIcon('email')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className="email-icon" style={footerStyles.emailIcon}>
              <svg style={footerStyles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Decorative divider */}
        <div style={footerStyles.divider}>
          <div style={footerStyles.dividerLine}></div>
          <div style={footerStyles.dividerDot}></div>
        </div>

        {/* Copyright section */}
        <p style={footerStyles.copyright}>
          © {new Date().getFullYear()} All rights reserved | Made with 💖 and ✨
        </p>
      </div>

      {/* Bottom gradient overlay */}
      <div style={footerStyles.bottomGradient}></div>
    </footer>
  );
};

export default Footer;