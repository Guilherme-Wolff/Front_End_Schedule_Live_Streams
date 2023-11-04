
import { Link } from 'react-router-dom'
import './Logo.scss'
//import { ReactComponent as ReactLogo } from './logo2.jpeg';

import logo from './logo2.jpeg';

export const LogoSave = () => {
    return (
        <img className="logo" src={logo} alt="Logo" />

    )
}