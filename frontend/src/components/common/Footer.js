import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/footer.css';

const Footer = () => (
  <div className='footer'>
    <Container>
      <footer className='page-footer font-small pt-4'>
        <div className='footer-copyright text-center py-3'>
          © 2023 Copyright:
          <a href='/'> ONOS</a>
        </div>
      </footer>
    </Container>
  </div>
);

export default Footer;
