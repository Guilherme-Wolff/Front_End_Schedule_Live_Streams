
import { Link } from 'react-router-dom'
import './LogoMobile.scss'
//import { ReactComponent as ReactLogo } from './logo2.jpeg';

import logo from './logo2.jpeg';

export const LogoMobile = () => {
    return (
        <img className="logo" src={logo} alt="Logo" />

    )
}