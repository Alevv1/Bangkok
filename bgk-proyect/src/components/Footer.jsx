import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black' }}>
      <footer className="sticky-footer">
        <div className="my-auto p-1 text-center">
          <div className="copyright" style={{ color: 'white' }}>
            <span>Copyright &copy; Dashboard 2024 </span>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
