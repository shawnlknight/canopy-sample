import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <h2 className="content-aligned"><i className="fa fa-phone" aria-hidden="true"></i> Call: (555) 555-5555</h2>
      <h2 className="content-aligned"><i className="fa fa-envelope-o" aria-hidden="true"></i> Email: <a href="#">canopy@email.com</a></h2>
    </div>
  );
}

export default Footer;
