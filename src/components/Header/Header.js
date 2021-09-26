import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="text-center header">
            <h1 className="display-2 text-warning">Rock The Throne</h1>
            <h4 className="fs-5 text-light">The Biggest Rock Concert In Your Country</h4>
            <h4><small className="fs-6 fw-light text-light"><em>When all is one and one is all, that's what it is To be a rock and not to roll.</em></small></h4>
            <h1 className="text-warning">Total Budget: <strong className="text-danger">1 Million</strong></h1>
        </div>
    );
};

export default Header;