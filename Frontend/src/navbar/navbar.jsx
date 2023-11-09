import React from 'react';
import img1 from '../img/download.png';

export default function Navbar() {
  return (
    <div className='container-md'>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={img1}
              alt="Logo"
              width="120"
              height="60"
            style={{marginLeft:50}}
            />
          </a>
          <span className="font-weight-bolder font-size-bold">
            <h4>India's No.1 Bus Ticket Booking site</h4>
          </span>
          <li className="nav-item dropdown" style={{ listStyleType: 'none' }}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul className="dropdown-menu dropdown-menu-end "  >
             
              <li><a className="dropdown-item" href="#">Show My Ticket</a></li>
              <li><a className="dropdown-item" href="#">Cancel Ticket</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Login/Sign Up</a></li>
            </ul>
          </li>
        </div>
      </nav>
    </div>
  );
}
