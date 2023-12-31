import React, { useEffect, useState } from 'react';
import '../App.css'
function Footer() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;

      setFooterVisible(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <footer className={footerVisible ? 'visible' : 'hidden'}>
     
      <i className="fa-brands fa-instagram insta" />
      <i className="fa-brands fa-github github" />
      <i className="fa-brands fa-twitter twitter" />
      <i className="fa-brands fa-linkedin linkedin" />
    </footer>
    
    
    
    </>
    
  );
}

export default Footer;
