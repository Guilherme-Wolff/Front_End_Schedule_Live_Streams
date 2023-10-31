
import { Link } from 'react-router-dom'
import {ReactComponent as ReactLogo} from './logo_toksave-50.svg';

export const LogoSave = (smallSidebar:any) => {
    return (
        <div className={`sidebar__instagram__logo__small ${smallSidebar ? 'show_logo' : 'close_logo'}`}>
        <ReactLogo />
        </div>
    )
}