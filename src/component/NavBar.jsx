import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav--wrapper">
                    <div className="nav--title">
                        <p>News</p>
                    </div>
                    <div className="nav--link">
                        <a className="nav--link-modifier" href="/a">Home</a>
                        <a className="nav--link-modifier" href="/a">Category</a>
                        <a className="nav--link-modifier" href="/a">About</a>
                    </div>
                </div>
            </nav>    
        );
    }
}

export default NavBar;
