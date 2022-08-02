/** Dependencies */
import React from 'react'

/** Style */
import './Navbar.scss';

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="/buttons">Buttons</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar