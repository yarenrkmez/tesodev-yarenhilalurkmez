
/** Dependencies */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';

/** Style */
import './HomePage.scss';

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div className="home-page">
            <Navbar />

        </div>
    )
}

export default HomePage