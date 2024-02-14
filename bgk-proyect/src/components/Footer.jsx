import React from 'react';
import { Container } from 'react-bootstrap';

function Footer(){
    return (
		<Container fluid className="d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black'}}>
			<footer className="sticky-footer ">
				<div className="container my-auto p-1">
					<div className="copyright text-center my-auto" style={{ color: 'white' }}>
						<span>Copyright &copy; Dashboard 2024 </span>
					</div>
				</div>
			</footer>

        </Container>
    )
}
export default Footer;